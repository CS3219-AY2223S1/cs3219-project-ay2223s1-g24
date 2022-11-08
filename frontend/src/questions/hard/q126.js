module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************************************<div id="title">1556. Count Unique Characters of All Substrings of a Given String</div>
****************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Let's define a function <code>countUniqueChars(s)</code> that returns the number of unique characters on <code>s</code>.</p>
<ul>
<li>For example, calling <code>countUniqueChars(s)</code> if <code>s = "LEETCODE"</code> then <code>"L"</code>, <code>"T"</code>, <code>"C"</code>, <code>"O"</code>, <code>"D"</code> are the unique characters since they appear only once in <code>s</code>, therefore <code>countUniqueChars(s) = 5</code>.</li>
</ul>
<p>Given a string <code>s</code>, return the sum of <code>countUniqueChars(t)</code> where <code>t</code> is a substring of <code>s</code>. The test cases are generated such that the answer fits in a 32-bit integer.</p>
<p>Notice that some substrings can be repeated so in this case you have to count the repeated ones too.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ABC"
<strong>Output:</strong> 10
<strong>Explanation: </strong>All possible substrings are: "A","B","C","AB","BC" and "ABC".
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "ABA"
<strong>Output:</strong> 8
<strong>Explanation: </strong>The same as example 1, except <code>countUniqueChars</code>("ABA") = 1.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "LEETCODE"
<strong>Output:</strong> 92
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists of uppercase English letters only.</li>
</ul>
</div></div><br><br></html> `;