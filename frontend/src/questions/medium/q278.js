module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">734. Print Binary Tree</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, construct a <strong>0-indexed</strong> <code>m x n</code> string matrix <code>res</code> that represents a <strong>formatted layout</strong> of the tree. The formatted layout matrix should be constructed using the following rules:</p>
<ul>
<li>The <strong>height</strong> of the tree is <code>height</code> and the number of rows <code>m</code> should be equal to <code>height + 1</code>.</li>
<li>The number of columns <code>n</code> should be equal to <code>2<sup>height+1</sup> - 1</code>.</li>
<li>Place the <strong>root node</strong> in the <strong>middle</strong> of the <strong>top row</strong> (more formally, at location <code>res[0][(n-1)/2]</code>).</li>
<li>For each node that has been placed in the matrix at position <code>res[r][c]</code>, place its <strong>left child</strong> at <code>res[r+1][c-2<sup>height-r-1</sup>]</code> and its <strong>right child</strong> at <code>res[r+1][c+2<sup>height-r-1</sup>]</code>.</li>
<li>Continue this process until all the nodes in the tree have been placed.</li>
<li>Any empty cells should contain the empty string <code>""</code>.</li>
</ul>
<p>Return <em>the constructed matrix </em><code>res</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/03/print1-tree.jpg" style="width: 141px; height: 181px;"/>
<pre><strong>Input:</strong> root = [1,2]
<strong>Output:</strong> 
[["","1",""],
 ["2","",""]]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/03/print2-tree.jpg" style="width: 207px; height: 302px;"/>
<pre><strong>Input:</strong> root = [1,2,3,null,4]
<strong>Output:</strong> 
[["","","","1","","",""],
 ["","2","","","","3",""],
 ["","","4","","","",""]]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 2<sup>10</sup>]</code>.</li>
<li><code>-99 &lt;= Node.val &lt;= 99</code></li>
<li>The depth of the tree will be in the range <code>[1, 10]</code>.</li>
</ul>
</div></div><br><br></html> `;