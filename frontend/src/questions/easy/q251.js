module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************************<div id="title">251. How Many Numbers Are Smaller Than the Current Number</div>
**********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the array <code>nums</code>, for each <code>nums[i]</code> find out how many numbers in the array are smaller than it. That is, for each <code>nums[i]</code> you have to count the number of valid <code>j's</code> such that <code>j != i</code> <strong>and</strong> <code>nums[j] &lt; nums[i]</code>.</p>
<p>Return the answer in an array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [8,1,2,2,3]
<strong>Output:</strong> [4,0,1,1,3]
<strong>Explanation:</strong> 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [6,5,4,8]
<strong>Output:</strong> [2,1,0,3]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [7,7,7,7]
<strong>Output:</strong> [0,0,0,0]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= nums.length &lt;= 500</code></li>
<li><code>0 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;