module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1631. Palindrome Partitioning III</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> containing lowercase letters and an integer <code>k</code>. You need to :</p>
<ul>
<li>First, change some characters of <code>s</code> to other lowercase English letters.</li>
<li>Then divide <code>s</code> into <code>k</code> non-empty disjoint substrings such that each substring is a palindrome.</li>
</ul>
<p>Return <em>the minimal number of characters that you need to change to divide the string</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "abc", k = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can split the string into "ab" and "c", and change 1 character in "ab" to make it palindrome.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aabbc", k = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> You can split the string into "aa", "bb" and "c", all of them are palindrome.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "leetcode", k = 8
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= s.length &lt;= 100</code>.</li>
<li><code>s</code> only contains lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;