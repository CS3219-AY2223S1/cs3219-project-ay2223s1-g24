module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">433. Min Max Game</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> whose length is a power of <code>2</code>.</p>
<p>Apply the following algorithm on <code>nums</code>:</p>
<ol>
<li>Let <code>n</code> be the length of <code>nums</code>. If <code>n == 1</code>, <strong>end</strong> the process. Otherwise, <strong>create</strong> a new <strong>0-indexed</strong> integer array <code>newNums</code> of length <code>n / 2</code>.</li>
<li>For every <strong>even</strong> index <code>i</code> where <code>0 &lt;= i &lt; n / 2</code>, <strong>assign</strong> the value of <code>newNums[i]</code> as <code>min(nums[2 * i], nums[2 * i + 1])</code>.</li>
<li>For every <strong>odd</strong> index <code>i</code> where <code>0 &lt;= i &lt; n / 2</code>, <strong>assign</strong> the value of <code>newNums[i]</code> as <code>max(nums[2 * i], nums[2 * i + 1])</code>.</li>
<li><strong>Replace</strong> the array <code>nums</code> with <code>newNums</code>.</li>
<li><strong>Repeat</strong> the entire process starting from step 1.</li>
</ol>
<p>Return <em>the last number that remains in </em><code>nums</code><em> after applying the algorithm.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/04/13/example1drawio-1.png" style="width: 500px; height: 240px;"/>
<pre><strong>Input:</strong> nums = [1,3,5,2,4,8,2,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The following arrays are the results of applying the algorithm repeatedly.
First: nums = [1,5,4,2]
Second: nums = [1,4]
Third: nums = [1]
1 is the last remaining number, so we return 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 is already the last remaining number, so we return 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1024</code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
<li><code>nums.length</code> is a power of <code>2</code>.</li>
</ul>
</div></div><br><br></html> `;