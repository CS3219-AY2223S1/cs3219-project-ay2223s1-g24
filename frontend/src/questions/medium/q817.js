module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">817. Split Array into Fibonacci Sequence</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string of digits <code>num</code>, such as <code>"123456579"</code>. We can split it into a Fibonacci-like sequence <code>[123, 456, 579]</code>.</p>
<p>Formally, a <strong>Fibonacci-like</strong> sequence is a list <code>f</code> of non-negative integers such that:</p>
<ul>
<li><code>0 &lt;= f[i] &lt; 2<sup>31</sup></code>, (that is, each integer fits in a <strong>32-bit</strong> signed integer type),</li>
<li><code>f.length &gt;= 3</code>, and</li>
<li><code>f[i] + f[i + 1] == f[i + 2]</code> for all <code>0 &lt;= i &lt; f.length - 2</code>.</li>
</ul>
<p>Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number <code>0</code> itself.</p>
<p>Return any Fibonacci-like sequence split from <code>num</code>, or return <code>[]</code> if it cannot be done.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = "1101111"
<strong>Output:</strong> [11,0,11,11]
<strong>Explanation:</strong> The output [110, 1, 111] would also be accepted.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = "112358130"
<strong>Output:</strong> []
<strong>Explanation:</strong> The task is impossible.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> num = "0123"
<strong>Output:</strong> []
<strong>Explanation:</strong> Leading zeroes are not allowed, so "01", "2", "3" is not valid.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num.length &lt;= 200</code></li>
<li><code>num</code> contains only digits.</li>
</ul>
</div></div><br><br></html> `;