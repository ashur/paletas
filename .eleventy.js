const fetch = require( "node-fetch" );
const Paletas = require( "./src/scripts/palette" );

module.exports = function( config )
{
	/*
	 * Collections
	 */

	config.addCollection( "history", async (collection) =>
	{
		let url = process.env.HISTORY_URL;
		if( !url )
		{
			console.log( "👻 Skipping /api/history.json" );
			return [];
		}

		let history = [];
		let res = await fetch( url );

		try
		{
			history = await res.json();
		}
		catch( error )
		{
			// We expect invalid JSON in the absence of a valid URL (ex., this
			// is the first history item)
		}

		let allItems = collection
			.getFilteredByGlob( "src/palettes/*.md" )
			.filter( palette => !palette.data.disabled );

		let availableItems = allItems
			.filter( collectionItem =>
			{
				return !Paletas.historyContains( history, collectionItem );
			});

		let randomIndex = Math.floor( Math.random() * availableItems.length );
		let randomItem = availableItems[randomIndex];
		history.unshift( Paletas.api( randomItem ) );

		let maxLength = Math.floor( allItems.length * 0.75 );
		if( history.length >= maxLength )
		{
			history = history.slice( 0, maxLength );
		}

		return history;
	});

	config.addCollection( "palettes", collection =>
	{
		let palettes = collection
			.getFilteredByGlob( "src/palettes/*.md" )
			.filter( palette => !palette.data.disabled )
			.map( palette =>
			{
				/* Default values */
				palette.data.author = palette.data.author || "Anonymous";
				palette.data.title = palette.data.title || "Untitled";

				/* Validate `colors` */
				if( Array.isArray( palette.data.colors ) )
				{
					if( palette.data.colors.length < 3 )
					{
						throw new Error( `At least 3 colors are required (${palette.inputPath})` );
					}

					palette.data.colors.forEach( color =>
					{
						if( color.toString().length !== 6 )
						{
							throw new Error( `Invalid color value: ${color} (${palette.inputPath})` );
						}
					});
				}
				else
				{
					throw new Error( `Missing or unexpected 'colors' value (${palette.inputPath})` );
				}

				return palette;
			});

		return palettes;
	});

	/*
	 * Filters
	 */

	config.addFilter( "api", collection =>
	{
		return collection.map( item => Paletas.api( item ) );
	});

	config.addFilter( "jsonify", items =>
	{
		return JSON.stringify( items, null, 2 );
	});

	config.addFilter( "textify", collection =>
	{
		let text = "";

		collection.forEach( item =>
		{
			text += `# ${item.data.title}\n# Submitted by ${item.data.author}\n${item.data.colors.join( "," )}\n\n`;
		});

		return text.trim();
	});

	return {
		dir: {
			input: "src",
			output: "dist",
		},

		templateFormats: ["njk", "md"],
	};
};
