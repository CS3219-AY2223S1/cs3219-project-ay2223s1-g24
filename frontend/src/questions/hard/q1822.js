module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">1822. Escape the Spreading Fire</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> 2D integer array <code>grid</code> of size <code>m x n</code> which represents a field. Each cell has one of three values:</p>
<ul>
<li><code>0</code> represents grass,</li>
<li><code>1</code> represents fire,</li>
<li><code>2</code> represents a wall that you and fire cannot pass through.</li>
</ul>
<p>You are situated in the top-left cell, <code>(0, 0)</code>, and you want to travel to the safehouse at the bottom-right cell, <code>(m - 1, n - 1)</code>. Every minute, you may move to an <strong>adjacent</strong> grass cell. <strong>After</strong> your move, every fire cell will spread to all <strong>adjacent</strong> cells that are not walls.</p>
<p>Return <em>the <strong>maximum</strong> number of minutes that you can stay in your initial position before moving while still safely reaching the safehouse</em>. If this is impossible, return <code>-1</code>. If you can <strong>always</strong> reach the safehouse regardless of the minutes stayed, return <code>10<sup>9</sup></code>.</p>
<p>Note that even if the fire spreads to the safehouse immediately after you have reached it, it will be counted as safely reaching the safehouse.</p>
<p>A cell is <strong>adjacent</strong> to another cell if the former is directly north, east, south, or west of the latter (i.e., their sides are touching).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/10/ex1new.jpg" style="width: 650px; height: 404px;"/>
<pre><strong>Input:</strong> grid = [[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The figure above shows the scenario where you stay in the initial position for 3 minutes.
You will still be able to safely reach the safehouse.
Staying for more than 3 minutes will not allow you to safely reach the safehouse.</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/10/ex2new2.jpg" style="width: 515px; height: 150px;"/>
<pre><strong>Input:</strong> grid = [[0,0,0,0],[0,1,2,0],[0,2,0,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The figure above shows the scenario where you immediately move towards the safehouse.
Fire will spread to any cell you move towards and it is impossible to safely reach the safehouse.
Thus, -1 is returned.
</pre>
<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/10/ex3new.jpg" style="width: 174px; height: 150px;"/>
<pre><strong>Input:</strong> grid = [[0,0,0],[2,2,0],[1,2,0]]
<strong>Output:</strong> 1000000000
<strong>Explanation:</strong> The figure above shows the initial grid.
Notice that the fire is contained by walls and you will always be able to safely reach the safehouse.
Thus, 10<sup>9</sup> is returned.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>2 &lt;= m, n &lt;= 300</code></li>
<li><code>4 &lt;= m * n &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>grid[i][j]</code> is either <code>0</code>, <code>1</code>, or <code>2</code>.</li>
<li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li>
</ul>
</div></div><br><br></html> `;