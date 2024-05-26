// How to use:
// http://localhost:3000/api/getPosts?start=1&end=2
// enter start and end index [start,end)
// or enter end index only to get from 0 to end

import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const dataPath = process.cwd()+'/public/posts.json';
//   console.log('Current directory: ' + process.cwd());
    // console.log("target path is ",dataPath);
    
    let { start=0,end=1 } = req.query


  try {
    const fileContents = await fs.readFile(dataPath, 'utf-8');
    const jsonData = JSON.parse(fileContents);
    const firstFivePosts = jsonData.posts.slice(start, end);
    res.status(200).json(firstFivePosts);
  } catch (err) {
    // console.error('Error reading data file:', err);
    res.status(500).json({ error: 'Failed to get data' });
  }
}
