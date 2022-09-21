module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1478. Create Maximum Number</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> of lengths <code>m</code> and <code>n</code> respectively. <code>nums1</code> and <code>nums2</code> represent the digits of two numbers. You are also given an integer <code>k</code>.</p>
<p>Create the maximum number of length <code>k &lt;= m + n</code> from digits of the two numbers. The relative order of the digits from the same array must be preserved.</p>
<p>Return an array of the <code>k</code> digits representing the answer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
<strong>Output:</strong> [9,8,6,5,3]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums1 = [6,7], nums2 = [6,0,4], k = 5
<strong>Output:</strong> [6,7,6,0,4]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums1 = [3,9], nums2 = [8,9], k = 3
<strong>Output:</strong> [9,8,9]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == nums1.length</code></li>
<li><code>n == nums2.length</code></li>
<li><code>1 &lt;= m, n &lt;= 500</code></li>
<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 9</code></li>
<li><code>1 &lt;= k &lt;= m + n</code></li>
</ul>
</div></div><br><br></html> `;