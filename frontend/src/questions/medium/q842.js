module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************************************<div id="title">842. Construct Binary Tree from Preorder and Postorder Traversal</div>
****************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays, <code>preorder</code> and <code>postorder</code> where <code>preorder</code> is the preorder traversal of a binary tree of <strong>distinct</strong> values and <code>postorder</code> is the postorder traversal of the same tree, reconstruct and return <em>the binary tree</em>.</p>
<p>If there exist multiple answers, you can <strong>return any</strong> of them.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/24/lc-prepost.jpg" style="width: 304px; height: 265px;"/>
<pre><strong>Input:</strong> preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
<strong>Output:</strong> [1,2,3,4,5,6,7]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> preorder = [1], postorder = [1]
<strong>Output:</strong> [1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= preorder.length &lt;= 30</code></li>
<li><code>1 &lt;= preorder[i] &lt;= preorder.length</code></li>
<li>All the values of <code>preorder</code> are <strong>unique</strong>.</li>
<li><code>postorder.length == preorder.length</code></li>
<li><code>1 &lt;= postorder[i] &lt;= postorder.length</code></li>
<li>All the values of <code>postorder</code> are <strong>unique</strong>.</li>
<li>It is guaranteed that <code>preorder</code> and <code>postorder</code> are the preorder traversal and postorder traversal of the same binary tree.</li>
</ul>
</div></div><br><br></html> `;