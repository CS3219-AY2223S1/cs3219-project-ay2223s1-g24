module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">261. String Matching in an Array</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of string <code>words</code>. Return all strings in <code>words</code> which is substring of another word in <strong>any</strong> order. </p>
<p>String <code>words[i]</code> is substring of <code>words[j]</code>, if can be obtained removing some characters to left and/or right side of <code>words[j]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["mass","as","hero","superhero"]
<strong>Output:</strong> ["as","hero"]
<strong>Explanation:</strong> "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["leetcode","et","code"]
<strong>Output:</strong> ["et","code"]
<strong>Explanation:</strong> "et", "code" are substring of "leetcode".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words = ["blue","green","bu"]
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 100</code></li>
<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
<li><code>words[i]</code> contains only lowercase English letters.</li>
<li>It's <strong>guaranteed</strong> that <code>words[i]</code> will be unique.</li>
</ul>
</div></div><br><br></html> `;