module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">374. Reverse Prefix of Word</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>0-indexed</strong> string <code>word</code> and a character <code>ch</code>, <strong>reverse</strong> the segment of <code>word</code> that starts at index <code>0</code> and ends at the index of the <strong>first occurrence</strong> of <code>ch</code> (<strong>inclusive</strong>). If the character <code>ch</code> does not exist in <code>word</code>, do nothing.</p>
<ul>
<li>For example, if <code>word = "abcdefd"</code> and <code>ch = "d"</code>, then you should <strong>reverse</strong> the segment that starts at <code>0</code> and ends at <code>3</code> (<strong>inclusive</strong>). The resulting string will be <code>"<u>dcba</u>efd"</code>.</li>
</ul>
<p>Return <em>the resulting string</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> word = "<u>abcd</u>efd", ch = "d"
<strong>Output:</strong> "<u>dcba</u>efd"
<strong>Explanation:</strong> The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> word = "<u>xyxz</u>xe", ch = "z"
<strong>Output:</strong> "<u>zxyx</u>xe"
<strong>Explanation:</strong> The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> word = "abcd", ch = "z"
<strong>Output:</strong> "abcd"
<strong>Explanation:</strong> "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word.length &lt;= 250</code></li>
<li><code>word</code> consists of lowercase English letters.</li>
<li><code>ch</code> is a lowercase English letter.</li>
</ul>
</div></div><br><br></html> `;