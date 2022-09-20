module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************************************<div id="title">1674. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree</div>
**********************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a weighted undirected connected graph with <code>n</code> vertices numbered from <code>0</code> to <code>n - 1</code>, and an array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>, weight<sub>i</sub>]</code> represents a bidirectional and weighted edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.</p>
<p>Find <em>all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST)</em>. An MST edge whose deletion from the graph would cause the MST weight to increase is called a <em>critical edge</em>. On the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.</p>
<p>Note that you can return the indices of the edges in any order.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/ex1.png" style="width: 259px; height: 262px;"/></p>
<pre><strong>Input:</strong> n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
<strong>Output:</strong> [[0,1],[2,3,4,5]]
<strong>Explanation:</strong> The figure above describes the graph.
The following figure shows all the possible MSTs:
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/msts.png" style="width: 540px; height: 553px;"/>
Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return them in the first list of the output.
The edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are considered pseudo-critical edges. We add them to the second list of the output.
</pre>
<p><strong>Example 2:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/ex2.png" style="width: 247px; height: 253px;"/></p>
<pre><strong>Input:</strong> n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
<strong>Output:</strong> [[],[0,1,2,3]]
<strong>Explanation:</strong> We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= n &lt;= 100</code></li>
<li><code>1 &lt;= edges.length &lt;= min(200, n * (n - 1) / 2)</code></li>
<li><code>edges[i].length == 3</code></li>
<li><code>0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt; n</code></li>
<li><code>1 &lt;= weight<sub>i</sub> &lt;= 1000</code></li>
<li>All pairs <code>(a<sub>i</sub>, b<sub>i</sub>)</code> are <strong>distinct</strong>.</li>
</ul>
</div></div><br><br></html> `;