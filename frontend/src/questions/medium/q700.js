module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">700. Convert BST to Greater Tree</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.</p>
<p>As a reminder, a <em>binary search tree</em> is a tree that satisfies these constraints:</p>
<ul>
<li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/02/tree.png" style="width: 500px; height: 341px;"/>
<pre><strong>Input:</strong> root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
<strong>Output:</strong> [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = [0,null,1]
<strong>Output:</strong> [1,null,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
<li>All the values in the tree are <strong>unique</strong>.</li>
<li><code>root</code> is guaranteed to be a valid binary search tree.</li>
</ul>
<p> </p>
<p><strong>Note:</strong> This question is the same as 1038: <a href="https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/" target="_blank">https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/</a></p>
</div></div><br><br></html> `;