module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">1707. Distribute Repeating Integers</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of <code>n</code> integers, <code>nums</code>, where there are at most <code>50</code> unique values in the array. You are also given an array of <code>m</code> customer order quantities, <code>quantity</code>, where <code>quantity[i]</code> is the amount of integers the <code>i<sup>th</sup></code> customer ordered. Determine if it is possible to distribute <code>nums</code> such that:</p>
<ul>
<li>The <code>i<sup>th</sup></code> customer gets <strong>exactly</strong> <code>quantity[i]</code> integers,</li>
<li>The integers the <code>i<sup>th</sup></code> customer gets are <strong>all equal</strong>, and</li>
<li>Every customer is satisfied.</li>
</ul>
<p>Return <code>true</code><em> if it is possible to distribute </em><code>nums</code><em> according to the above conditions</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4], quantity = [2]
<strong>Output:</strong> false
<strong>Explanation:</strong> The 0<sup>th</sup> customer cannot be given two different integers.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,3], quantity = [2]
<strong>Output:</strong> true
<strong>Explanation:</strong> The 0<sup>th</sup> customer is given [3,3]. The integers [1,2] are not used.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,2,2], quantity = [2,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> The 0<sup>th</sup> customer is given [1,1], and the 1st customer is given [2,2].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
<li><code>m == quantity.length</code></li>
<li><code>1 &lt;= m &lt;= 10</code></li>
<li><code>1 &lt;= quantity[i] &lt;= 10<sup>5</sup></code></li>
<li>There are at most <code>50</code> unique values in <code>nums</code>.</li>
</ul>
</div></div><br><br></html> `;