module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1633. Minimum Falling Path Sum II</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an <code>n x n</code> integer matrix <code>grid</code>, return <em>the minimum sum of a <strong>falling path with non-zero shifts</strong></em>.</p>
<p>A <strong>falling path with non-zero shifts</strong> is a choice of exactly one element from each row of <code>grid</code> such that no two elements chosen in adjacent rows are in the same column.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/10/falling-grid.jpg" style="width: 244px; height: 245px;"/>
<pre><strong>Input:</strong> arr = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> 13
<strong>Explanation:</strong> 
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[7]]
<strong>Output:</strong> 7
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == grid.length == grid[i].length</code></li>
<li><code>1 &lt;= n &lt;= 200</code></li>
<li><code>-99 &lt;= grid[i][j] &lt;= 99</code></li>
</ul>
</div></div><br><br></html> `;