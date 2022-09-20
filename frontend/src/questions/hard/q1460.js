module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">1460. Find Minimum in Rotated Sorted Array II</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,4,4,5,6,7]</code> might become:</p>
<ul>
<li><code>[4,5,6,7,0,1,4]</code> if it was rotated <code>4</code> times.</li>
<li><code>[0,1,4,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>
</ul>
<p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p>
<p>Given the sorted rotated array <code>nums</code> that may contain <strong>duplicates</strong>, return <em>the minimum element of this array</em>.</p>
<p>You must decrease the overall operation steps as much as possible.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,3,5]
<strong>Output:</strong> 1
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,2,0,1]
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 5000</code></li>
<li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li>
<li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> This problem is similar to <a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/" target="_blank">Find Minimum in Rotated Sorted Array</a>, but <code>nums</code> may contain <strong>duplicates</strong>. Would this affect the runtime complexity? How and why?</p>
<p> </p>
</div></div><br><br></html> `;