module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">1440. Wildcard Matching</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>'?'</code> and <code>'*'</code> where:</p>
<ul>
<li><code>'?'</code> Matches any single character.</li>
<li><code>'*'</code> Matches any sequence of characters (including the empty sequence).</li>
</ul>
<p>The matching should cover the <strong>entire</strong> input string (not partial).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aa", p = "a"
<strong>Output:</strong> false
<strong>Explanation:</strong> "a" does not match the entire string "aa".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aa", p = "*"
<strong>Output:</strong> true
<strong>Explanation:</strong> '*' matches any sequence.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "cb", p = "?a"
<strong>Output:</strong> false
<strong>Explanation:</strong> '?' matches 'c', but the second letter is 'a', which does not match 'b'.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li>
<li><code>s</code> contains only lowercase English letters.</li>
<li><code>p</code> contains only lowercase English letters, <code>'?'</code> or <code>'*'</code>.</li>
</ul>
</div></div><br><br></html> `;