module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">705. Optimal Division</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code>. The adjacent integers in <code>nums</code> will perform the float division.</p>
<ul>
<li>For example, for <code>nums = [2,3,4]</code>, we will evaluate the expression <code>"2/3/4"</code>.</li>
</ul>
<p>However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.</p>
<p>Return <em>the corresponding expression that has the maximum value in string format</em>.</p>
<p><strong>Note:</strong> your expression should not contain redundant parenthesis.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1000,100,10,2]
<strong>Output:</strong> "1000/(100/10/2)"
<strong>Explanation:</strong> 1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/(<strong>(</strong>100/10<strong>)</strong>/2)" are redundant since they do not influence the operation priority.
So you should return "1000/(100/10/2)".
Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,3,4]
<strong>Output:</strong> "2/(3/4)"
<strong>Explanation:</strong> (2/(3/4)) = 8/3 = 2.667
It can be shown that after trying all possibilities, we cannot get an expression with evaluation greater than 2.667
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10</code></li>
<li><code>2 &lt;= nums[i] &lt;= 1000</code></li>
<li>There is only one optimal division for the given input.</li>
</ul>
</div></div><br><br></html> `;