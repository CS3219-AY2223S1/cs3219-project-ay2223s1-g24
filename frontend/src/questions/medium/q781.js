module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">781. K-th Symbol in Grammar</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>We build a table of <code>n</code> rows (<strong>1-indexed</strong>). We start by writing <code>0</code> in the <code>1<sup>st</sup></code> row. Now in every subsequent row, we look at the previous row and replace each occurrence of <code>0</code> with <code>01</code>, and each occurrence of <code>1</code> with <code>10</code>.</p>
<ul>
<li>For example, for <code>n = 3</code>, the <code>1<sup>st</sup></code> row is <code>0</code>, the <code>2<sup>nd</sup></code> row is <code>01</code>, and the <code>3<sup>rd</sup></code> row is <code>0110</code>.</li>
</ul>
<p>Given two integer <code>n</code> and <code>k</code>, return the <code>k<sup>th</sup></code> (<strong>1-indexed</strong>) symbol in the <code>n<sup>th</sup></code> row of a table of <code>n</code> rows.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 1, k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> row 1: <u>0</u>
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2, k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> 
row 1: 0
row 2: <u>0</u>1
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 2, k = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
row 1: 0
row 2: 0<u>1</u>
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 30</code></li>
<li><code>1 &lt;= k &lt;= 2<sup>n - 1</sup></code></li>
</ul>
</div></div><br><br></html> `;