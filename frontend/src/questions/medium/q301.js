module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">757. Minimum ASCII Delete Sum for Two Strings</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s1</code> and <code>s2</code>, return <em>the lowest <strong>ASCII</strong> sum of deleted characters to make two strings equal</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s1 = "sea", s2 = "eat"
<strong>Output:</strong> 231
<strong>Explanation:</strong> Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s1 = "delete", s2 = "leet"
<strong>Output:</strong> 403
<strong>Explanation:</strong> Deleting "dee" from "delete" to turn the string into "let",
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s1.length, s2.length &lt;= 1000</code></li>
<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;