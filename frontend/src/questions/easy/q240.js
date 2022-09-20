module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">240. Decompress Run-Length Encoded List</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>We are given a list <code>nums</code> of integers representing a list compressed with run-length encoding.</p>
<p>Consider each adjacent pair of elements <code>[freq, val] = [nums[2*i], nums[2*i+1]]</code> (with <code>i &gt;= 0</code>).  For each such pair, there are <code>freq</code> elements with value <code>val</code> concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.</p>
<p>Return the decompressed list.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> [2,4,4,4]
<strong>Explanation:</strong> The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,2,3]
<strong>Output:</strong> [1,3,3]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= nums.length &lt;= 100</code></li>
<li><code>nums.length % 2 == 0</code></li>
<li><code><font face="monospace">1 &lt;= nums[i] &lt;= 100</font></code></li>
</ul>
</div></div><br><br></html> `;