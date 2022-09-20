module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">1580. Minimize Malware Spread</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a network of <code>n</code> nodes represented as an <code>n x n</code> adjacency matrix <code>graph</code>, where the <code>i<sup>th</sup></code> node is directly connected to the <code>j<sup>th</sup></code> node if <code>graph[i][j] == 1</code>.</p>
<p>Some nodes <code>initial</code> are initially infected by malware. Whenever two nodes are directly connected, and at least one of those two nodes is infected by malware, both nodes will be infected by malware. This spread of malware will continue until no more nodes can be infected in this manner.</p>
<p>Suppose <code>M(initial)</code> is the final number of nodes infected with malware in the entire network after the spread of malware stops. We will remove <strong>exactly one node</strong> from <code>initial</code>.</p>
<p>Return the node that, if removed, would minimize <code>M(initial)</code>. If multiple nodes could be removed to minimize <code>M(initial)</code>, return such a node with <strong>the smallest index</strong>.</p>
<p>Note that if a node was removed from the <code>initial</code> list of infected nodes, it might still be infected later due to the malware spread.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]
<strong>Output:</strong> 0
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> graph = [[1,0,0],[0,1,0],[0,0,1]], initial = [0,2]
<strong>Output:</strong> 0
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> graph = [[1,1,1],[1,1,1],[1,1,1]], initial = [1,2]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == graph.length</code></li>
<li><code>n == graph[i].length</code></li>
<li><code>2 &lt;= n &lt;= 300</code></li>
<li><code>graph[i][j]</code> is <code>0</code> or <code>1</code>.</li>
<li><code>graph[i][j] == graph[j][i]</code></li>
<li><code>graph[i][i] == 1</code></li>
<li><code>1 &lt;= initial.length &lt;= n</code></li>
<li><code>0 &lt;= initial[i] &lt;= n - 1</code></li>
<li>All the integers in <code>initial</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;