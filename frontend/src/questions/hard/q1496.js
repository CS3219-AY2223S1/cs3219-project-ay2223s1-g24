module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************<div id="title">1496. Arithmetic Slices II - Subsequence</div>
***************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, return <em>the number of all the <strong>arithmetic subsequences</strong> of</em> <code>nums</code>.</p>
<p>A sequence of numbers is called arithmetic if it consists of <strong>at least three elements</strong> and if the difference between any two consecutive elements is the same.</p>
<ul>
<li>For example, <code>[1, 3, 5, 7, 9]</code>, <code>[7, 7, 7, 7]</code>, and <code>[3, -1, -5, -9]</code> are arithmetic sequences.</li>
<li>For example, <code>[1, 1, 2, 5, 7]</code> is not an arithmetic sequence.</li>
</ul>
<p>A <strong>subsequence</strong> of an array is a sequence that can be formed by removing some elements (possibly none) of the array.</p>
<ul>
<li>For example, <code>[2,5,10]</code> is a subsequence of <code>[1,2,1,<strong><u>2</u></strong>,4,1,<u><strong>5</strong></u>,<u><strong>10</strong></u>]</code>.</li>
</ul>
<p>The test cases are generated so that the answer fits in <strong>32-bit</strong> integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,4,6,8,10]
<strong>Output:</strong> 7
<strong>Explanation:</strong> All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [7,7,7,7,7]
<strong>Output:</strong> 16
<strong>Explanation:</strong> Any subsequence of this array is arithmetic.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1  &lt;= nums.length &lt;= 1000</code></li>
<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;