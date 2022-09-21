module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">1578. Cat and Mouse</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>A game on an <strong>undirected</strong> graph is played by two players, Mouse and Cat, who alternate turns.</p>
<p>The graph is given as follows: <code>graph[a]</code> is a list of all nodes <code>b</code> such that <code>ab</code> is an edge of the graph.</p>
<p>The mouse starts at node <code>1</code> and goes first, the cat starts at node <code>2</code> and goes second, and there is a hole at node <code>0</code>.</p>
<p>During each player's turn, they <strong>must</strong> travel along one edge of the graph that meets where they are.  For example, if the Mouse is at node 1, it <strong>must</strong> travel to any node in <code>graph[1]</code>.</p>
<p>Additionally, it is not allowed for the Cat to travel to the Hole (node 0.)</p>
<p>Then, the game can end in three ways:</p>
<ul>
<li>If ever the Cat occupies the same node as the Mouse, the Cat wins.</li>
<li>If ever the Mouse reaches the Hole, the Mouse wins.</li>
<li>If ever a position is repeated (i.e., the players are in the same position as a previous turn, and it is the same player's turn to move), the game is a draw.</li>
</ul>
<p>Given a <code>graph</code>, and assuming both players play optimally, return</p>
<ul>
<li><code>1</code> if the mouse wins the game,</li>
<li><code>2</code> if the cat wins the game, or</li>
<li><code>0</code> if the game is a draw.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/cat1.jpg" style="width: 300px; height: 300px;"/>
<pre><strong>Input:</strong> graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
<strong>Output:</strong> 0
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/cat2.jpg" style="width: 200px; height: 200px;"/>
<pre><strong>Input:</strong> graph = [[1,3],[0],[3],[0,2]]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= graph.length &lt;= 50</code></li>
<li><code>1 &lt;= graph[i].length &lt; graph.length</code></li>
<li><code>0 &lt;= graph[i][j] &lt; graph.length</code></li>
<li><code>graph[i][j] != i</code></li>
<li><code>graph[i]</code> is unique.</li>
<li>The mouse and the cat can always move. </li>
</ul>
</div></div><br><br></html> `;