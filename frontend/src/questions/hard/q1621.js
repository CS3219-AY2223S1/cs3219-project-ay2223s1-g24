module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">1621. Minimum Moves to Reach Target with Rotations</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>In an <code>n*n</code> grid, there is a snake that spans 2 cells and starts moving from the top left corner at <code>(0, 0)</code> and <code>(0, 1)</code>. The grid has empty cells represented by zeros and blocked cells represented by ones. The snake wants to reach the lower right corner at <code>(n-1, n-2)</code> and <code>(n-1, n-1)</code>.</p>
<p>In one move the snake can:</p>
<ul>
<li>Move one cell to the right if there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.</li>
<li>Move down one cell if there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.</li>
<li>Rotate clockwise if it's in a horizontal position and the two cells under it are both empty. In that case the snake moves from <code>(r, c)</code> and <code>(r, c+1)</code> to <code>(r, c)</code> and <code>(r+1, c)</code>.<br/>
<img alt="" src="https://assets.leetcode.com/uploads/2019/09/24/image-2.png" style="width: 300px; height: 134px;"/></li>
<li>Rotate counterclockwise if it's in a vertical position and the two cells to its right are both empty. In that case the snake moves from <code>(r, c)</code> and <code>(r+1, c)</code> to <code>(r, c)</code> and <code>(r, c+1)</code>.<br/>
<img alt="" src="https://assets.leetcode.com/uploads/2019/09/24/image-1.png" style="width: 300px; height: 121px;"/></li>
</ul>
<p>Return the minimum number of moves to reach the target.</p>
<p>If there is no way to reach the target, return <code>-1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/09/24/image.png" style="width: 400px; height: 439px;"/></strong></p>
<pre><strong>Input:</strong> grid = [[0,0,0,0,0,1],
               [1,1,0,0,1,0],
               [0,0,0,0,1,1],
               [0,0,1,0,1,0],
               [0,1,1,0,0,0],
               [0,1,1,0,0,0]]
<strong>Output:</strong> 11
<strong>Explanation:
</strong>One possible solution is [right, right, rotate clockwise, right, down, down, down, down, rotate counterclockwise, right, down].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[0,0,1,1,1,1],
               [0,0,0,0,1,1],
               [1,1,0,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,0]]
<strong>Output:</strong> 9
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= n &lt;= 100</code></li>
<li><code>0 &lt;= grid[i][j] &lt;= 1</code></li>
<li>It is guaranteed that the snake starts at empty cells.</li>
</ul>
</div></div><br><br></html> `;