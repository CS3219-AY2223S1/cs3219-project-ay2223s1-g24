module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************************<div id="title">1752. Minimum Cost to Change the Final Value of Expression</div>
**********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>valid</strong> boolean expression as a string <code>expression</code> consisting of the characters <code>'1'</code>,<code>'0'</code>,<code>'&amp;'</code> (bitwise <strong>AND</strong> operator),<code>'|'</code> (bitwise <strong>OR</strong> operator),<code>'('</code>, and <code>')'</code>.</p>
<ul>
<li>For example, <code>"()1|1"</code> and <code>"(1)&amp;()"</code> are <strong>not valid</strong> while <code>"1"</code>, <code>"(((1))|(0))"</code>, and <code>"1|(0&amp;(1))"</code> are <strong>valid</strong> expressions.</li>
</ul>
<p>Return<em> the <strong>minimum cost</strong> to change the final value of the expression</em>.</p>
<ul>
<li>For example, if <code>expression = "1|1|(0&amp;0)&amp;1"</code>, its <strong>value</strong> is <code>1|1|(0&amp;0)&amp;1 = 1|1|0&amp;1 = 1|0&amp;1 = 1&amp;1 = 1</code>. We want to apply operations so that the<strong> new</strong> expression evaluates to <code>0</code>.</li>
</ul>
<p>The <strong>cost</strong> of changing the final value of an expression is the <strong>number of operations</strong> performed on the expression. The types of <strong>operations</strong> are described as follows:</p>
<ul>
<li>Turn a <code>'1'</code> into a <code>'0'</code>.</li>
<li>Turn a <code>'0'</code> into a <code>'1'</code>.</li>
<li>Turn a <code>'&amp;'</code> into a <code>'|'</code>.</li>
<li>Turn a <code>'|'</code> into a <code>'&amp;'</code>.</li>
</ul>
<p><strong>Note:</strong> <code>'&amp;'</code> does <strong>not</strong> take precedence over <code>'|'</code> in the <strong>order of calculation</strong>. Evaluate parentheses <strong>first</strong>, then in <strong>left-to-right</strong> order.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> expression = "1&amp;(0|1)"
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can turn "1&amp;(0<u><strong>|</strong></u>1)" into "1&amp;(0<u><strong>&amp;</strong></u>1)" by changing the '|' to a '&amp;' using 1 operation.
The new expression evaluates to 0. 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> expression = "(0&amp;0)&amp;(0&amp;0&amp;0)"
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can turn "(0<u><strong>&amp;0</strong></u>)<strong><u>&amp;</u></strong>(0&amp;0&amp;0)" into "(0<u><strong>|1</strong></u>)<u><strong>|</strong></u>(0&amp;0&amp;0)" using 3 operations.
The new expression evaluates to 1.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> expression = "(0|(1|0&amp;1))"
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can turn "(0|(<u><strong>1</strong></u>|0&amp;1))" into "(0|(<u><strong>0</strong></u>|0&amp;1))" using 1 operation.
The new expression evaluates to 0.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= expression.length &lt;= 10<sup>5</sup></code></li>
<li><code>expression</code> only contains <code>'1'</code>,<code>'0'</code>,<code>'&amp;'</code>,<code>'|'</code>,<code>'('</code>, and <code>')'</code></li>
<li>All parentheses are properly matched.</li>
<li>There will be no empty parentheses (i.e: <code>"()"</code> is not a substring of <code>expression</code>).</li>
</ul>
</div></div><br><br></html> `;