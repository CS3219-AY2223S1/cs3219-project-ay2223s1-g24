module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">310. Maximum Repeating Substring</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>For a string <code>sequence</code>, a string <code>word</code> is <strong><code>k</code>-repeating</strong> if <code>word</code> concatenated <code>k</code> times is a substring of <code>sequence</code>. The <code>word</code>'s <strong>maximum <code>k</code>-repeating value</strong> is the highest value <code>k</code> where <code>word</code> is <code>k</code>-repeating in <code>sequence</code>. If <code>word</code> is not a substring of <code>sequence</code>, <code>word</code>'s maximum <code>k</code>-repeating value is <code>0</code>.</p>
<p>Given strings <code>sequence</code> and <code>word</code>, return <em>the <strong>maximum <code>k</code>-repeating value</strong> of <code>word</code> in <code>sequence</code></em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> sequence = "ababc", word = "ab"
<strong>Output:</strong> 2
<strong>Explanation: </strong>"abab" is a substring in "<u>abab</u>c".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> sequence = "ababc", word = "ba"
<strong>Output:</strong> 1
<strong>Explanation: </strong>"ba" is a substring in "a<u>ba</u>bc". "baba" is not a substring in "ababc".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> sequence = "ababc", word = "ac"
<strong>Output:</strong> 0
<strong>Explanation: </strong>"ac" is not a substring in "ababc". 
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= sequence.length &lt;= 100</code></li>
<li><code>1 &lt;= word.length &lt;= 100</code></li>
<li><code>sequence</code> and <code>word</code> contains only lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;