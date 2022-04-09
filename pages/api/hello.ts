// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getScreenshot } from './_utils/chromium';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      // const parsedReq = parseRequest(req);
      // const html = getHtml(parsedReq);
      // if (isHtmlDebug) {
      //     res.setHeader('Content-Type', 'text/html');
      //     res.end(html);
      //     return;
      // }
      // const { fileType } = parsedReq;
      const file = await getScreenshot();
      res.statusCode = 200;
      res.setHeader('Content-Type', `image/png`);
      res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
      res.end(file);
  } catch (e) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
      console.error(e);
  }
}