import { useGithubAuthRedirect } from 'react-tinacms-github';
import { getPageProps } from '../../util/api';

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect();

  return <h2>Authorizing with GitHub, please wait...</h2>;
}

export const getStaticProps = async ({ preview, previewData }) =>
  getPageProps('index', preview, previewData);
