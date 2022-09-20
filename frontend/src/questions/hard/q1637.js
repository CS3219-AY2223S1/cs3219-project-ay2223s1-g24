module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************<div id="title">1637. Verbal Arithmetic Puzzle</div>
******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an equation, represented by <code>words</code> on the left side and the <code>result</code> on the right side.</p>
<p>You need to check if the equation is solvable under the following rules:</p>
<ul>
<li>Each character is decoded as one digit (0 - 9).</li>
<li>No two characters can map to the same digit.</li>
<li>Each <code>words[i]</code> and <code>result</code> are decoded as one number <strong>without</strong> leading zeros.</li>
<li>Sum of numbers on the left side (<code>words</code>) will equal to the number on the right side (<code>result</code>).</li>
</ul>
<p>Return <code>true</code> <em>if the equation is solvable, otherwise return</em> <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["SEND","MORE"], result = "MONEY"
<strong>Output:</strong> true
<strong>Explanation:</strong> Map 'S'-&gt; 9, 'E'-&gt;5, 'N'-&gt;6, 'D'-&gt;7, 'M'-&gt;1, 'O'-&gt;0, 'R'-&gt;8, 'Y'-&gt;'2'
Such that: "SEND" + "MORE" = "MONEY" ,  9567 + 1085 = 10652</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["SIX","SEVEN","SEVEN"], result = "TWENTY"
<strong>Output:</strong> true
<strong>Explanation:</strong> Map 'S'-&gt; 6, 'I'-&gt;5, 'X'-&gt;0, 'E'-&gt;8, 'V'-&gt;7, 'N'-&gt;2, 'T'-&gt;1, 'W'-&gt;'3', 'Y'-&gt;4
Such that: "SIX" + "SEVEN" + "SEVEN" = "TWENTY" ,  650 + 68782 + 68782 = 138214</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words = ["LEET","CODE"], result = "POINT"
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no possible mapping to satisfy the equation, so we return false.
Note that two different characters cannot map to the same digit.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= words.length &lt;= 5</code></li>
<li><code>1 &lt;= words[i].length, result.length &lt;= 7</code></li>
<li><code>words[i], result</code> contain only uppercase English letters.</li>
<li>The number of different characters used in the expression is at most <code>10</code>.</li>
</ul>
</div></div><br><br></html> `;