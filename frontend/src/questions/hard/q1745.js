module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">1745. Largest Color Value in a Directed Graph</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is a <strong>directed graph</strong> of <code>n</code> colored nodes and <code>m</code> edges. The nodes are numbered from <code>0</code> to <code>n - 1</code>.</p>
<p>You are given a string <code>colors</code> where <code>colors[i]</code> is a lowercase English letter representing the <strong>color</strong> of the <code>i<sup>th</sup></code> node in this graph (<strong>0-indexed</strong>). You are also given a 2D array <code>edges</code> where <code>edges[j] = [a<sub>j</sub>, b<sub>j</sub>]</code> indicates that there is a <strong>directed edge</strong> from node <code>a<sub>j</sub></code> to node <code>b<sub>j</sub></code>.</p>
<p>A valid <strong>path</strong> in the graph is a sequence of nodes <code>x<sub>1</sub> -&gt; x<sub>2</sub> -&gt; x<sub>3</sub> -&gt; ... -&gt; x<sub>k</sub></code> such that there is a directed edge from <code>x<sub>i</sub></code> to <code>x<sub>i+1</sub></code> for every <code>1 &lt;= i &lt; k</code>. The <strong>color value</strong> of the path is the number of nodes that are colored the <strong>most frequently</strong> occurring color along that path.</p>
<p>Return <em>the <strong>largest color value</strong> of any valid path in the given graph, or </em><code>-1</code><em> if the graph contains a cycle</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/21/leet1.png" style="width: 400px; height: 182px;"/></p>
<pre><strong>Input:</strong> colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The path 0 -&gt; 2 -&gt; 3 -&gt; 4 contains 3 nodes that are colored <code>"a" (red in the above image)</code>.
</pre>
<p><strong>Example 2:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/21/leet2.png" style="width: 85px; height: 85px;"/></p>
<pre><strong>Input:</strong> colors = "a", edges = [[0,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is a cycle from 0 to 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == colors.length</code></li>
<li><code>m == edges.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= m &lt;= 10<sup>5</sup></code></li>
<li><code>colors</code> consists of lowercase English letters.</li>
<li><code>0 &lt;= a<sub>j</sub>, b<sub>j</sub> &lt; n</code></li>
</ul></div></div><br><br></html> `;