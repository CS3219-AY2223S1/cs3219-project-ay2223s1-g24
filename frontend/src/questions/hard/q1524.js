module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************<div id="title">1524. Maximum Sum of 3 Non-Overlapping Subarrays</div>
***********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, find three non-overlapping subarrays of length <code>k</code> with maximum sum and return them.</p>
<p>Return the result as a list of indices representing the starting position of each interval (<strong>0-indexed</strong>). If there are multiple answers, return the lexicographically smallest one.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,1,2,6,7,5,1], k = 2
<strong>Output:</strong> [0,3,5]
<strong>Explanation:</strong> Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,1,2,1,2,1,2,1], k = 2
<strong>Output:</strong> [0,2,4]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= nums[i] &lt; 2<sup>16</sup></code></li>
<li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li>
</ul>
</div></div><br><br></html> `;