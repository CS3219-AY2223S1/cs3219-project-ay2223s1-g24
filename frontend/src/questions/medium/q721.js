module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">721. Add One Row to Tree</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree and two integers <code>val</code> and <code>depth</code>, add a row of nodes with value <code>val</code> at the given depth <code>depth</code>.</p>
<p>Note that the <code>root</code> node is at depth <code>1</code>.</p>
<p>The adding rule is:</p>
<ul>
<li>Given the integer <code>depth</code>, for each not null tree node <code>cur</code> at the depth <code>depth - 1</code>, create two tree nodes with value <code>val</code> as <code>cur</code>'s left subtree root and right subtree root.</li>
<li><code>cur</code>'s original left subtree should be the left subtree of the new left subtree root.</li>
<li><code>cur</code>'s original right subtree should be the right subtree of the new right subtree root.</li>
<li>If <code>depth == 1</code> that means there is no depth <code>depth - 1</code> at all, then create a tree node with value <code>val</code> as the new root of the whole original tree, and the original tree is the new root's left subtree.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg" style="width: 500px; height: 231px;"/>
<pre><strong>Input:</strong> root = [4,2,6,3,1,5], val = 1, depth = 2
<strong>Output:</strong> [4,1,1,2,null,null,6,3,1,5]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg" style="width: 500px; height: 277px;"/>
<pre><strong>Input:</strong> root = [4,2,null,3,1], val = 1, depth = 3
<strong>Output:</strong> [4,2,null,1,1,3,null,null,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li>The depth of the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
<li><code>-10<sup>5</sup> &lt;= val &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= depth &lt;= the depth of tree + 1</code></li>
</ul>
</div></div><br><br></html> `;