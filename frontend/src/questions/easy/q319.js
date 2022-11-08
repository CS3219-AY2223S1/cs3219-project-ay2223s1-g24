module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">319. Calculate Money in Leetcode Bank</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>Hercy wants to save money for his first car. He puts money in the Leetcode bank <strong>every day</strong>.</p>
<p>He starts by putting in <code>$1</code> on Monday, the first day. Every day from Tuesday to Sunday, he will put in <code>$1</code> more than the day before. On every subsequent Monday, he will put in <code>$1</code> more than the <strong>previous Monday</strong>.<span style="display: none;"> </span></p>
<p>Given <code>n</code>, return <em>the total amount of money he will have in the Leetcode bank at the end of the </em><code>n<sup>th</sup></code><em> day.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> 10
<strong>Explanation:</strong> After the 4<sup>th</sup> day, the total is 1 + 2 + 3 + 4 = 10.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 10
<strong>Output:</strong> 37
<strong>Explanation:</strong> After the 10<sup>th</sup> day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2<sup>nd</sup> Monday, Hercy only puts in $2.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 20
<strong>Output:</strong> 96
<strong>Explanation:</strong> After the 20<sup>th</sup> day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;