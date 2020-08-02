import fs from 'fs';
import matter from 'gray-matter';

/**
 * Returns a list pages
 * @returns {string[]} Array of folder names in the pages directory
 */
export function getPageLists() {
  return fs
    .readdirSync('src/pages')
    .filter((v) => !/.jsx|.js/.test(v))
    .reverse();
}

/**
 * Get data associated with page from markdown file
 * @param {string} page name of page
 */
export async function getPageData(page) {
  const content = await import(`../data/pages/${page}.md`);
  return matter(content.default);
}

/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @returns Page Props
 */
export async function getPageProps(page) {
  const { data, content } = await getPageData(page);
  return {
    props: {
      navLinks: getPageLists(),
      data,
      content,
    },
  };
}
