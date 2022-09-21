module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************************<div id="title">1487. Max Sum of Rectangle No Larger Than K</div>
******************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an <code>m x n</code> matrix <code>matrix</code> and an integer <code>k</code>, return <em>the max sum of a rectangle in the matrix such that its sum is no larger than</em> <code>k</code>.</p>
<p>It is <strong>guaranteed</strong> that there will be a rectangle with a sum no larger than <code>k</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg" style="width: 255px; height: 176px;"/>
<pre><strong>Input:</strong> matrix = [[1,0,1],[0,-2,3]], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> matrix = [[2,2,-1]], k = 3
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == matrix.length</code></li>
<li><code>n == matrix[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 200</code></li>
<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>
<li><code>-10<sup>5</sup> &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> What if the number of rows is much larger than the number of columns?</p>
</div></div><br><br></html> `;