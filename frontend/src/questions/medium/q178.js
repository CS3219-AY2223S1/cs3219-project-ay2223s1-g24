module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">634. Integer Replacement</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a positive integer <code>n</code>, you can apply one of the following operations:</p>
<ol>
<li>If <code>n</code> is even, replace <code>n</code> with <code>n / 2</code>.</li>
<li>If <code>n</code> is odd, replace <code>n</code> with either <code>n + 1</code> or <code>n - 1</code>.</li>
</ol>
<p>Return <em>the minimum number of operations needed for</em> <code>n</code> <em>to become</em> <code>1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> 8 -&gt; 4 -&gt; 2 -&gt; 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 7
<strong>Output:</strong> 4
<strong>Explanation: </strong>7 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1
or 7 -&gt; 6 -&gt; 3 -&gt; 2 -&gt; 1
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;