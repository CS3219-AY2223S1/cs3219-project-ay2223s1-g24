module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">365. Delete Characters to Make Fancy String</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>A <strong>fancy string</strong> is a string where no <strong>three</strong> <strong>consecutive</strong> characters are equal.</p>
<p>Given a string <code>s</code>, delete the <strong>minimum</strong> possible number of characters from <code>s</code> to make it <strong>fancy</strong>.</p>
<p>Return <em>the final string after the deletion</em>. It can be shown that the answer will always be <strong>unique</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "le<u>e</u>etcode"
<strong>Output:</strong> "leetcode"
<strong>Explanation:</strong>
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "<u>a</u>aab<u>aa</u>aa"
<strong>Output:</strong> "aabaa"
<strong>Explanation:</strong>
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "aab"
<strong>Output:</strong> "aab"
<strong>Explanation:</strong> No three consecutive characters are equal, so return "aab".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists only of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;