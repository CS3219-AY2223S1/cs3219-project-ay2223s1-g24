module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************<div id="title">1852. Longest Increasing Subsequence II</div>
***************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p>
<p>Find the longest subsequence of <code>nums</code> that meets the following requirements:</p>
<ul>
<li>The subsequence is <strong>strictly increasing</strong> and</li>
<li>The difference between adjacent elements in the subsequence is <strong>at most</strong> <code>k</code>.</li>
</ul>
<p>Return<em> the length of the <strong>longest</strong> <strong>subsequence</strong> that meets the requirements.</em></p>
<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,2,1,4,3,4,5,8,15], k = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong>
The longest subsequence that meets the requirements is [1,3,4,5,8].
The subsequence has a length of 5, so we return 5.
Note that the subsequence [1,3,4,5,8,15] does not meet the requirements because 15 - 8 = 7 is larger than 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [7,4,5,1,8,12,4,7], k = 5
<strong>Output:</strong> 4
<strong>Explanation:</strong>
The longest subsequence that meets the requirements is [4,5,8,12].
The subsequence has a length of 4, so we return 4.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,5], k = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong>
The longest subsequence that meets the requirements is [1].
The subsequence has a length of 1, so we return 1.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i], k &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;