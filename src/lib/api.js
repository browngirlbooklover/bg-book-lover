import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const pagesDirectory = join(process.cwd(), 'src/data/pages');

export function getPostSlugs() {
  return fs.readdirSync(pagesDirectory);
}

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
export function getPageData(page) {
  const fullPath = join(pagesDirectory, `${page}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

/**
 * Generates props for static props
 * @param {string} page The name of the page
 * @returns Page Props
 */
export function getPageProps(page) {
  const { data, content } = getPageData('index');
  return {
    props: {
      navLinks: getPageLists(),
      data,
      content,
    },
  };
}
