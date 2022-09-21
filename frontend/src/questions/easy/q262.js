module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************************<div id="title">262. Minimum Value to Get Positive Step by Step Sum</div>
****************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>nums</code>, you start with an initial <strong>positive</strong> value <em>startValue</em><em>.</em></p>
<p>In each iteration, you calculate the step by step sum of <em>startValue</em> plus elements in <code>nums</code> (from left to right).</p>
<p>Return the minimum <strong>positive</strong> value of <em>startValue</em> such that the step by step sum is never less than 1.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [-3,2,-3,4,2]
<strong>Output:</strong> 5
<strong>Explanation: </strong>If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
<strong>step by step sum</strong>
<strong>startValue = 4 | startValue = 5 | nums</strong>
  (4 <strong>-3</strong> ) = 1  | (5 <strong>-3</strong> ) = 2    |  -3
  (1 <strong>+2</strong> ) = 3  | (2 <strong>+2</strong> ) = 4    |   2
  (3 <strong>-3</strong> ) = 0  | (4 <strong>-3</strong> ) = 1    |  -3
  (0 <strong>+4</strong> ) = 4  | (1 <strong>+4</strong> ) = 5    |   4
  (4 <strong>+2</strong> ) = 6  | (5 <strong>+2</strong> ) = 7    |   2
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Minimum start value should be positive. 
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,-2,-3]
<strong>Output:</strong> 5
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 100</code></li>
<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;