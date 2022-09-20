module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">736. Split Array into Consecutive Subsequences</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> that is <strong>sorted in non-decreasing order</strong>.</p>
<p>Determine if it is possible to split <code>nums</code> into <strong>one or more subsequences</strong> such that <strong>both</strong> of the following conditions are true:</p>
<ul>
<li>Each subsequence is a <strong>consecutive increasing sequence</strong> (i.e. each integer is <strong>exactly one</strong> more than the previous integer).</li>
<li>All subsequences have a length of <code>3</code><strong> or more</strong>.</li>
</ul>
<p>Return <code>true</code><em> if you can split </em><code>nums</code><em> according to the above conditions, or </em><code>false</code><em> otherwise</em>.</p>
<p>A <strong>subsequence</strong> of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., <code>[1,3,5]</code> is a subsequence of <code>[<u>1</u>,2,<u>3</u>,4,<u>5</u>]</code> while <code>[1,3,2]</code> is not).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,3,4,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> nums can be split into the following subsequences:
[<strong><u>1</u></strong>,<strong><u>2</u></strong>,<strong><u>3</u></strong>,3,4,5] --&gt; 1, 2, 3
[1,2,3,<strong><u>3</u></strong>,<strong><u>4</u></strong>,<strong><u>5</u></strong>] --&gt; 3, 4, 5
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,3,4,4,5,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> nums can be split into the following subsequences:
[<strong><u>1</u></strong>,<strong><u>2</u></strong>,<strong><u>3</u></strong>,3,<strong><u>4</u></strong>,4,<strong><u>5</u></strong>,5] --&gt; 1, 2, 3, 4, 5
[1,2,3,<strong><u>3</u></strong>,4,<strong><u>4</u></strong>,5,<strong><u>5</u></strong>] --&gt; 3, 4, 5
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,4,5]
<strong>Output:</strong> false
<strong>Explanation:</strong> It is impossible to split nums into consecutive increasing subsequences of length 3 or more.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>
</div></div><br><br></html> `;