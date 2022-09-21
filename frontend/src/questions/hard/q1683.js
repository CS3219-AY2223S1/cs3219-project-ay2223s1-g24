module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">1683. String Compression II</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p><a href="http://en.wikipedia.org/wiki/Run-length_encoding">Run-length encoding</a> is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string <code>"aabccc"</code> we replace <font face="monospace"><code>"aa"</code></font> by <font face="monospace"><code>"a2"</code></font> and replace <font face="monospace"><code>"ccc"</code></font> by <font face="monospace"><code>"c3"</code></font>. Thus the compressed string becomes <font face="monospace"><code>"a2bc3"</code>.</font></p>
<p>Notice that in this problem, we are not adding <code>'1'</code> after single characters.</p>
<p>Given a string <code>s</code> and an integer <code>k</code>. You need to delete <strong>at most</strong> <code>k</code> characters from <code>s</code> such that the run-length encoded version of <code>s</code> has minimum length.</p>
<p>Find the <em>minimum length of the run-length encoded version of </em><code>s</code><em> after deleting at most </em><code>k</code><em> characters</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aaabcccd", k = 2
<strong>Output:</strong> 4
<b>Explanation: </b>Compressing s without deleting anything will give us "a3bc3d" of length 6. Deleting any of the characters 'a' or 'c' would at most decrease the length of the compressed string to 5, for instance delete 2 'a' then we will have s = "abcccd" which compressed is abc3d. Therefore, the optimal way is to delete 'b' and 'd', then the compressed version of s will be "a3c3" of length 4.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aabbaa", k = 2
<strong>Output:</strong> 2
<b>Explanation: </b>If we delete both 'b' characters, the resulting compressed string would be "a4" of length 2.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "aaaaaaaaaaa", k = 0
<strong>Output:</strong> 3
<strong>Explanation: </strong>Since k is zero, we cannot delete anything. The compressed string is "a11" of length 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>0 &lt;= k &lt;= s.length</code></li>
<li><code>s</code> contains only lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;