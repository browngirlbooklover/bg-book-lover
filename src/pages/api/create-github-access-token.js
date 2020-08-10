import { createAuthHandler } from 'next-tinacms-github';

export default createAuthHandler(
  process.env.GITHUB_CLIENT_ID_T || '',
  process.env.GITHUB_CLIENT_SECRET_T || '',
  process.env.SIGNING_KEY || ''
);
