module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************<div id="title">376. Final Value of Variable After Performing Operations</div>
*********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is a programming language with only <strong>four</strong> operations and <strong>one</strong> variable <code>X</code>:</p>
<ul>
<li><code>++X</code> and <code>X++</code> <strong>increments</strong> the value of the variable <code>X</code> by <code>1</code>.</li>
<li><code>--X</code> and <code>X--</code> <strong>decrements</strong> the value of the variable <code>X</code> by <code>1</code>.</li>
</ul>
<p>Initially, the value of <code>X</code> is <code>0</code>.</p>
<p>Given an array of strings <code>operations</code> containing a list of operations, return <em>the <strong>final </strong>value of </em><code>X</code> <em>after performing all the operations</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> operations = ["--X","X++","X++"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> operations = ["++X","++X","X++"]
<strong>Output:</strong> 3
<strong>Explanation: </strong>The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> operations = ["X++","++X","--X","X--"]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= operations.length &lt;= 100</code></li>
<li><code>operations[i]</code> will be either <code>"++X"</code>, <code>"X++"</code>, <code>"--X"</code>, or <code>"X--"</code>.</li>
</ul>
</div></div><br><br></html> `;