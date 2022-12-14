module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">550. Find Peak Element</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>A peak element is an element that is strictly greater than its neighbors.</p>
<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.</p>
<p>You may imagine that <code>nums[-1] = nums[n] = -∞</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.</p>
<p>You must write an algorithm that runs in <code>O(log n)</code> time.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 3 is a peak element and your function should return the index number 2.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,1,3,5,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
<li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</li>
</ul>
</div></div><br><br></html> `;