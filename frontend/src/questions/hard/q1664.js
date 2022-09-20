module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************************<div id="title">1664. Find the Kth Smallest Sum of a Matrix With Sorted Rows</div>
************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an <code>m x n</code> matrix <code>mat</code> that has its rows sorted in non-decreasing order and an integer <code>k</code>.</p>
<p>You are allowed to choose <strong>exactly one element</strong> from each row to form an array.</p>
<p>Return <em>the </em><code>k<sup>th</sup></code><em> smallest array sum among all possible arrays</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> mat = [[1,3,11],[2,4,6]], k = 5
<strong>Output:</strong> 7
<strong>Explanation:</strong> Choosing one element from each row, the first k smallest sum are:
[1,2], [1,4], [3,2], [3,4], [1,6]. Where the 5th sum is 7.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> mat = [[1,3,11],[2,4,6]], k = 9
<strong>Output:</strong> 17
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7
<strong>Output:</strong> 9
<strong>Explanation:</strong> Choosing one element from each row, the first k smallest sum are:
[1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]. Where the 7th sum is 9.  
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == mat.length</code></li>
<li><code>n == mat.length[i]</code></li>
<li><code>1 &lt;= m, n &lt;= 40</code></li>
<li><code>1 &lt;= mat[i][j] &lt;= 5000</code></li>
<li><code>1 &lt;= k &lt;= min(200, n<sup>m</sup>)</code></li>
<li><code>mat[i]</code> is a non-decreasing array.</li>
</ul>
</div></div><br><br></html> `;