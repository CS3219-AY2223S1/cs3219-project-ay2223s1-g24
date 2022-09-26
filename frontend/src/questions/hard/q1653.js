module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">1653. Maximum Performance of a Team</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integers <code>n</code> and <code>k</code> and two integer arrays <code>speed</code> and <code>efficiency</code> both of length <code>n</code>. There are <code>n</code> engineers numbered from <code>1</code> to <code>n</code>. <code>speed[i]</code> and <code>efficiency[i]</code> represent the speed and efficiency of the <code>i<sup>th</sup></code> engineer respectively.</p>
<p>Choose <strong>at most</strong> <code>k</code> different engineers out of the <code>n</code> engineers to form a team with the maximum <strong>performance</strong>.</p>
<p>The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.</p>
<p>Return <em>the maximum performance of this team</em>. Since the answer can be a huge number, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
<strong>Output:</strong> 60
<strong>Explanation:</strong> 
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
<strong>Output:</strong> 68
<strong>Explanation:
</strong>This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
<strong>Output:</strong> 72
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>speed.length == n</code></li>
<li><code>efficiency.length == n</code></li>
<li><code>1 &lt;= speed[i] &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= efficiency[i] &lt;= 10<sup>8</sup></code></li>
</ul>
</div></div><br><br></html> `;