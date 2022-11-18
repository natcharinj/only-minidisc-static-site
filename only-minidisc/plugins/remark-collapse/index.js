// https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/
// const headingRange = require('mdast-util-heading-range')
// const findAfter = require('unist-util-find-after');

const toString = require('mdast-util-to-string')
const visit = require("unist-util-visit")

// https://github.com/syntax-tree/unist-util-find-after/blob/main/index.js
const is = require('unist-util-is');
var toHAST = require('mdast-util-to-hast');
var toHTML = require('hast-util-to-html');

module.exports = ({ markdownAST }) => {

  visit(markdownAST, 'heading', (node) => {
    const { depth } = node;
    // Skip if not an h1
    if (depth !== 1) return;

    let index = markdownAST.children.indexOf(node)

    const contentNodes = [];
    while (++index < markdownAST.children.length) {
      const currentNode = markdownAST.children[index];
      if (is({ type: 'heading', depth: 1 }, currentNode)) {
        break;
      }

      if (is({ type: 'paragraph' }, currentNode)) {
        contentNodes.push(currentNode);
      }
    }

    const headingText = toString(node);
    const body = contentNodes.map(n => toHTML(toHAST(n)));
    node.type = 'html';
    node.value = `<details class='collapse'><summary>${headingText}</summary>${body.join()}</details>`;
    markdownAST.children = markdownAST.children.filter(n => !contentNodes.includes(n))
  });

  return markdownAST;
};
