module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">442. Maximum Number of Pairs in Array</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. In one operation, you may do the following:</p>
<ul>
<li>Choose <strong>two</strong> integers in <code>nums</code> that are <strong>equal</strong>.</li>
<li>Remove both integers from <code>nums</code>, forming a <strong>pair</strong>.</li>
</ul>
<p>The operation is done on <code>nums</code> as many times as possible.</p>
<p>Return <em>a <strong>0-indexed</strong> integer array </em><code>answer</code><em> of size </em><code>2</code><em> where </em><code>answer[0]</code><em> is the number of pairs that are formed and </em><code>answer[1]</code><em> is the number of leftover integers in </em><code>nums</code><em> after doing the operation as many times as possible</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,3,2,1,3,2,2]
<strong>Output:</strong> [3,1]
<strong>Explanation:</strong>
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1]
<strong>Output:</strong> [1,0]
<strong>Explanation:</strong> Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> No pairs can be formed, and there is 1 number leftover in nums.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 100</code></li>
<li><code>0 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;