module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">1519. Strange Printer</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>There is a strange printer with the following two special properties:</p>
<ul>
<li>The printer can only print a sequence of <strong>the same character</strong> each time.</li>
<li>At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.</li>
</ul>
<p>Given a string <code>s</code>, return <em>the minimum number of turns the printer needed to print it</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aaabbb"
<strong>Output:</strong> 2
<strong>Explanation:</strong> Print "aaa" first and then print "bbb".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aba"
<strong>Output:</strong> 2
<strong>Explanation:</strong> Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;