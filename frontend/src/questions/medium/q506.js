module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">506. Search in Rotated Sorted Array II</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is an integer array <code>nums</code> sorted in non-decreasing order (not necessarily with <strong>distinct</strong> values).</p>
<p>Before being passed to your function, <code>nums</code> is <strong>rotated</strong> at an unknown pivot index <code>k</code> (<code>0 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,4,4,5,6,6,7]</code> might be rotated at pivot index <code>5</code> and become <code>[4,5,6,6,7,0,1,2,4,4]</code>.</p>
<p>Given the array <code>nums</code> <strong>after</strong> the rotation and an integer <code>target</code>, return <code>true</code><em> if </em><code>target</code><em> is in </em><code>nums</code><em>, or </em><code>false</code><em> if it is not in </em><code>nums</code><em>.</em></p>
<p>You must decrease the overall operation steps as much as possible.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,5,6,0,0,1,2], target = 0
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,5,6,0,0,1,2], target = 3
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
<li><code>nums</code> is guaranteed to be rotated at some pivot.</li>
<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> This problem is similar to <a href="/problems/search-in-rotated-sorted-array/description/" target="_blank">Search in Rotated Sorted Array</a>, but <code>nums</code> may contain <strong>duplicates</strong>. Would this affect the runtime complexity? How and why?</p>
</div></div><br><br></html> `;