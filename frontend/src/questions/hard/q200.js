module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************************************<div id="title">1630. Number of Ways to Stay in the Same Place After Some Steps</div>
***************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You have a pointer at index <code>0</code> in an array of size <code>arrLen</code>. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).</p>
<p>Given two integers <code>steps</code> and <code>arrLen</code>, return the number of ways such that your pointer still at index <code>0</code> after <strong>exactly</strong> <code>steps</code> steps. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> steps = 3, arrLen = 2
<strong>Output:</strong> 4
<strong>Explanation: </strong>There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> steps = 2, arrLen = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> steps = 4, arrLen = 2
<strong>Output:</strong> 8
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= steps &lt;= 500</code></li>
<li><code>1 &lt;= arrLen &lt;= 10<sup>6</sup></code></li>
</ul>
</div></div><br><br></html> `;