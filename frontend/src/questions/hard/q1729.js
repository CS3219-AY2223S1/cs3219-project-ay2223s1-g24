module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">1729. Maximize Palindrome Length From Subsequences</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two strings, <code>word1</code> and <code>word2</code>. You want to construct a string in the following manner:</p>
<ul>
<li>Choose some <strong>non-empty</strong> subsequence <code>subsequence1</code> from <code>word1</code>.</li>
<li>Choose some <strong>non-empty</strong> subsequence <code>subsequence2</code> from <code>word2</code>.</li>
<li>Concatenate the subsequences: <code>subsequence1 + subsequence2</code>, to make the string.</li>
</ul>
<p>Return <em>the <strong>length</strong> of the longest <strong>palindrome</strong> that can be constructed in the described manner. </em>If no palindromes can be constructed, return <code>0</code>.</p>
<p>A <strong>subsequence</strong> of a string <code>s</code> is a string that can be made by deleting some (possibly none) characters from <code>s</code> without changing the order of the remaining characters.</p>
<p>A <strong>palindrome</strong> is a string that reads the same forward as well as backward.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> word1 = "cacb", word2 = "cbba"
<strong>Output:</strong> 5
<strong>Explanation:</strong> Choose "ab" from word1 and "cba" from word2 to make "abcba", which is a palindrome.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> word1 = "ab", word2 = "ab"
<strong>Output:</strong> 3
<strong>Explanation:</strong> Choose "ab" from word1 and "a" from word2 to make "aba", which is a palindrome.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> word1 = "aa", word2 = "bb"
<strong>Output:</strong> 0
<strong>Explanation:</strong> You cannot construct a palindrome from the described method, so return 0.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word1.length, word2.length &lt;= 1000</code></li>
<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;