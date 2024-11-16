const { Client } = require("@notionhq/client");

// Call our the env keys
const { NOTION_KEY, NOTION_DB } = process.env;

// Initializing a client
const notion = new Client({
	auth: NOTION_KEY,
});

exports.handler = async function (event, context) {
	try {
		// Gets the DB metadata
		const dbResponse = await notion.databases.retrieve({ database_id: NOTION_DB });
		
		// Gets the DB items
		const response = await notion.databases.query({
			database_id: NOTION_DB,
			filter: {
				property: "Live",
				checkbox: {
					equals: true,
				},
			},
			sorts: [
				{
					property: "Order",
					direction: "ascending",
					// direction: "descending",
				},
			],
		});

		return {
			statusCode: 200,
			// body: JSON.stringify({ dbResponse }),
			body: JSON.stringify({ dbResponse, response }),
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: e.toString(),
		};
	}
};
