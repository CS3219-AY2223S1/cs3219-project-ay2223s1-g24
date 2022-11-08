module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">271. Make Two Arrays Equal by Reversing Subarrays</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integer arrays of equal length <code>target</code> and <code>arr</code>. In one step, you can select any <strong>non-empty subarray</strong> of <code>arr</code> and reverse it. You are allowed to make any number of steps.</p>
<p>Return <code>true</code> <em>if you can make </em><code>arr</code><em> equal to </em><code>target</code><em> or </em><code>false</code><em> otherwise</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> target = [1,2,3,4], arr = [2,4,1,3]
<strong>Output:</strong> true
<strong>Explanation:</strong> You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> target = [7], arr = [7]
<strong>Output:</strong> true
<strong>Explanation:</strong> arr is equal to target without any reverses.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> target = [3,7,9], arr = [3,7,11]
<strong>Output:</strong> false
<strong>Explanation:</strong> arr does not have value 9 and it can never be converted to target.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>target.length == arr.length</code></li>
<li><code>1 &lt;= target.length &lt;= 1000</code></li>
<li><code>1 &lt;= target[i] &lt;= 1000</code></li>
<li><code>1 &lt;= arr[i] &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;