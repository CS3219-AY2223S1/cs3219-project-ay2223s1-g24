module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">1520. Kth Smallest Number in Multiplication Table</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Nearly everyone has used the <a href="https://en.wikipedia.org/wiki/Multiplication_table" target="_blank">Multiplication Table</a>. The multiplication table of size <code>m x n</code> is an integer matrix <code>mat</code> where <code>mat[i][j] == i * j</code> (<strong>1-indexed</strong>).</p>
<p>Given three integers <code>m</code>, <code>n</code>, and <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> smallest element in the </em><code>m x n</code><em> multiplication table</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg" style="width: 500px; height: 254px;"/>
<pre><strong>Input:</strong> m = 3, n = 3, k = 5
<strong>Output:</strong> 3
<strong>Explanation:</strong> The 5<sup>th</sup> smallest number is 3.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg" style="width: 493px; height: 293px;"/>
<pre><strong>Input:</strong> m = 2, n = 3, k = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> The 6<sup>th</sup> smallest number is 6.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= m, n &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= k &lt;= m * n</code></li>
</ul>
</div></div><br><br></html> `;