module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">838. Decoded String at Index</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an encoded string <code>s</code>. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:</p>
<ul>
<li>If the character read is a letter, that letter is written onto the tape.</li>
<li>If the character read is a digit <code>d</code>, the entire current tape is repeatedly written <code>d - 1</code> more times in total.</li>
</ul>
<p>Given an integer <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> letter (<strong>1-indexed)</strong> in the decoded string</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "leet2code3", k = 10
<strong>Output:</strong> "o"
<strong>Explanation:</strong> The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10<sup>th</sup> letter in the string is "o".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "ha22", k = 5
<strong>Output:</strong> "h"
<strong>Explanation:</strong> The decoded string is "hahahaha".
The 5<sup>th</sup> letter is "h".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "a2345678999999999999999", k = 1
<strong>Output:</strong> "a"
<strong>Explanation:</strong> The decoded string is "a" repeated 8301530446056247680 times.
The 1<sup>st</sup> letter is "a".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code> consists of lowercase English letters and digits <code>2</code> through <code>9</code>.</li>
<li><code>s</code> starts with a letter.</li>
<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
<li>It is guaranteed that <code>k</code> is less than or equal to the length of the decoded string.</li>
<li>The decoded string is guaranteed to have less than <code>2<sup>63</sup></code> letters.</li>
</ul>
</div></div><br><br></html> `;