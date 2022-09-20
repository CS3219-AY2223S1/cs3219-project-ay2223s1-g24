module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************<div id="title">1779. Kth Smallest Product of Two Sorted Arrays</div>
***********************************************<div class="content__u3I1 question-content__JfgR"><div>Given two <strong>sorted 0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> as well as an integer <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> (<strong>1-based</strong>) smallest product of </em><code>nums1[i] * nums2[j]</code><em> where </em><code>0 &lt;= i &lt; nums1.length</code><em> and </em><code>0 &lt;= j &lt; nums2.length</code>.
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums1 = [2,5], nums2 = [3,4], k = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2<sup>nd</sup> smallest product is 8.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
<strong>Output:</strong> 0
<strong>Explanation:</strong> The 6 smallest products are:
- nums1[0] * nums2[1] = (-4) * 4 = -16
- nums1[0] * nums2[0] = (-4) * 2 = -8
- nums1[1] * nums2[1] = (-2) * 4 = -8
- nums1[1] * nums2[0] = (-2) * 2 = -4
- nums1[2] * nums2[0] = 0 * 2 = 0
- nums1[2] * nums2[1] = 0 * 4 = 0
The 6<sup>th</sup> smallest product is 0.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
<strong>Output:</strong> -6
<strong>Explanation:</strong> The 3 smallest products are:
- nums1[0] * nums2[4] = (-2) * 5 = -10
- nums1[0] * nums2[3] = (-2) * 4 = -8
- nums1[4] * nums2[0] = 2 * (-3) = -6
The 3<sup>rd</sup> smallest product is -6.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums1.length, nums2.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-10<sup>5</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= k &lt;= nums1.length * nums2.length</code></li>
<li><code>nums1</code> and <code>nums2</code> are sorted.</li>
</ul>
</div></div><br><br></html> `;