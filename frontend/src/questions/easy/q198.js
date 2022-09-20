module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">198. Maximize Sum Of Array After K Negations</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, modify the array in the following way:</p>
<ul>
<li>choose an index <code>i</code> and replace <code>nums[i]</code> with <code>-nums[i]</code>.</li>
</ul>
<p>You should apply this process exactly <code>k</code> times. You may choose the same index <code>i</code> multiple times.</p>
<p>Return <em>the largest possible sum of the array after modifying it in this way</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,2,3], k = 1
<strong>Output:</strong> 5
<strong>Explanation:</strong> Choose index 1 and nums becomes [4,-2,3].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,-1,0,2], k = 3
<strong>Output:</strong> 6
<strong>Explanation:</strong> Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [2,-3,-1,5,-4], k = 2
<strong>Output:</strong> 13
<strong>Explanation:</strong> Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;