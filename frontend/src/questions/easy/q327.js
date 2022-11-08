module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************************<div id="title">327. Minimum Changes To Make Alternating Binary String</div>
*******************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> consisting only of the characters <code>'0'</code> and <code>'1'</code>. In one operation, you can change any <code>'0'</code> to <code>'1'</code> or vice versa.</p>
<p>The string is called alternating if no two adjacent characters are equal. For example, the string <code>"010"</code> is alternating, while the string <code>"0100"</code> is not.</p>
<p>Return <em>the <strong>minimum</strong> number of operations needed to make</em> <code>s</code> <em>alternating</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "0100"
<strong>Output:</strong> 1
<strong>Explanation:</strong> If you change the last character to '1', s will be "0101", which is alternating.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "10"
<strong>Output:</strong> 0
<strong>Explanation:</strong> s is already alternating.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "1111"
<strong>Output:</strong> 2
<strong>Explanation:</strong> You need two operations to reach "0101" or "1010".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
</ul>
</div></div><br><br></html> `;