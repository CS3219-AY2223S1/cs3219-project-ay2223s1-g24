module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">344. Replace All Digits with Characters</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> string <code>s</code> that has lowercase English letters in its <strong>even</strong> indices and digits in its <strong>odd</strong> indices.</p>
<p>There is a function <code>shift(c, x)</code>, where <code>c</code> is a character and <code>x</code> is a digit, that returns the <code>x<sup>th</sup></code> character after <code>c</code>.</p>
<ul>
<li>For example, <code>shift('a', 5) = 'f'</code> and <code>shift('x', 0) = 'x'</code>.</li>
</ul>
<p>For every <strong>odd</strong> index <code>i</code>, you want to replace the digit <code>s[i]</code> with <code>shift(s[i-1], s[i])</code>.</p>
<p>Return <code>s</code><em> after replacing all digits. It is <strong>guaranteed</strong> that </em><code>shift(s[i-1], s[i])</code><em> will never exceed </em><code>'z'</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "a1c1e1"
<strong>Output:</strong> "abcdef"
<strong>Explanation: </strong>The digits are replaced as follows:
- s[1] -&gt; shift('a',1) = 'b'
- s[3] -&gt; shift('c',1) = 'd'
- s[5] -&gt; shift('e',1) = 'f'</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "a1b2c3d4e"
<strong>Output:</strong> "abbdcfdhe"
<strong>Explanation: </strong>The digits are replaced as follows:
- s[1] -&gt; shift('a',1) = 'b'
- s[3] -&gt; shift('b',2) = 'd'
- s[5] -&gt; shift('c',3) = 'f'
- s[7] -&gt; shift('d',4) = 'h'</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code> consists only of lowercase English letters and digits.</li>
<li><code>shift(s[i-1], s[i]) &lt;= 'z'</code> for all <strong>odd</strong> indices <code>i</code>.</li>
</ul>
</div></div><br><br></html> `;