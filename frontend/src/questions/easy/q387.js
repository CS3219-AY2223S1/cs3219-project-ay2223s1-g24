module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************************<div id="title">387. Check Whether Two Strings are Almost Equivalent</div>
*****************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Two strings <code>word1</code> and <code>word2</code> are considered <strong>almost equivalent</strong> if the differences between the frequencies of each letter from <code>'a'</code> to <code>'z'</code> between <code>word1</code> and <code>word2</code> is <strong>at most</strong> <code>3</code>.</p>
<p>Given two strings <code>word1</code> and <code>word2</code>, each of length <code>n</code>, return <code>true</code> <em>if </em><code>word1</code> <em>and</em> <code>word2</code> <em>are <strong>almost equivalent</strong>, or</em> <code>false</code> <em>otherwise</em>.</p>
<p>The <strong>frequency</strong> of a letter <code>x</code> is the number of times it occurs in the string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> word1 = "aaaa", word2 = "bccb"
<strong>Output:</strong> false
<strong>Explanation:</strong> There are 4 'a's in "aaaa" but 0 'a's in "bccb".
The difference is 4, which is more than the allowed 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> word1 = "abcdeef", word2 = "abaaacc"
<strong>Output:</strong> true
<strong>Explanation:</strong> The differences between the frequencies of each letter in word1 and word2 are at most 3:
- 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
- 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
- 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
- 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
- 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
- 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> word1 = "cccddabba", word2 = "babababab"
<strong>Output:</strong> true
<strong>Explanation:</strong> The differences between the frequencies of each letter in word1 and word2 are at most 3:
- 'a' appears 2 times in word1 and 4 times in word2. The difference is 2.
- 'b' appears 2 times in word1 and 5 times in word2. The difference is 3.
- 'c' appears 3 times in word1 and 0 times in word2. The difference is 3.
- 'd' appears 2 times in word1 and 0 times in word2. The difference is 2.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == word1.length == word2.length</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>word1</code> and <code>word2</code> consist only of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;