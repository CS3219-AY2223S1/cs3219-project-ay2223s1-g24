module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">517. Validate Binary Search Tree</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p>
<p>A <strong>valid BST</strong> is defined as follows:</p>
<ul>
<li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" style="width: 302px; height: 182px;"/>
<pre><strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> true
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" style="width: 422px; height: 292px;"/>
<pre><strong>Input:</strong> root = [5,1,4,null,null,3,6]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node's value is 5 but its right child's value is 4.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;