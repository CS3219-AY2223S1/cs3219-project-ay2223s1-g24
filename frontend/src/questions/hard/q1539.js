module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1539. Special Binary String</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p><strong>Special binary strings</strong> are binary strings with the following two properties:</p>
<ul>
<li>The number of <code>0</code>'s is equal to the number of <code>1</code>'s.</li>
<li>Every prefix of the binary string has at least as many <code>1</code>'s as <code>0</code>'s.</li>
</ul>
<p>You are given a <strong>special binary</strong> string <code>s</code>.</p>
<p>A move consists of choosing two consecutive, non-empty, special substrings of <code>s</code>, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.</p>
<p>Return <em>the lexicographically largest resulting string possible after applying the mentioned operations on the string</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "11011000"
<strong>Output:</strong> "11100100"
<strong>Explanation:</strong> The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "10"
<strong>Output:</strong> "10"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 50</code></li>
<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
<li><code>s</code> is a special binary string.</li>
</ul>
</div></div><br><br></html> `;