module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">329. Merge Strings Alternately</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>
<p>Return <em>the merged string.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> word1 = "abc", word2 = "pqr"
<strong>Output:</strong> "apbqcr"
<strong>Explanation:</strong> The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> word1 = "ab", word2 = "pqrs"
<strong>Output:</strong> "apbqrs"
<strong>Explanation:</strong> Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> word1 = "abcd", word2 = "pq"
<strong>Output:</strong> "apbqcd"
<strong>Explanation:</strong> Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li>
<li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>
</ul></div></div><br><br></html> `;