module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************************<div id="title">219. Find Words That Can Be Formed by Characters</div>
*************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of strings <code>words</code> and a string <code>chars</code>.</p>
<p>A string is <strong>good</strong> if it can be formed by characters from chars (each character can only be used once).</p>
<p>Return <em>the sum of lengths of all good strings in words</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["cat","bt","hat","tree"], chars = "atach"
<strong>Output:</strong> 6
<strong>Explanation:</strong> The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["hello","world","leetcode"], chars = "welldonehoneyr"
<strong>Output:</strong> 10
<strong>Explanation:</strong> The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 1000</code></li>
<li><code>1 &lt;= words[i].length, chars.length &lt;= 100</code></li>
<li><code>words[i]</code> and <code>chars</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;