module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************************<div id="title">1634. Shortest Path in a Grid with Obstacles Elimination</div>
********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an <code>m x n</code> integer matrix <code>grid</code> where each cell is either <code>0</code> (empty) or <code>1</code> (obstacle). You can move up, down, left, or right from and to an empty cell in <strong>one step</strong>.</p>
<p>Return <em>the minimum number of <strong>steps</strong> to walk from the upper left corner </em><code>(0, 0)</code><em> to the lower right corner </em><code>(m - 1, n - 1)</code><em> given that you can eliminate <strong>at most</strong> </em><code>k</code><em> obstacles</em>. If it is not possible to find such walk return <code>-1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/09/30/short1-grid.jpg" style="width: 244px; height: 405px;"/>
<pre><strong>Input:</strong> grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
<strong>Output:</strong> 6
<strong>Explanation:</strong> 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -&gt; (0,1) -&gt; (0,2) -&gt; (1,2) -&gt; (2,2) -&gt; <strong>(3,2)</strong> -&gt; (4,2).
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/09/30/short2-grid.jpg" style="width: 244px; height: 245px;"/>
<pre><strong>Input:</strong> grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
<strong>Output:</strong> -1
<strong>Explanation:</strong> We need to eliminate at least two obstacles to find such a walk.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 40</code></li>
<li><code>1 &lt;= k &lt;= m * n</code></li>
<li><code>grid[i][j]</code> is either <code>0</code> <strong>or</strong> <code>1</code>.</li>
<li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li>
</ul>
</div></div><br><br></html> `;