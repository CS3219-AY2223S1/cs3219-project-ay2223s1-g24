module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">1840. Count the Number of Ideal Arrays</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integers <code>n</code> and <code>maxValue</code>, which are used to describe an <strong>ideal</strong> array.</p>
<p>A <strong>0-indexed</strong> integer array <code>arr</code> of length <code>n</code> is considered <strong>ideal</strong> if the following conditions hold:</p>
<ul>
<li>Every <code>arr[i]</code> is a value from <code>1</code> to <code>maxValue</code>, for <code>0 &lt;= i &lt; n</code>.</li>
<li>Every <code>arr[i]</code> is divisible by <code>arr[i - 1]</code>, for <code>0 &lt; i &lt; n</code>.</li>
</ul>
<p>Return <em>the number of <strong>distinct</strong> ideal arrays of length </em><code>n</code>. Since the answer may be very large, return it modulo <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2, maxValue = 5
<strong>Output:</strong> 10
<strong>Explanation:</strong> The following are the possible ideal arrays:
- Arrays starting with the value 1 (5 arrays): [1,1], [1,2], [1,3], [1,4], [1,5]
- Arrays starting with the value 2 (2 arrays): [2,2], [2,4]
- Arrays starting with the value 3 (1 array): [3,3]
- Arrays starting with the value 4 (1 array): [4,4]
- Arrays starting with the value 5 (1 array): [5,5]
There are a total of 5 + 2 + 1 + 1 + 1 = 10 distinct ideal arrays.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 5, maxValue = 3
<strong>Output:</strong> 11
<strong>Explanation:</strong> The following are the possible ideal arrays:
- Arrays starting with the value 1 (9 arrays): 
   - With no other distinct values (1 array): [1,1,1,1,1] 
   - With 2<sup>nd</sup> distinct value 2 (4 arrays): [1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
   - With 2<sup>nd</sup> distinct value 3 (4 arrays): [1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
- Arrays starting with the value 2 (1 array): [2,2,2,2,2]
- Arrays starting with the value 3 (1 array): [3,3,3,3,3]
There are a total of 9 + 1 + 1 = 11 distinct ideal arrays.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= maxValue &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;