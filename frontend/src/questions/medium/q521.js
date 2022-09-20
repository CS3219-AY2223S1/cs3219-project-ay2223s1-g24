module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************************<div id="title">521. Construct Binary Tree from Preorder and Inorder Traversal</div>
**************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;"/>
<pre><strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> preorder = [-1], inorder = [-1]
<strong>Output:</strong> [-1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= preorder.length &lt;= 3000</code></li>
<li><code>inorder.length == preorder.length</code></li>
<li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li>
<li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.</li>
<li>Each value of <code>inorder</code> also appears in <code>preorder</code>.</li>
<li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.</li>
<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
</ul>
</div></div><br><br></html> `;