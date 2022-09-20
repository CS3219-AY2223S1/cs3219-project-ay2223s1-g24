module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">1612. Longest Chunked Palindrome Decomposition</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>text</code>. You should split it to k substrings <code>(subtext<sub>1</sub>, subtext<sub>2</sub>, ..., subtext<sub>k</sub>)</code> such that:</p>
<ul>
<li><code>subtext<sub>i</sub></code> is a <strong>non-empty</strong> string.</li>
<li>The concatenation of all the substrings is equal to <code>text</code> (i.e., <code>subtext<sub>1</sub> + subtext<sub>2</sub> + ... + subtext<sub>k</sub> == text</code>).</li>
<li><code>subtext<sub>i</sub> == subtext<sub>k - i + 1</sub></code> for all valid values of <code>i</code> (i.e., <code>1 &lt;= i &lt;= k</code>).</li>
</ul>
<p>Return the largest possible value of <code>k</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> text = "ghiabcdefhelloadamhelloabcdefghi"
<strong>Output:</strong> 7
<strong>Explanation:</strong> We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> text = "merchant"
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can split the string on "(merchant)".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> text = "antaprezatepzapreanta"
<strong>Output:</strong> 11
<strong>Explanation:</strong> We can split the string on "(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= text.length &lt;= 1000</code></li>
<li><code>text</code> consists only of lowercase English characters.</li>
</ul>
</div></div><br><br></html> `;