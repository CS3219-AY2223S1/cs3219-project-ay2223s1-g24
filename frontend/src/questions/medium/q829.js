module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">829. All Nodes Distance K in Binary Tree</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, the value of a target node <code>target</code>, and an integer <code>k</code>, return <em>an array of the values of all nodes that have a distance </em><code>k</code><em> from the target node.</em></p>
<p>You can return the answer in <strong>any order</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png" style="width: 500px; height: 429px;"/>
<pre><strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
<strong>Output:</strong> [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = [1], target = 1, k = 3
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 500]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 500</code></li>
<li>All the values <code>Node.val</code> are <strong>unique</strong>.</li>
<li><code>target</code> is the value of one of the nodes in the tree.</li>
<li><code>0 &lt;= k &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;