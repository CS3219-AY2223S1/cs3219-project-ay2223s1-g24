module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">676. Generate Random Point in a Circle</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the radius and the position of the center of a circle, implement the function <code>randPoint</code> which generates a uniform random point inside the circle.</p>
<p>Implement the <code>Solution</code> class:</p>
<ul>
<li><code>Solution(double radius, double x_center, double y_center)</code> initializes the object with the radius of the circle <code>radius</code> and the position of the center <code>(x_center, y_center)</code>.</li>
<li><code>randPoint()</code> returns a random point inside the circle. A point on the circumference of the circle is considered to be in the circle. The answer is returned as an array <code>[x, y]</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["Solution", "randPoint", "randPoint", "randPoint"]
[[1.0, 0.0, 0.0], [], [], []]
<strong>Output</strong>
[null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]

<strong>Explanation</strong>
Solution solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint(); // return [-0.02493, -0.38077]
solution.randPoint(); // return [0.82314, 0.38945]
solution.randPoint(); // return [0.36572, 0.17248]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt; radius &lt;= 10<sup>8</sup></code></li>
<li><code>-10<sup>7</sup> &lt;= x_center, y_center &lt;= 10<sup>7</sup></code></li>
<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>randPoint</code>.</li>
</ul>
</div></div><br><br></html> `;