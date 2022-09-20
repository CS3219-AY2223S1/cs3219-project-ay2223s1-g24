module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">691. Continuous Subarray Sum</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if </em><code>nums</code><em> has a continuous subarray of size <strong>at least two</strong> whose elements sum up to a multiple of</em> <code>k</code><em>, or </em><code>false</code><em> otherwise</em>.</p>
<p>An integer <code>x</code> is a multiple of <code>k</code> if there exists an integer <code>n</code> such that <code>x = n * k</code>. <code>0</code> is <strong>always</strong> a multiple of <code>k</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [23,<u>2,4</u>,6,7], k = 6
<strong>Output:</strong> true
<strong>Explanation:</strong> [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [<u>23,2,6,4,7</u>], k = 6
<strong>Output:</strong> true
<strong>Explanation:</strong> [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [23,2,6,4,7], k = 13
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
<li><code>0 &lt;= sum(nums[i]) &lt;= 2<sup>31</sup> - 1</code></li>
<li><code>1 &lt;= k &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;