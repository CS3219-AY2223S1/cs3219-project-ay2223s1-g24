module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">820. Shifting Letters</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> of lowercase English letters and an integer array <code>shifts</code> of the same length.</p>
<p>Call the <code>shift()</code> of a letter, the next letter in the alphabet, (wrapping around so that <code>'z'</code> becomes <code>'a'</code>).</p>
<ul>
<li>For example, <code>shift('a') = 'b'</code>, <code>shift('t') = 'u'</code>, and <code>shift('z') = 'a'</code>.</li>
</ul>
<p>Now for each <code>shifts[i] = x</code>, we want to shift the first <code>i + 1</code> letters of <code>s</code>, <code>x</code> times.</p>
<p>Return <em>the final string after all such shifts to s are applied</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "abc", shifts = [3,5,9]
<strong>Output:</strong> "rpl"
<strong>Explanation:</strong> We start with "abc".
After shifting the first 1 letters of s by 3, we have "dbc".
After shifting the first 2 letters of s by 5, we have "igc".
After shifting the first 3 letters of s by 9, we have "rpl", the answer.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aaa", shifts = [1,2,3]
<strong>Output:</strong> "gfd"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists of lowercase English letters.</li>
<li><code>shifts.length == s.length</code></li>
<li><code>0 &lt;= shifts[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;