/**
 * @param {Object} collectionItem - A single Eleventy collection item
 */
module.exports.api = (collectionItem) =>
{
	return {
		title: collectionItem.data.title,
		author: collectionItem.data.author,
		slug: collectionItem.data.page.fileSlug,
		colors: collectionItem.data.colors.map( color => color.toString() ),
	};
};

/**
 * @param {Object} jsonHistory
 * @param {Object} collectionItem - A single Eleventy collection item
 * @return {Boolean}
 */
module.exports.historyContains = (jsonHistory, collectionItem) =>
{
	let match = jsonHistory.find( element =>
	{
		return element.slug === collectionItem.data.page.fileSlug
	});

	return match !== undefined;
};
