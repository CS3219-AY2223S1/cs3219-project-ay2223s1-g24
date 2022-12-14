module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************************<div id="title">436. Greatest English Letter in Upper and Lower Case</div>
*****************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string of English letters <code>s</code>, return <em>the <strong>greatest </strong>English letter which occurs as <strong>both</strong> a lowercase and uppercase letter in</em> <code>s</code>. The returned letter should be in <strong>uppercase</strong>. If no such letter exists, return <em>an empty string</em>.</p>
<p>An English letter <code>b</code> is <strong>greater</strong> than another letter <code>a</code> if <code>b</code> appears <strong>after</strong> <code>a</code> in the English alphabet.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "l<strong><u>Ee</u></strong>TcOd<u><strong>E</strong></u>"
<strong>Output:</strong> "E"
<strong>Explanation:</strong>
The letter 'E' is the only letter to appear in both lower and upper case.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "a<strong><u>rR</u></strong>AzFif"
<strong>Output:</strong> "R"
<strong>Explanation:</strong>
The letter 'R' is the greatest letter to appear in both lower and upper case.
Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "AbCdEfGhIjK"
<strong>Output:</strong> ""
<strong>Explanation:</strong>
There is no letter that appears in both lower and upper case.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s</code> consists of lowercase and uppercase English letters.</li>
</ul>
</div></div><br><br></html> `;