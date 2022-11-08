module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">392. Finding 3-Digit Even Numbers</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>digits</code>, where each element is a digit. The array may contain duplicates.</p>
<p>You need to find <strong>all</strong> the <strong>unique</strong> integers that follow the given requirements:</p>
<ul>
<li>The integer consists of the <strong>concatenation</strong> of <strong>three</strong> elements from <code>digits</code> in <strong>any</strong> arbitrary order.</li>
<li>The integer does not have <strong>leading zeros</strong>.</li>
<li>The integer is <strong>even</strong>.</li>
</ul>
<p>For example, if the given <code>digits</code> were <code>[1, 2, 3]</code>, integers <code>132</code> and <code>312</code> follow the requirements.</p>
<p>Return <em>a <strong>sorted</strong> array of the unique integers.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> digits = [2,1,3,0]
<strong>Output:</strong> [102,120,130,132,210,230,302,310,312,320]
<strong>Explanation:</strong> All the possible integers that follow the requirements are in the output array. 
Notice that there are no <strong>odd</strong> integers or integers with <strong>leading zeros</strong>.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> digits = [2,2,8,8,2]
<strong>Output:</strong> [222,228,282,288,822,828,882]
<strong>Explanation:</strong> The same digit can be used as many times as it appears in digits. 
In this example, the digit 8 is used twice each time in 288, 828, and 882. 
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> digits = [3,7,5]
<strong>Output:</strong> []
<strong>Explanation:</strong> No <strong>even</strong> integers can be formed using the given digits.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= digits.length &lt;= 100</code></li>
<li><code>0 &lt;= digits[i] &lt;= 9</code></li>
</ul>
</div></div><br><br></html> `;