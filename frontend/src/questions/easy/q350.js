module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************************<div id="title">350. Substrings of Size Three with Distinct Characters</div>
*******************************************************<div class="content__u3I1 question-content__JfgR"><div><p>A string is <strong>good</strong> if there are no repeated characters.</p>
<p>Given a string <code>s</code>​​​​​, return <em>the number of <strong>good substrings</strong> of length <strong>three </strong>in </em><code>s</code>​​​​​​.</p>
<p>Note that if there are multiple occurrences of the same substring, every occurrence should be counted.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters in a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "xyzzaz"
<strong>Output:</strong> 1
<strong>Explanation:</strong> There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aababcabc"
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code>​​​​​​ consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;