/**
 * Wrap Markdown and MDX tables in a scroll container.
 *
 * article.guide uses overflow: hidden so the page banner follows the card
 * radius. That also crops a table wider than the column. The wrapper scrolls
 * on its own, so the glyphs stay reachable and the page does not.
 *
 * Idempotent: MDX and markdown can both be given this plugin.
 */
export function rehypeTableScroll() {
  return (tree) => {
    wrapTables(tree);
  };
}

function isTableScroll(node) {
  if (!node || node.type !== 'element' || node.tagName !== 'div') return false;
  const className = node.properties?.className;
  const classes = Array.isArray(className)
    ? className
    : String(className ?? '')
        .split(/\s+/)
        .filter(Boolean);
  return classes.includes('table-scroll');
}

function wrapTables(node) {
  const children = node?.children;
  if (!children) return;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child?.type === 'element' && child.tagName === 'table' && !isTableScroll(node)) {
      children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'], tabIndex: 0 },
        children: [child],
      };
    } else {
      wrapTables(child);
    }
  }
}
