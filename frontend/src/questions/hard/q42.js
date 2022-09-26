module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">1472. Expression Add Operators</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>num</code> that contains only digits and an integer <code>target</code>, return <em><strong>all possibilities</strong> to insert the binary operators </em><code>'+'</code><em>, </em><code>'-'</code><em>, and/or </em><code>'*'</code><em> between the digits of </em><code>num</code><em> so that the resultant expression evaluates to the </em><code>target</code><em> value</em>.</p>
<p>Note that operands in the returned expressions <strong>should not</strong> contain leading zeros.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = "123", target = 6
<strong>Output:</strong> ["1*2*3","1+2+3"]
<strong>Explanation:</strong> Both "1*2*3" and "1+2+3" evaluate to 6.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = "232", target = 8
<strong>Output:</strong> ["2*3+2","2+3*2"]
<strong>Explanation:</strong> Both "2*3+2" and "2+3*2" evaluate to 8.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> num = "3456237490", target = 9191
<strong>Output:</strong> []
<strong>Explanation:</strong> There are no expressions that can be created from "3456237490" to evaluate to 9191.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num.length &lt;= 10</code></li>
<li><code>num</code> consists of only digits.</li>
<li><code>-2<sup>31</sup> &lt;= target &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;