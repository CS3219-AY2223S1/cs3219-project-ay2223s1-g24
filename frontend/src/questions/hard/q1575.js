module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">1575. Numbers At Most N Given Digit Set</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of <code>digits</code> which is sorted in <strong>non-decreasing</strong> order. You can write numbers using each <code>digits[i]</code> as many times as we want. For example, if <code>digits = ['1','3','5']</code>, we may write numbers such as <code>'13'</code>, <code>'551'</code>, and <code>'1351315'</code>.</p>
<p>Return <em>the number of positive integers that can be generated </em>that are less than or equal to a given integer <code>n</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> digits = ["1","3","5","7"], n = 100
<strong>Output:</strong> 20
<strong>Explanation: </strong>
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> digits = ["1","4","9"], n = 1000000000
<strong>Output:</strong> 29523
<strong>Explanation: </strong>
We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
In total, this is 29523 integers that can be written using the digits array.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> digits = ["7"], n = 8
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= digits.length &lt;= 9</code></li>
<li><code>digits[i].length == 1</code></li>
<li><code>digits[i]</code> is a digit from <code>'1'</code> to <code>'9'</code>.</li>
<li>All the values in <code>digits</code> are <strong>unique</strong>.</li>
<li><code>digits</code> is sorted in <strong>non-decreasing</strong> order.</li>
<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;