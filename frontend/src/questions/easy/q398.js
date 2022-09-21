module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">398. Check if All A's Appears Before All B's</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> consisting of <strong>only</strong> the characters <code>'a'</code> and <code>'b'</code>, return <code>true</code> <em>if <strong>every</strong> </em><code>'a'</code> <em>appears before <strong>every</strong> </em><code>'b'</code><em> in the string</em>. Otherwise, return <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aaabbb"
<strong>Output:</strong> true
<strong>Explanation:</strong>
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abab"
<strong>Output:</strong> false
<strong>Explanation:</strong>
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "bbb"
<strong>Output:</strong> true
<strong>Explanation:</strong>
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s[i]</code> is either <code>'a'</code> or <code>'b'</code>.</li>
</ul>
</div></div><br><br></html> `;