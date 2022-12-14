module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************************<div id="title">302. Largest Substring Between Two Equal Characters</div>
****************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code>, return <em>the length of the longest substring between two equal characters, excluding the two characters.</em> If there is no such substring return <code>-1</code>.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aa"
<strong>Output:</strong> 0
<strong>Explanation:</strong> The optimal substring here is an empty substring between the two <code>'a's</code>.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abca"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal substring here is "bc".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "cbzxy"
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are no characters that appear twice in s.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 300</code></li>
<li><code>s</code> contains only lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;