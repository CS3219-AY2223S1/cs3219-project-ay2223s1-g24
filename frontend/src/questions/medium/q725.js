module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">725. Solve the Equation</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>Solve a given equation and return the value of <code>'x'</code> in the form of a string <code>"x=#value"</code>. The equation contains only <code>'+'</code>, <code>'-'</code> operation, the variable <code>'x'</code> and its coefficient. You should return <code>"No solution"</code> if there is no solution for the equation, or <code>"Infinite solutions"</code> if there are infinite solutions for the equation.</p>
<p>If there is exactly one solution for the equation, we ensure that the value of <code>'x'</code> is an integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> equation = "x+5-3+x=6+x-2"
<strong>Output:</strong> "x=2"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> equation = "x=x"
<strong>Output:</strong> "Infinite solutions"
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> equation = "2x=x"
<strong>Output:</strong> "x=0"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= equation.length &lt;= 1000</code></li>
<li><code>equation</code> has exactly one <code>'='</code>.</li>
<li><code>equation</code> consists of integers with an absolute value in the range <code>[0, 100]</code> without any leading zeros, and the variable <code>'x'</code>.</li>
</ul>
</div></div><br><br></html> `;