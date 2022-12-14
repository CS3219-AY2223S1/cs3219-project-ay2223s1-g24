module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">1492. Split Array Largest Sum</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> which consists of non-negative integers and an integer <code>m</code>, you can split the array into <code>m</code> non-empty continuous subarrays.</p>
<p>Write an algorithm to minimize the largest sum among these <code>m</code> subarrays.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [7,2,5,10,8], m = 2
<strong>Output:</strong> 18
<strong>Explanation:</strong>
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,5], m = 2
<strong>Output:</strong> 9
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,4,4], m = 3
<strong>Output:</strong> 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
<li><code>1 &lt;= m &lt;= min(50, nums.length)</code></li>
</ul>
</div></div><br><br></html> `;