import Head from 'next/head';
import { getPageProps } from '../../lib/api';

const About = ({ data, content }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta name="Description" content={data.description}></meta>
    </Head>

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
