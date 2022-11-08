module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">230. Shift 2D Grid</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>Given a 2D <code>grid</code> of size <code>m x n</code> and an integer <code>k</code>. You need to shift the <code>grid</code> <code>k</code> times.</p>
<p>In one shift operation:</p>
<ul>
<li>Element at <code>grid[i][j]</code> moves to <code>grid[i][j + 1]</code>.</li>
<li>Element at <code>grid[i][n - 1]</code> moves to <code>grid[i + 1][0]</code>.</li>
<li>Element at <code>grid[m - 1][n - 1]</code> moves to <code>grid[0][0]</code>.</li>
</ul>
<p>Return the <em>2D grid</em> after applying shift operation <code>k</code> times.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/05/e1.png" style="width: 400px; height: 178px;"/>
<pre><strong>Input:</strong> <code>grid</code> = [[1,2,3],[4,5,6],[7,8,9]], k = 1
<strong>Output:</strong> [[9,1,2],[3,4,5],[6,7,8]]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/05/e2.png" style="width: 400px; height: 166px;"/>
<pre><strong>Input:</strong> <code>grid</code> = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
<strong>Output:</strong> [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> <code>grid</code> = [[1,2,3],[4,5,6],[7,8,9]], k = 9
<strong>Output:</strong> [[1,2,3],[4,5,6],[7,8,9]]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= m &lt;= 50</code></li>
<li><code>1 &lt;= n &lt;= 50</code></li>
<li><code>-1000 &lt;= grid[i][j] &lt;= 1000</code></li>
<li><code>0 &lt;= k &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;