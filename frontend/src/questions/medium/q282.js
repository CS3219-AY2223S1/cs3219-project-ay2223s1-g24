module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">738. Non-decreasing Array</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> with <code>n</code> integers, your task is to check if it could become non-decreasing by modifying <strong>at most one element</strong>.</p>
<p>We define an array is non-decreasing if <code>nums[i] &lt;= nums[i + 1]</code> holds for every <code>i</code> (<strong>0-based</strong>) such that (<code>0 &lt;= i &lt;= n - 2</code>).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,2,3]
<strong>Output:</strong> true
<strong>Explanation:</strong> You could modify the first 4 to 1 to get a non-decreasing array.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [4,2,1]
<strong>Output:</strong> false
<strong>Explanation:</strong> You cannot get a non-decreasing array by modifying at most one element.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;