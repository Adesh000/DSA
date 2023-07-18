class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function str2tree(s) {
  if (!s) return null;

  // Find the first parenthesis to split the root value and child subtrees.
  const firstParenIdx = s.indexOf("(");
  if (firstParenIdx === -1) {
    // No parenthesis found, the entire string is the root value.
    return new TreeNode(Number(s));
  }

  // Find the root value and create the root node.
  const rootVal = Number(s.slice(0, firstParenIdx));
  const root = new TreeNode(rootVal);

  // Find the indices of the left and right subtrees.
  let openParenCount = 0;
  let leftStart = firstParenIdx;
  for (let i = firstParenIdx; i < s.length; i++) {
    if (s[i] === "(") {
      openParenCount++;
    } else if (s[i] === ")") {
      openParenCount--;
    }

    if (openParenCount === 0) {
      if (leftStart === firstParenIdx) {
        leftStart = i + 1;
      } else {
        const rightStart = i + 2;
        root.left = str2tree(s.slice(leftStart, i + 1));
        root.right = str2tree(s.slice(rightStart, s.length - 1));
      }
    }
  }

  return root;
}

const treeStr = "4(2(3)(1))(6(5))";
const tree = str2tree(treeStr);
console.log(tree);
