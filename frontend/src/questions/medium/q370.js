module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">826. Score of Parentheses</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a balanced parentheses string <code>s</code>, return <em>the <strong>score</strong> of the string</em>.</p>
<p>The <strong>score</strong> of a balanced parentheses string is based on the following rule:</p>
<ul>
<li><code>"()"</code> has score <code>1</code>.</li>
<li><code>AB</code> has score <code>A + B</code>, where <code>A</code> and <code>B</code> are balanced parentheses strings.</li>
<li><code>(A)</code> has score <code>2 * A</code>, where <code>A</code> is a balanced parentheses string.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "(())"
<strong>Output:</strong> 2
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "()()"
<strong>Output:</strong> 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 50</code></li>
<li><code>s</code> consists of only <code>'('</code> and <code>')'</code>.</li>
<li><code>s</code> is a balanced parentheses string.</li>
</ul>
</div></div><br><br></html> `;