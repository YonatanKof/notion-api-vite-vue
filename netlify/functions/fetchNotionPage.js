const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

// Call our the env keys
const { NOTION_KEY } = process.env;

// Initializing a client
const notion = new Client({
	auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

exports.handler = async function (event, context) {
	try {
		const pageId = "e29cfe4a51344770a9b0014352e6b5ef";
		const response = await notion.pages.retrieve({ page_id: pageId });
		const pageMD = await n2m.pageToMarkdown(pageId, 2);

		return {
			statusCode: 200,
			body: JSON.stringify({ response, pageMD }),
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: e.toString(),
		};
	}
};
