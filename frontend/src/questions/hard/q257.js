module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************<div id="title">1687. Minimum Number of Days to Eat N Oranges</div>
*********************************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> oranges in the kitchen and you decided to eat some of these oranges every day as follows:</p>
<ul>
<li>Eat one orange.</li>
<li>If the number of remaining oranges <code>n</code> is divisible by <code>2</code> then you can eat <code>n / 2</code> oranges.</li>
<li>If the number of remaining oranges <code>n</code> is divisible by <code>3</code> then you can eat <code>2 * (n / 3)</code> oranges.</li>
</ul>
<p>You can only choose one of the actions per day.</p>
<p>Given the integer <code>n</code>, return <em>the minimum number of days to eat</em> <code>n</code> <em>oranges</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong> You have 10 oranges.
Day 1: Eat 1 orange,  10 - 1 = 9.  
Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. 
Day 4: Eat the last orange  1 - 1  = 0.
You need at least 4 days to eat the 10 oranges.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 6
<strong>Output:</strong> 3
<strong>Explanation:</strong> You have 6 oranges.
Day 1: Eat 3 oranges, 6 - 6/2 = 6 - 3 = 3. (Since 6 is divisible by 2).
Day 2: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. (Since 3 is divisible by 3)
Day 3: Eat the last orange  1 - 1  = 0.
You need at least 3 days to eat the 6 oranges.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2 * 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;