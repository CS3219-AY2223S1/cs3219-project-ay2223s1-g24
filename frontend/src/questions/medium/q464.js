module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">464. Integer to Roman</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>
<pre><strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>
<p>For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two one's added together. <code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p>
<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p>
<ul>
<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9. </li>
<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90. </li>
<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>
</ul>
<p>Given an integer, convert it to a roman numeral.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = 3
<strong>Output:</strong> "III"
<strong>Explanation:</strong> 3 is represented as 3 ones.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = 58
<strong>Output:</strong> "LVIII"
<strong>Explanation:</strong> L = 50, V = 5, III = 3.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> num = 1994
<strong>Output:</strong> "MCMXCIV"
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num &lt;= 3999</code></li>
</ul>
</div></div><br><br></html> `;