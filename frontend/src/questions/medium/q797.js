module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">797. Max Increase to Keep City Skyline</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is a city composed of <code>n x n</code> blocks, where each block contains a single building shaped like a vertical square prism. You are given a <strong>0-indexed</strong> <code>n x n</code> integer matrix <code>grid</code> where <code>grid[r][c]</code> represents the <strong>height</strong> of the building located in the block at row <code>r</code> and column <code>c</code>.</p>
<p>A city's <strong>skyline</strong> is the the outer contour formed by all the building when viewing the side of the city from a distance. The <strong>skyline</strong> from each cardinal direction north, east, south, and west may be different.</p>
<p>We are allowed to increase the height of <strong>any number of buildings by any amount</strong> (the amount can be different per building). The height of a <code>0</code>-height building can also be increased. However, increasing the height of a building should <strong>not</strong> affect the city's <strong>skyline</strong> from any cardinal direction.</p>
<p>Return <em>the <strong>maximum total sum</strong> that the height of the buildings can be increased by <strong>without</strong> changing the city's <strong>skyline</strong> from any cardinal direction</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/21/807-ex1.png" style="width: 700px; height: 603px;"/>
<pre><strong>Input:</strong> grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
<strong>Output:</strong> 35
<strong>Explanation:</strong> The building heights are shown in the center of the above image.
The skylines when viewed from each cardinal direction are drawn in red.
The grid after increasing the height of buildings without affecting skylines is:
gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[0,0,0],[0,0,0],[0,0,0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Increasing the height of any building will result in the skyline changing.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == grid.length</code></li>
<li><code>n == grid[r].length</code></li>
<li><code>2 &lt;= n &lt;= 50</code></li>
<li><code>0 &lt;= grid[r][c] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;