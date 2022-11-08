module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">732. Find Duplicate Subtrees</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return all <strong>duplicate subtrees</strong>.</p>
<p>For each kind of duplicate subtrees, you only need to return the root node of any <b>one</b> of them.</p>
<p>Two trees are <strong>duplicate</strong> if they have the <strong>same structure</strong> with the <strong>same node values</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e1.jpg" style="width: 450px; height: 354px;"/>
<pre><strong>Input:</strong> root = [1,2,3,4,null,2,4,null,null,4]
<strong>Output:</strong> [[2,4],[4]]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e2.jpg" style="width: 321px; height: 201px;"/>
<pre><strong>Input:</strong> root = [2,1,1]
<strong>Output:</strong> [[1]]
</pre>
<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e33.jpg" style="width: 450px; height: 303px;"/>
<pre><strong>Input:</strong> root = [2,2,2,3,null,3,null]
<strong>Output:</strong> [[2,3],[3]]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of the nodes in the tree will be in the range <code>[1, 5000]</code></li>
<li><code>-200 &lt;= Node.val &lt;= 200</code></li>
</ul>
</div></div><br><br></html> `;