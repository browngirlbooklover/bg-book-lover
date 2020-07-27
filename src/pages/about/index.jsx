import { getPageProps } from '../../lib/api';

const About = ({ content }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
