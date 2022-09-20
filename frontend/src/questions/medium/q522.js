module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************************************<div id="title">522. Construct Binary Tree from Inorder and Postorder Traversal</div>
***************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;"/>
<pre><strong>Input:</strong> inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> inorder = [-1], postorder = [-1]
<strong>Output:</strong> [-1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= inorder.length &lt;= 3000</code></li>
<li><code>postorder.length == inorder.length</code></li>
<li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code></li>
<li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.</li>
<li>Each value of <code>postorder</code> also appears in <code>inorder</code>.</li>
<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
<li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</li>
</ul>
</div></div><br><br></html> `;