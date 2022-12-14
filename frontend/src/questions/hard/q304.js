module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************<div id="title">1734. Maximize Score After N Operations</div>
***************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given <code>nums</code>, an array of positive integers of size <code>2 * n</code>. You must perform <code>n</code> operations on this array.</p>
<p>In the <code>i<sup>th</sup></code> operation <strong>(1-indexed)</strong>, you will:</p>
<ul>
<li>Choose two elements, <code>x</code> and <code>y</code>.</li>
<li>Receive a score of <code>i * gcd(x, y)</code>.</li>
<li>Remove <code>x</code> and <code>y</code> from <code>nums</code>.</li>
</ul>
<p>Return <em>the maximum score you can receive after performing </em><code>n</code><em> operations.</em></p>
<p>The function <code>gcd(x, y)</code> is the greatest common divisor of <code>x</code> and <code>y</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The optimal choice of operations is:
(1 * gcd(1, 2)) = 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,4,6,8]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The optimal choice of operations is:
(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,5,6]
<strong>Output:</strong> 14
<strong>Explanation:</strong> The optimal choice of operations is:
(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 7</code></li>
<li><code>nums.length == 2 * n</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
</ul>
</div></div><br><br></html> `;