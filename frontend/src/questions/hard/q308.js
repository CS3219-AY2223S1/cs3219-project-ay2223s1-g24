module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************<div id="title">1738. Number of Different Subsequences GCDs</div>
*******************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>nums</code> that consists of positive integers.</p>
<p>The <strong>GCD</strong> of a sequence of numbers is defined as the greatest integer that divides <strong>all</strong> the numbers in the sequence evenly.</p>
<ul>
<li>For example, the GCD of the sequence <code>[4,6,16]</code> is <code>2</code>.</li>
</ul>
<p>A <strong>subsequence</strong> of an array is a sequence that can be formed by removing some elements (possibly none) of the array.</p>
<ul>
<li>For example, <code>[2,5,10]</code> is a subsequence of <code>[1,2,1,<strong><u>2</u></strong>,4,1,<u><strong>5</strong></u>,<u><strong>10</strong></u>]</code>.</li>
</ul>
<p>Return <em>the <strong>number</strong> of <strong>different</strong> GCDs among all <strong>non-empty</strong> subsequences of</em> <code>nums</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/17/image-1.png" style="width: 149px; height: 309px;"/>
<pre><strong>Input:</strong> nums = [6,10,3]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The figure shows all the non-empty subsequences and their GCDs.
The different GCDs are 6, 10, 3, 2, and 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [5,15,40,5,6]
<strong>Output:</strong> 7
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 2 * 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;