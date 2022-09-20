module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************************<div id="title">431. Check if Number Has Equal Digit Count and Digit Value</div>
***********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> string <code>num</code> of length <code>n</code> consisting of digits.</p>
<p>Return <code>true</code> <em>if for <strong>every</strong> index </em><code>i</code><em> in the range </em><code>0 &lt;= i &lt; n</code><em>, the digit </em><code>i</code><em> occurs </em><code>num[i]</code><em> times in </em><code>num</code><em>, otherwise return </em><code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = "1210"
<strong>Output:</strong> true
<strong>Explanation:</strong>
num[0] = '1'. The digit 0 occurs once in num.
num[1] = '2'. The digit 1 occurs twice in num.
num[2] = '1'. The digit 2 occurs once in num.
num[3] = '0'. The digit 3 occurs zero times in num.
The condition holds true for every index in "1210", so return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = "030"
<strong>Output:</strong> false
<strong>Explanation:</strong>
num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = '0'. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == num.length</code></li>
<li><code>1 &lt;= n &lt;= 10</code></li>
<li><code>num</code> consists of digits.</li>
</ul>
</div></div><br><br></html> `;