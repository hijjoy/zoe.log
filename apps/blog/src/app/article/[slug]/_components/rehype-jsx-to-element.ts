import type { Element, Nodes, Root } from 'hast';
import type {
  MdxJsxFlowElementHast,
  MdxJsxTextElementHast,
} from 'mdast-util-mdx-jsx';
import { visit } from 'unist-util-visit';

// 본문에 직접 쓴 소문자 태그 중 customComponents 매핑을 태울 것들
const MAPPED_HTML_TAGS = new Set(['mark']);

/**
 * MDX는 본문에 직접 쓴 소문자 JSX 태그(<mark> 등)를 components 매핑에 보내지 않는다.
 * 그런 JSX 노드를 일반 HTML 요소 노드로 바꿔, 마크다운 요소(**굵게** 등)와 같은 매핑을 타게 한다.
 */
export function rehypeJsxToElement() {
  return (tree: Root) => {
    visit(tree, (node, index, parent) => {
      if (!isMappedJsxTag(node) || !parent || index === undefined) return;

      const element: Element = {
        type: 'element',
        tagName: node.name,
        properties: {},
        children: node.children as Element['children'],
        position: node.position,
      };
      parent.children[index] = element;
    });
  };
}

function isMappedJsxTag(
  node: Nodes,
): node is (MdxJsxTextElementHast | MdxJsxFlowElementHast) & { name: string } {
  const isJsx =
    node.type === 'mdxJsxTextElement' || node.type === 'mdxJsxFlowElement';

  return isJsx && MAPPED_HTML_TAGS.has(node.name ?? '');
}
