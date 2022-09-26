module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">1523. Redundant Connection II</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>In this problem, a rooted tree is a <b>directed</b> graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.</p>
<p>The given input is a directed graph that started as a rooted tree with <code>n</code> nodes (with distinct values from <code>1</code> to <code>n</code>), with one additional directed edge added. The added edge has two different vertices chosen from <code>1</code> to <code>n</code>, and was not an edge that already existed.</p>
<p>The resulting graph is given as a 2D-array of <code>edges</code>. Each element of <code>edges</code> is a pair <code>[u<sub>i</sub>, v<sub>i</sub>]</code> that represents a <b>directed</b> edge connecting nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>, where <code>u<sub>i</sub></code> is a parent of child <code>v<sub>i</sub></code>.</p>
<p>Return <em>an edge that can be removed so that the resulting graph is a rooted tree of</em> <code>n</code> <em>nodes</em>. If there are multiple answers, return the answer that occurs last in the given 2D-array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/graph1.jpg" style="width: 222px; height: 222px;"/>
<pre><strong>Input:</strong> edges = [[1,2],[1,3],[2,3]]
<strong>Output:</strong> [2,3]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/graph2.jpg" style="width: 222px; height: 382px;"/>
<pre><strong>Input:</strong> edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
<strong>Output:</strong> [4,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == edges.length</code></li>
<li><code>3 &lt;= n &lt;= 1000</code></li>
<li><code>edges[i].length == 2</code></li>
<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>
<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
</ul>
</div></div><br><br></html> `;