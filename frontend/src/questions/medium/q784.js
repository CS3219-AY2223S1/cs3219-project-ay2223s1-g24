module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">784. Is Graph Bipartite?</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>There is an <strong>undirected</strong> graph with <code>n</code> nodes, where each node is numbered between <code>0</code> and <code>n - 1</code>. You are given a 2D array <code>graph</code>, where <code>graph[u]</code> is an array of nodes that node <code>u</code> is adjacent to. More formally, for each <code>v</code> in <code>graph[u]</code>, there is an undirected edge between node <code>u</code> and node <code>v</code>. The graph has the following properties:</p>
<ul>
<li>There are no self-edges (<code>graph[u]</code> does not contain <code>u</code>).</li>
<li>There are no parallel edges (<code>graph[u]</code> does not contain duplicate values).</li>
<li>If <code>v</code> is in <code>graph[u]</code>, then <code>u</code> is in <code>graph[v]</code> (the graph is undirected).</li>
<li>The graph may not be connected, meaning there may be two nodes <code>u</code> and <code>v</code> such that there is no path between them.</li>
</ul>
<p>A graph is <strong>bipartite</strong> if the nodes can be partitioned into two independent sets <code>A</code> and <code>B</code> such that <strong>every</strong> edge in the graph connects a node in set <code>A</code> and a node in set <code>B</code>.</p>
<p>Return <code>true</code><em> if and only if it is <strong>bipartite</strong></em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg" style="width: 222px; height: 222px;"/>
<pre><strong>Input:</strong> graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/21/bi1.jpg" style="width: 222px; height: 222px;"/>
<pre><strong>Input:</strong> graph = [[1,3],[0,2],[1,3],[0,2]]
<strong>Output:</strong> true
<strong>Explanation:</strong> We can partition the nodes into two sets: {0, 2} and {1, 3}.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>graph.length == n</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>0 &lt;= graph[u].length &lt; n</code></li>
<li><code>0 &lt;= graph[u][i] &lt;= n - 1</code></li>
<li><code>graph[u]</code> does not contain <code>u</code>.</li>
<li>All the values of <code>graph[u]</code> are <strong>unique</strong>.</li>
<li>If <code>graph[u]</code> contains <code>v</code>, then <code>graph[v]</code> contains <code>u</code>.</li>
</ul>
</div></div><br><br></html> `;