import fs from 'fs';

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
