module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">779. Global and Local Inversions</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> of length <code>n</code> which represents a permutation of all the integers in the range <code>[0, n - 1]</code>.</p>
<p>The number of <strong>global inversions</strong> is the number of the different pairs <code>(i, j)</code> where:</p>
<ul>
<li><code>0 &lt;= i &lt; j &lt; n</code></li>
<li><code>nums[i] &gt; nums[j]</code></li>
</ul>
<p>The number of <strong>local inversions</strong> is the number of indices <code>i</code> where:</p>
<ul>
<li><code>0 &lt;= i &lt; n - 1</code></li>
<li><code>nums[i] &gt; nums[i + 1]</code></li>
</ul>
<p>Return <code>true</code> <em>if the number of <strong>global inversions</strong> is equal to the number of <strong>local inversions</strong></em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,0,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> There is 1 global inversion and 1 local inversion.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,0]
<strong>Output:</strong> false
<strong>Explanation:</strong> There are 2 global inversions and 1 local inversion.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= nums[i] &lt; n</code></li>
<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>
<li><code>nums</code> is a permutation of all the numbers in the range <code>[0, n - 1]</code>.</li>
</ul>
</div></div><br><br></html> `;