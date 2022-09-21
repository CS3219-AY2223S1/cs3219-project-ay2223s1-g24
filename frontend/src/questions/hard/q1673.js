module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1673. Kth Ancestor of a Tree Node</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a tree with <code>n</code> nodes numbered from <code>0</code> to <code>n - 1</code> in the form of a parent array <code>parent</code> where <code>parent[i]</code> is the parent of <code>i<sup>th</sup></code> node. The root of the tree is node <code>0</code>. Find the <code>k<sup>th</sup></code> ancestor of a given node.</p>
<p>The <code>k<sup>th</sup></code> ancestor of a tree node is the <code>k<sup>th</sup></code> node in the path from that node to the root node.</p>
<p>Implement the <code>TreeAncestor</code> class:</p>
<ul>
<li><code>TreeAncestor(int n, int[] parent)</code> Initializes the object with the number of nodes in the tree and the parent array.</li>
<li><code>int getKthAncestor(int node, int k)</code> return the <code>k<sup>th</sup></code> ancestor of the given node <code>node</code>. If there is no such ancestor, return <code>-1</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/28/1528_ex1.png" style="width: 396px; height: 262px;"/>
<pre><strong>Input</strong>
["TreeAncestor", "getKthAncestor", "getKthAncestor", "getKthAncestor"]
[[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]
<strong>Output</strong>
[null, 1, 0, -1]

<strong>Explanation</strong>
TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
treeAncestor.getKthAncestor(3, 1); // returns 1 which is the parent of 3
treeAncestor.getKthAncestor(5, 2); // returns 0 which is the grandparent of 5
treeAncestor.getKthAncestor(6, 3); // returns -1 because there is no such ancestor</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>parent.length == n</code></li>
<li><code>parent[0] == -1</code></li>
<li><code>0 &lt;= parent[i] &lt; n</code> for all <code>0 &lt; i &lt; n</code></li>
<li><code>0 &lt;= node &lt; n</code></li>
<li>There will be at most <code>5 * 10<sup>4</sup></code> queries.</li>
</ul>
</div></div><br><br></html> `;