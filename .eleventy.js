module.exports = function( config )
{
	config.addCollection( "palettes", collection =>
	{
		let palettes = collection
			.getFilteredByGlob( "src/palettes/*.md" )
			.filter( palette => !palette.data.disabled )
			.map( palette =>
			{
				palette.data.author = palette.data.author || "Anonymous";
				palette.data.title = palette.data.title || "Untitled";

				return palette;
			});

		return palettes;
	});

	config.addFilter( 'jsonify', collection =>
	{
		let items = collection.map( item =>
		{
			return {
				title: item.data.title,
				author: item.data.author,
				colors: item.data.colors.map( color => color.toString() ),
				date: item.data.date,
			};
		});

		return JSON.stringify( items, null, 2 );
	});

	config.addFilter( 'textify', collection =>
	{
		let text = '';

		collection.forEach( item =>
		{
			text += `# ${item.data.title}\n# Submitted by ${item.data.author}\n${item.data.colors.join( ',' )}\n\n`
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
