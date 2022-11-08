module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">113. N-ary Tree Preorder Traversal</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of an n-ary tree, return <em>the preorder traversal of its nodes' values</em>.</p>
<p>Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" style="width: 100%; max-width: 300px;"/></p>
<pre><strong>Input:</strong> root = [1,null,3,2,4,null,5,6]
<strong>Output:</strong> [1,3,5,6,2,4]
</pre>
<p><strong>Example 2:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" style="width: 296px; height: 241px;"/></p>
<pre><strong>Input:</strong> root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
<strong>Output:</strong> [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
<li>The height of the n-ary tree is less than or equal to <code>1000</code>.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p>
</div></div><br><br></html> `;