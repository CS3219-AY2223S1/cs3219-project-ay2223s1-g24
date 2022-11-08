module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">1848. Find the K-Sum of an Array</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> and a <strong>positive</strong> integer <code>k</code>. You can choose any <strong>subsequence</strong> of the array and sum all of its elements together.</p>
<p>We define the <strong>K-Sum</strong> of the array as the <code>k<sup>th</sup></code> <strong>largest</strong> subsequence sum that can be obtained (<strong>not</strong> necessarily distinct).</p>
<p>Return <em>the K-Sum of the array</em>.</p>
<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>
<p><strong>Note</strong> that the empty subsequence is considered to have a sum of <code>0</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,4,-2], k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> All the possible subsequence sums that we can obtain are the following sorted in decreasing order:
- 6, 4, 4, 2, <u>2</u>, 0, 0, -2.
The 5-Sum of the array is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,-2,3,4,-10,12], k = 16
<strong>Output:</strong> 10
<strong>Explanation:</strong> The 16-Sum of the array is 10.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
<li><code>1 &lt;= k &lt;= min(2000, 2<sup>n</sup>)</code></li>
</ul>
</div></div><br><br></html> `;