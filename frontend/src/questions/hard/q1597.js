module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">1597. Minimum Number of K Consecutive Bit Flips</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a binary array <code>nums</code> and an integer <code>k</code>.</p>
<p>A <strong>k-bit flip</strong> is choosing a <strong>subarray</strong> of length <code>k</code> from <code>nums</code> and simultaneously changing every <code>0</code> in the subarray to <code>1</code>, and every <code>1</code> in the subarray to <code>0</code>.</p>
<p>Return <em>the minimum number of <strong>k-bit flips</strong> required so that there is no </em><code>0</code><em> in the array</em>. If it is not possible, return <code>-1</code>.</p>
<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0], k = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong> Flip nums[0], then flip nums[2].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,0], k = 2
<strong>Output:</strong> -1
<strong>Explanation:</strong> No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [0,0,0,1,0,1,1,0], k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0]
Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0]
Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= k &lt;= nums.length</code></li>
</ul>
</div></div><br><br></html> `;