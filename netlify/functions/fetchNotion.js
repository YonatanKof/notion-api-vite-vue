const { Client } = require("@notionhq/client");

// Call our the env keys
const { NOTION_KEY, NOTION_DB } = process.env;

// Initializing a client
const notion = new Client({
	// auth: process.env.NOTION_TOKEN,
	auth: NOTION_KEY,
});

exports.handler = async function (event, context) {
	try {
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
			body: JSON.stringify({ response }),
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: e.toString(),
		};
	}
};
