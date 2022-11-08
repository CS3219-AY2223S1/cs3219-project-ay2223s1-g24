module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">1712. Minimum Incompatibility</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code>​​​ and an integer <code>k</code>. You are asked to distribute this array into <code>k</code> subsets of <strong>equal size</strong> such that there are no two equal elements in the same subset.</p>
<p>A subset's <strong>incompatibility</strong> is the difference between the maximum and minimum elements in that array.</p>
<p>Return <em>the <strong>minimum possible sum of incompatibilities</strong> of the </em><code>k</code> <em>subsets after distributing the array optimally, or return </em><code>-1</code><em> if it is not possible.</em></p>
<p>A subset is a group integers that appear in the array with no particular order.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,1,4], k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> The optimal distribution of subsets is [1,2] and [1,4].
The incompatibility is (2-1) + (4-1) = 4.
Note that [1,1] and [2,4] would result in a smaller sum, but the first subset contains 2 equal elements.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [6,3,8,1,3,1,2,2], k = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong> The optimal distribution of subsets is [1,2], [2,3], [6,8], and [1,3].
The incompatibility is (2-1) + (3-2) + (8-6) + (3-1) = 6.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [5,3,3,6,3,3], k = 3
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is impossible to distribute nums into 3 subsets where no two elements are equal in the same subset.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= nums.length &lt;= 16</code></li>
<li><code>nums.length</code> is divisible by <code>k</code></li>
<li><code>1 &lt;= nums[i] &lt;= nums.length</code></li>
</ul>
</div></div><br><br></html> `;