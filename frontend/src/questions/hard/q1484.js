module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">1484. Palindrome Pairs</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of <b>unique</b> words, return all the pairs of the <b><i>distinct</i></b> indices <code>(i, j)</code> in the given list, so that the concatenation of the two words <code>words[i] + words[j]</code> is a palindrome.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["abcd","dcba","lls","s","sssll"]
<strong>Output:</strong> [[0,1],[1,0],[3,2],[2,4]]
<strong>Explanation:</strong> The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["bat","tab","cat"]
<strong>Output:</strong> [[0,1],[1,0]]
<strong>Explanation:</strong> The palindromes are ["battab","tabbat"]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words = ["a",""]
<strong>Output:</strong> [[0,1],[1,0]]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 5000</code></li>
<li><code>0 &lt;= words[i].length &lt;= 300</code></li>
<li><code>words[i]</code> consists of lower-case English letters.</li>
</ul>
</div></div><br><br></html> `;