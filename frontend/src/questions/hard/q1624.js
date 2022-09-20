module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">1624. Maximum Equal Frequency</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> of positive integers, return the longest possible length of an array prefix of <code>nums</code>, such that it is possible to remove <strong>exactly one</strong> element from this prefix so that every number that has appeared in it will have the same number of occurrences.</p>
<p>If after removing one element there are no remaining elements, it's still considered that every appeared number has the same number of ocurrences (0).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1,1,5,3,3,5]
<strong>Output:</strong> 7
<strong>Explanation:</strong> For the subarray [2,2,1,1,5,3,3] of length 7, if we remove nums[4] = 5, we will get [2,2,1,1,3,3], so that each number will appear exactly twice.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
<strong>Output:</strong> 13
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;