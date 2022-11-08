module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">95. Find Mode in Binary Search Tree</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary search tree (BST) with duplicates, return <em>all the <a href="https://en.wikipedia.org/wiki/Mode_(statistics)" target="_blank">mode(s)</a> (i.e., the most frequently occurred element) in it</em>.</p>
<p>If the tree has more than one mode, return them in <strong>any order</strong>.</p>
<p>Assume a BST is defined as follows:</p>
<ul>
<li>The left subtree of a node contains only nodes with keys <strong>less than or equal to</strong> the node's key.</li>
<li>The right subtree of a node contains only nodes with keys <strong>greater than or equal to</strong> the node's key.</li>
<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg" style="width: 142px; height: 222px;"/>
<pre><strong>Input:</strong> root = [1,null,2,2]
<strong>Output:</strong> [2]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = [0]
<strong>Output:</strong> [0]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).</div></div><br><br></html> `;