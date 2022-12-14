module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">285. Count Good Triplets</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>arr</code>, and three integers <code>a</code>, <code>b</code> and <code>c</code>. You need to find the number of good triplets.</p>
<p>A triplet <code>(arr[i], arr[j], arr[k])</code> is <strong>good</strong> if the following conditions are true:</p>
<ul>
<li><code>0 &lt;= i &lt; j &lt; k &lt; arr.length</code></li>
<li><code>|arr[i] - arr[j]| &lt;= a</code></li>
<li><code>|arr[j] - arr[k]| &lt;= b</code></li>
<li><code>|arr[i] - arr[k]| &lt;= c</code></li>
</ul>
<p>Where <code>|x|</code> denotes the absolute value of <code>x</code>.</p>
<p>Return<em> the number of good triplets</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,1,2,2,3], a = 0, b = 0, c = 1
<strong>Output:</strong> 0
<strong>Explanation: </strong>No triplet satisfies all conditions.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= arr.length &lt;= 100</code></li>
<li><code>0 &lt;= arr[i] &lt;= 1000</code></li>
<li><code>0 &lt;= a, b, c &lt;= 1000</code></li>
</ul></div></div><br><br></html> `;