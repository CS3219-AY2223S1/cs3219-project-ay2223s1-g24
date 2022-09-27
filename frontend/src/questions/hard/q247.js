module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************************************<div id="title">1677. Minimum Possible Integer After at Most K Adjacent Swaps On Digits</div>
***********************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>num</code> representing <strong>the digits</strong> of a very large integer and an integer <code>k</code>. You are allowed to swap any two adjacent digits of the integer <strong>at most</strong> <code>k</code> times.</p>
<p>Return <em>the minimum integer you can obtain also as a string</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/17/q4_1.jpg" style="width: 500px; height: 40px;"/>
<pre><strong>Input:</strong> num = "4321", k = 4
<strong>Output:</strong> "1342"
<strong>Explanation:</strong> The steps to obtain the minimum integer from 4321 with 4 adjacent swaps are shown.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = "100", k = 1
<strong>Output:</strong> "010"
<strong>Explanation:</strong> It's ok for the output to have leading zeros, but the input is guaranteed not to have any leading zeros.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> num = "36789", k = 1000
<strong>Output:</strong> "36789"
<strong>Explanation:</strong> We can keep the number without any swaps.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num.length &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>num</code> consists of only <strong>digits</strong> and does not contain <strong>leading zeros</strong>.</li>
<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;