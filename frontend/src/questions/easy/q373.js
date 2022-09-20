module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">373. Count Special Quadruplets</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, return <em>the number of <strong>distinct</strong> quadruplets</em> <code>(a, b, c, d)</code> <em>such that:</em></p>
<ul>
<li><code>nums[a] + nums[b] + nums[c] == nums[d]</code>, and</li>
<li><code>a &lt; b &lt; c &lt; d</code></li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,6]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,3,6,4,5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no such quadruplets in [3,3,6,4,5].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,3,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The 4 quadruplets that satisfy the requirement are:
- (0, 1, 2, 3): 1 + 1 + 1 == 3
- (0, 1, 3, 4): 1 + 1 + 3 == 5
- (0, 2, 3, 4): 1 + 1 + 3 == 5
- (1, 2, 3, 4): 1 + 1 + 3 == 5
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>4 &lt;= nums.length &lt;= 50</code></li>
<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;