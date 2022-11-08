module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">815. Magic Squares In Grid</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>A <code>3 x 3</code> magic square is a <code>3 x 3</code> grid filled with distinct numbers <strong>from </strong><code>1</code><strong> to </strong><code>9</code> such that each row, column, and both diagonals all have the same sum.</p>
<p>Given a <code>row x col</code> <code>grid</code> of integers, how many <code>3 x 3</code> "magic square" subgrids are there?  (Each subgrid is contiguous).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg" style="width: 322px; height: 242px;"/>
<pre><strong>Input:</strong> grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
<strong>Output:</strong> 1
<strong>Explanation: </strong>
The following subgrid is a 3 x 3 magic square:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_valid.jpg" style="width: 242px; height: 242px;"/>
while this one is not:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg" style="width: 242px; height: 242px;"/>
In total, there is only one magic square inside the given grid.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[8]]
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>row == grid.length</code></li>
<li><code>col == grid[i].length</code></li>
<li><code>1 &lt;= row, col &lt;= 10</code></li>
<li><code>0 &lt;= grid[i][j] &lt;= 15</code></li>
</ul>
</div></div><br><br></html> `;