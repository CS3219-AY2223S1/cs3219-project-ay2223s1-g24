module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">673. Ones and Zeroes</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of binary strings <code>strs</code> and two integers <code>m</code> and <code>n</code>.</p>
<p>Return <em>the size of the largest subset of <code>strs</code> such that there are <strong>at most</strong> </em><code>m</code><em> </em><code>0</code><em>'s and </em><code>n</code><em> </em><code>1</code><em>'s in the subset</em>.</p>
<p>A set <code>x</code> is a <strong>subset</strong> of a set <code>y</code> if all elements of <code>x</code> are also elements of <code>y</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["10","0001","111001","1","0"], m = 5, n = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> strs = ["10","0","1"], m = 1, n = 1
<strong>Output:</strong> 2
<b>Explanation:</b> The largest subset is {"0", "1"}, so the answer is 2.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= strs.length &lt;= 600</code></li>
<li><code>1 &lt;= strs[i].length &lt;= 100</code></li>
<li><code>strs[i]</code> consists only of digits <code>'0'</code> and <code>'1'</code>.</li>
<li><code>1 &lt;= m, n &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;