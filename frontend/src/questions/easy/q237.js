module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************************<div id="title">237. Replace Elements with Greatest Element on Right Side</div>
**********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>arr</code>, replace every element in that array with the greatest element among the elements to its right, and replace the last element with <code>-1</code>.</p>
<p>After doing so, return the array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [17,18,5,4,6,1]
<strong>Output:</strong> [18,6,6,6,1,-1]
<strong>Explanation:</strong> 
- index 0 --&gt; the greatest element to the right of index 0 is index 1 (18).
- index 1 --&gt; the greatest element to the right of index 1 is index 4 (6).
- index 2 --&gt; the greatest element to the right of index 2 is index 4 (6).
- index 3 --&gt; the greatest element to the right of index 3 is index 4 (6).
- index 4 --&gt; the greatest element to the right of index 4 is index 5 (1).
- index 5 --&gt; there are no elements to the right of index 5, so we put -1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [400]
<strong>Output:</strong> [-1]
<strong>Explanation:</strong> There are no elements to the right of index 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= arr[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;