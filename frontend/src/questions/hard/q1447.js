module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">1447. Minimum Window Substring</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window substring</strong> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window. If there is no such substring</em><em>, return the empty string </em><code>""</code><em>.</em></p>
<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters within the string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ADOBECODEBANC", t = "ABC"
<strong>Output:</strong> "BANC"
<strong>Explanation:</strong> The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "a", t = "a"
<strong>Output:</strong> "a"
<strong>Explanation:</strong> The entire string s is the minimum window.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "a", t = "aa"
<strong>Output:</strong> ""
<strong>Explanation:</strong> Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == s.length</code></li>
<li><code>n == t.length</code></li>
<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p>
</div></div><br><br></html> `;