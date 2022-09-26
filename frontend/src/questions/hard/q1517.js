module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">1517. Smallest Range Covering Elements from K Lists</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You have <code>k</code> lists of sorted integers in <strong>non-decreasing order</strong>. Find the <b>smallest</b> range that includes at least one number from each of the <code>k</code> lists.</p>
<p>We define the range <code>[a, b]</code> is smaller than range <code>[c, d]</code> if <code>b - a &lt; d - c</code> <strong>or</strong> <code>a &lt; c</code> if <code>b - a == d - c</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
<strong>Output:</strong> [20,24]
<strong>Explanation: </strong>
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]
<strong>Output:</strong> [1,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>nums.length == k</code></li>
<li><code>1 &lt;= k &lt;= 3500</code></li>
<li><code>1 &lt;= nums[i].length &lt;= 50</code></li>
<li><code>-10<sup>5</sup> &lt;= nums[i][j] &lt;= 10<sup>5</sup></code></li>
<li><code>nums[i]</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>
</div></div><br><br></html> `;