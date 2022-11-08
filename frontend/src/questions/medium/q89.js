module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">545. Evaluate Reverse Polish Notation</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>Evaluate the value of an arithmetic expression in <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank">Reverse Polish Notation</a>.</p>
<p>Valid operators are <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>. Each operand may be an integer or another expression.</p>
<p><strong>Note</strong> that division between two integers should truncate toward zero.</p>
<p>It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> tokens = ["2","1","+","3","*"]
<strong>Output:</strong> 9
<strong>Explanation:</strong> ((2 + 1) * 3) = 9
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> tokens = ["4","13","5","/","+"]
<strong>Output:</strong> 6
<strong>Explanation:</strong> (4 + (13 / 5)) = 6
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
<strong>Output:</strong> 22
<strong>Explanation:</strong> ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= tokens.length &lt;= 10<sup>4</sup></code></li>
<li><code>tokens[i]</code> is either an operator: <code>"+"</code>, <code>"-"</code>, <code>"*"</code>, or <code>"/"</code>, or an integer in the range <code>[-200, 200]</code>.</li>
</ul>
</div></div><br><br></html> `;