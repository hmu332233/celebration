// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { screenshot } from './_utils/chromium';
import { getHtml } from './_utils/template';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { message } = req.query;

    const html = getHtml(message as string);
    const file = await screenshot({ html });
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