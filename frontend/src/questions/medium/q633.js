module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">633. Rotate Function</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> of length <code>n</code>.</p>
<p>Assume <code>arr<sub>k</sub></code> to be an array obtained by rotating <code>nums</code> by <code>k</code> positions clock-wise. We define the <strong>rotation function</strong> <code>F</code> on <code>nums</code> as follow:</p>
<ul>
<li><code>F(k) = 0 * arr<sub>k</sub>[0] + 1 * arr<sub>k</sub>[1] + ... + (n - 1) * arr<sub>k</sub>[n - 1].</code></li>
</ul>
<p>Return <em>the maximum value of</em> <code>F(0), F(1), ..., F(n-1)</code>.</p>
<p>The test cases are generated so that the answer fits in a <strong>32-bit</strong> integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,3,2,6]
<strong>Output:</strong> 26
<strong>Explanation:</strong>
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [100]
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;