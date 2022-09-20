module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">145. Find Smallest Letter Greater Than Target</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a characters array <code>letters</code> that is sorted in <strong>non-decreasing</strong> order and a character <code>target</code>, return <em>the smallest character in the array that is larger than </em><code>target</code>.</p>
<p><strong>Note</strong> that the letters wrap around.</p>
<ul>
<li>For example, if <code>target == 'z'</code> and <code>letters == ['a', 'b']</code>, the answer is <code>'a'</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> letters = ["c","f","j"], target = "a"
<strong>Output:</strong> "c"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> letters = ["c","f","j"], target = "c"
<strong>Output:</strong> "f"
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> letters = ["c","f","j"], target = "d"
<strong>Output:</strong> "f"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= letters.length &lt;= 10<sup>4</sup></code></li>
<li><code>letters[i]</code> is a lowercase English letter.</li>
<li><code>letters</code> is sorted in <strong>non-decreasing</strong> order.</li>
<li><code>letters</code> contains at least two different characters.</li>
<li><code>target</code> is a lowercase English letter.</li>
</ul>
</div></div><br><br></html> `;