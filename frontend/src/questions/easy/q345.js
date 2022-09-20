module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">345. Minimum Distance to the Target Element</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> <strong>(0-indexed)</strong> and two integers <code>target</code> and <code>start</code>, find an index <code>i</code> such that <code>nums[i] == target</code> and <code>abs(i - start)</code> is <strong>minimized</strong>. Note that <code>abs(x)</code> is the absolute value of <code>x</code>.</p>
<p>Return <code>abs(i - start)</code>.</p>
<p>It is <strong>guaranteed</strong> that <code>target</code> exists in <code>nums</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,5], target = 5, start = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1], target = 1, start = 0
<strong>Output:</strong> 0
<strong>Explanation:</strong> nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
<strong>Output:</strong> 0
<strong>Explanation:</strong> Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= start &lt; nums.length</code></li>
<li><code>target</code> is in <code>nums</code>.</li>
</ul>
</div></div><br><br></html> `;