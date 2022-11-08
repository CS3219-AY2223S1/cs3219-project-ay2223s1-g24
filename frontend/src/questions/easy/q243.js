module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">243. Rank Transform of an Array</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>arr</code>, replace each element with its rank.</p>
<p>The rank represents how large the element is. The rank has the following rules:</p>
<ul>
<li>Rank is an integer starting from 1.</li>
<li>The larger the element, the larger the rank. If two elements are equal, their rank must be the same.</li>
<li>Rank should be as small as possible.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [40,10,20,30]
<strong>Output:</strong> [4,1,2,3]
<strong>Explanation</strong>: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [100,100,100]
<strong>Output:</strong> [1,1,1]
<strong>Explanation</strong>: Same elements share the same rank.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [37,12,28,9,100,56,80,5,12]
<strong>Output:</strong> [5,3,4,2,8,6,7,1,3]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;