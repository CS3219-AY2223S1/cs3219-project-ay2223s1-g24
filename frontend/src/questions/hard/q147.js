module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">1577. Super Palindromes</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>Let's say a positive integer is a <strong>super-palindrome</strong> if it is a palindrome, and it is also the square of a palindrome.</p>
<p>Given two positive integers <code>left</code> and <code>right</code> represented as strings, return <em>the number of <strong>super-palindromes</strong> integers in the inclusive range</em> <code>[left, right]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> left = "4", right = "1000"
<strong>Output:</strong> 4
<strong>Explanation</strong>: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> left = "1", right = "2"
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= left.length, right.length &lt;= 18</code></li>
<li><code>left</code> and <code>right</code> consist of only digits.</li>
<li><code>left</code> and <code>right</code> cannot have leading zeros.</li>
<li><code>left</code> and <code>right</code> represent integers in the range <code>[1, 10<sup>18</sup> - 1]</code>.</li>
<li><code>left</code> is less than or equal to <code>right</code>.</li>
</ul>
</div></div><br><br></html> `;