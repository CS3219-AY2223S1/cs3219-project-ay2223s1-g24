module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1627. Check If It Is a Good Array</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> of positive integers. Your task is to select some subset of <code>nums</code>, multiply each element by an integer and add all these numbers. The array is said to be <strong>good </strong>if you can obtain a sum of <code>1</code> from the array by any possible subset and multiplicand.</p>
<p>Return <code>True</code> if the array is <strong>good </strong>otherwise return <code>False</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [12,5,7,23]
<strong>Output:</strong> true
<strong>Explanation:</strong> Pick numbers 5 and 7.
5*3 + 7*(-2) = 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [29,6,10]
<strong>Output:</strong> true
<strong>Explanation:</strong> Pick numbers 29, 6 and 10.
29*1 + 6*(-3) + 10*(-1) = 1
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [3,6]
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10^5</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10^9</code></li>
</ul>
</div></div><br><br></html> `;