module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">1606. Number of Submatrices That Sum to Target</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>matrix</code> and a <code>target</code>, return the number of non-empty submatrices that sum to <font face="monospace">target</font>.</p>
<p>A submatrix <code>x1, y1, x2, y2</code> is the set of all cells <code>matrix[x][y]</code> with <code>x1 &lt;= x &lt;= x2</code> and <code>y1 &lt;= y &lt;= y2</code>.</p>
<p>Two submatrices <code>(x1, y1, x2, y2)</code> and <code>(x1', y1', x2', y2')</code> are different if they have some coordinate that is different: for example, if <code>x1 != x1'</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg" style="width: 242px; height: 242px;"/>
<pre><strong>Input:</strong> matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
<strong>Output:</strong> 4
<strong>Explanation:</strong> The four 1x1 submatrices that only contain 0.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> matrix = [[1,-1],[-1,1]], target = 0
<strong>Output:</strong> 5
<strong>Explanation:</strong> The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> matrix = [[904]], target = 0
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= matrix.length &lt;= 100</code></li>
<li><code>1 &lt;= matrix[0].length &lt;= 100</code></li>
<li><code>-1000 &lt;= matrix[i] &lt;= 1000</code></li>
<li><code>-10^8 &lt;= target &lt;= 10^8</code></li>
</ul>
</div></div><br><br></html> `;