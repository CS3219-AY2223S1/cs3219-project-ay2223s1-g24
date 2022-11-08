module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************************<div id="title">1763. Count Number of Special Subsequences</div>
******************************************<div class="content__u3I1 question-content__JfgR"><div><p>A sequence is <strong>special</strong> if it consists of a <strong>positive</strong> number of <code>0</code>s, followed by a <strong>positive</strong> number of <code>1</code>s, then a <strong>positive</strong> number of <code>2</code>s.</p>
<ul>
<li>For example, <code>[0,1,2]</code> and <code>[0,0,1,1,1,2]</code> are special.</li>
<li>In contrast, <code>[2,1,0]</code>, <code>[1]</code>, and <code>[0,1,2,0]</code> are not special.</li>
</ul>
<p>Given an array <code>nums</code> (consisting of <strong>only</strong> integers <code>0</code>, <code>1</code>, and <code>2</code>), return<em> the <strong>number of different subsequences</strong> that are special</em>. Since the answer may be very large, <strong>return it modulo </strong><code>10<sup>9</sup> + 7</code>.</p>
<p>A <strong>subsequence</strong> of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. Two subsequences are <strong>different</strong> if the <strong>set of indices</strong> chosen are different.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,2,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The special subsequences are bolded [<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>,2], [<strong><u>0</u></strong>,<strong><u>1</u></strong>,2,<strong><u>2</u></strong>], and [<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>,<strong><u>2</u></strong>].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,0,0]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no special subsequences in [2,2,0,0].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,2,0,1,2]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The special subsequences are bolded:
- [<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>,0,1,2]
- [<strong><u>0</u></strong>,<strong><u>1</u></strong>,2,0,1,<strong><u>2</u></strong>]
- [<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>,0,1,<strong><u>2</u></strong>]
- [<strong><u>0</u></strong>,<strong><u>1</u></strong>,2,0,<strong><u>1</u></strong>,<strong><u>2</u></strong>]
- [<strong><u>0</u></strong>,1,2,<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>]
- [<strong><u>0</u></strong>,1,2,0,<strong><u>1</u></strong>,<strong><u>2</u></strong>]
- [0,1,2,<strong><u>0</u></strong>,<strong><u>1</u></strong>,<strong><u>2</u></strong>]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= nums[i] &lt;= 2</code></li>
</ul>
</div></div><br><br></html> `;