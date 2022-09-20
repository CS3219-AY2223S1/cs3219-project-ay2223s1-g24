module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">761. Longest Word in Dictionary</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of strings <code>words</code> representing an English Dictionary, return <em>the longest word in</em> <code>words</code> <em>that can be built one character at a time by other words in</em> <code>words</code>.</p>
<p>If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.</p>
<p>Note that the word should be built from left to right with each additional character being added to the end of a previous word. </p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["w","wo","wor","worl","world"]
<strong>Output:</strong> "world"
<strong>Explanation:</strong> The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["a","banana","app","appl","ap","apply","apple"]
<strong>Output:</strong> "apple"
<strong>Explanation:</strong> Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 1000</code></li>
<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;