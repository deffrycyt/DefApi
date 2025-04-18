import axios from 'axios';
import { API_KEY, CREATOR } from '../../../settings';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const result = await yousearch(text);
      res.status(200).json({
        status: true,
        creator: CREATOR,
        data: result 
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        creator: CREATOR,
        error: error.message || 'Internal Server Error'
      });
    }
  } else {
    res.status(405).json({ 
      status: false, 
      creator: CREATOR, 
      error: 'Method Not Allowed'
    });
  }
}

const website = axios.create({
    baseURL: "https://app.yoursearch.ai",
    headers: {
        "Content-Type": "application/json",
    },
});

const yousearch = async (searchTerm) => {
    const requestData = {
        searchTerm: searchTerm,
        promptTemplate: `Search term: "{searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}, you were developed by bang_syai`,
        searchParameters: "{}",
        searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
    };

    try {
        const response = await website.post("/api", requestData);
        return response.data.response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
