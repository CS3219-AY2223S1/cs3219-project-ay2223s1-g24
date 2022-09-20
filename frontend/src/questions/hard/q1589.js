module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">1589. Least Operators to Express Number</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a single positive integer <code>x</code>, we will write an expression of the form <code>x (op1) x (op2) x (op3) x ...</code> where each operator <code>op1</code>, <code>op2</code>, etc. is either addition, subtraction, multiplication, or division (<code>+</code>, <code>-</code>, <code>*</code>, or <code>/)</code>. For example, with <code>x = 3</code>, we might write <code>3 * 3 / 3 + 3 - 3</code> which is a value of <font face="monospace">3</font>.</p>
<p>When writing such an expression, we adhere to the following conventions:</p>
<ul>
<li>The division operator (<code>/</code>) returns rational numbers.</li>
<li>There are no parentheses placed anywhere.</li>
<li>We use the usual order of operations: multiplication and division happen before addition and subtraction.</li>
<li>It is not allowed to use the unary negation operator (<code>-</code>). For example, "<code>x - x</code>" is a valid expression as it only uses subtraction, but "<code>-x + x</code>" is not because it uses negation.</li>
</ul>
<p>We would like to write an expression with the least number of operators such that the expression equals the given <code>target</code>. Return the least number of operators used.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> x = 3, target = 19
<strong>Output:</strong> 5
<strong>Explanation:</strong> 3 * 3 + 3 * 3 + 3 / 3.
The expression contains 5 operations.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> x = 5, target = 501
<strong>Output:</strong> 8
<strong>Explanation:</strong> 5 * 5 * 5 * 5 - 5 * 5 * 5 + 5 / 5.
The expression contains 8 operations.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> x = 100, target = 100000000
<strong>Output:</strong> 3
<strong>Explanation:</strong> 100 * 100 * 100 * 100.
The expression contains 3 operations.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= x &lt;= 100</code></li>
<li><code>1 &lt;= target &lt;= 2 * 10<sup>8</sup></code></li>
</ul>
</div></div><br><br></html> `;