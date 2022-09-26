module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">830. Smallest Subtree with all the Deepest Nodes</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, the depth of each node is <strong>the shortest distance to the root</strong>.</p>
<p>Return <em>the smallest subtree</em> such that it contains <strong>all the deepest nodes</strong> in the original tree.</p>
<p>A node is called <strong>the deepest</strong> if it has the largest depth possible among any node in the entire tree.</p>
<p>The <strong>subtree</strong> of a node is a tree consisting of that node, plus the set of all descendants of that node.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/01/sketch1.png" style="width: 600px; height: 510px;"/>
<pre><strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4]
<strong>Output:</strong> [2,7,4]
<strong>Explanation:</strong> We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = [1]
<strong>Output:</strong> [1]
<strong>Explanation:</strong> The root is the deepest node in the tree.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> root = [0,1,3,null,2]
<strong>Output:</strong> [2]
<strong>Explanation:</strong> The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree will be in the range <code>[1, 500]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 500</code></li>
<li>The values of the nodes in the tree are <strong>unique</strong>.</li>
</ul>
<p> </p>
<p><strong>Note:</strong> This question is the same as 1123: <a href="https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/" target="_blank">https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/</a></p>
</div></div><br><br></html> `;