module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">340. Sign of the Product of an Array</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is a function <code>signFunc(x)</code> that returns:</p>
<ul>
<li><code>1</code> if <code>x</code> is positive.</li>
<li><code>-1</code> if <code>x</code> is negative.</li>
<li><code>0</code> if <code>x</code> is equal to <code>0</code>.</li>
</ul>
<p>You are given an integer array <code>nums</code>. Let <code>product</code> be the product of all values in the array <code>nums</code>.</p>
<p>Return <code>signFunc(product)</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [-1,-2,-3,-4,3,2,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The product of all values in the array is 144, and signFunc(144) = 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,5,0,2,-3]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The product of all values in the array is 0, and signFunc(0) = 0
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [-1,1,-1,1,-1]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The product of all values in the array is -1, and signFunc(-1) = -1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;