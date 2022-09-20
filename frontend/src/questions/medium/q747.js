module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">747. Redundant Connection</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>In this problem, a tree is an <strong>undirected graph</strong> that is connected and has no cycles.</p>
<p>You are given a graph that started as a tree with <code>n</code> nodes labeled from <code>1</code> to <code>n</code>, with one additional edge added. The added edge has two <strong>different</strong> vertices chosen from <code>1</code> to <code>n</code>, and was not an edge that already existed. The graph is represented as an array <code>edges</code> of length <code>n</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the graph.</p>
<p>Return <em>an edge that can be removed so that the resulting graph is a tree of </em><code>n</code><em> nodes</em>. If there are multiple answers, return the answer that occurs last in the input.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/reduntant1-1-graph.jpg" style="width: 222px; height: 222px;"/>
<pre><strong>Input:</strong> edges = [[1,2],[1,3],[2,3]]
<strong>Output:</strong> [2,3]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/reduntant1-2-graph.jpg" style="width: 382px; height: 222px;"/>
<pre><strong>Input:</strong> edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
<strong>Output:</strong> [1,4]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == edges.length</code></li>
<li><code>3 &lt;= n &lt;= 1000</code></li>
<li><code>edges[i].length == 2</code></li>
<li><code>1 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt;= edges.length</code></li>
<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
<li>There are no repeated edges.</li>
<li>The given graph is connected.</li>
</ul>
</div></div><br><br></html> `;