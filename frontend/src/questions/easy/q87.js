module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">87. Island Perimeter</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given <code>row x col</code> <code>grid</code> representing a map where <code>grid[i][j] = 1</code> represents land and <code>grid[i][j] = 0</code> represents water.</p>
<p>Grid cells are connected <strong>horizontally/vertically</strong> (not diagonally). The <code>grid</code> is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).</p>
<p>The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/12/island.png" style="width: 221px; height: 213px;"/>
<pre><strong>Input:</strong> grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
<strong>Output:</strong> 16
<strong>Explanation:</strong> The perimeter is the 16 yellow stripes in the image above.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[1]]
<strong>Output:</strong> 4
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> grid = [[1,0]]
<strong>Output:</strong> 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>row == grid.length</code></li>
<li><code>col == grid[i].length</code></li>
<li><code>1 &lt;= row, col &lt;= 100</code></li>
<li><code>grid[i][j]</code> is <code>0</code> or <code>1</code>.</li>
<li>There is exactly one island in <code>grid</code>.</li>
</ul>
</div></div><br><br></html> `;