module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">699. Complex Number Multiplication</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>A <a href="https://en.wikipedia.org/wiki/Complex_number" target="_blank">complex number</a> can be represented as a string on the form <code>"<strong>real</strong>+<strong>imaginary</strong>i"</code> where:</p>
<ul>
<li><code>real</code> is the real part and is an integer in the range <code>[-100, 100]</code>.</li>
<li><code>imaginary</code> is the imaginary part and is an integer in the range <code>[-100, 100]</code>.</li>
<li><code>i<sup>2</sup> == -1</code>.</li>
</ul>
<p>Given two complex numbers <code>num1</code> and <code>num2</code> as strings, return <em>a string of the complex number that represents their multiplications</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num1 = "1+1i", num2 = "1+1i"
<strong>Output:</strong> "0+2i"
<strong>Explanation:</strong> (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num1 = "1+-1i", num2 = "1+-1i"
<strong>Output:</strong> "0+-2i"
<strong>Explanation:</strong> (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>num1</code> and <code>num2</code> are valid complex numbers.</li>
</ul>
</div></div><br><br></html> `;