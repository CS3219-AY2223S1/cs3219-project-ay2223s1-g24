module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">231. Minimum Time Visiting All Points</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>On a 2D plane, there are <code>n</code> points with integer coordinates <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code>. Return <em>the <strong>minimum time</strong> in seconds to visit all the points in the order given by </em><code>points</code>.</p>
<p>You can move according to these rules:</p>
<ul>
<li>In <code>1</code> second, you can either:

	<ul>
<li>move vertically by one unit,</li>
<li>move horizontally by one unit, or</li>
<li>move diagonally <code>sqrt(2)</code> units (in other words, move one unit vertically then one unit horizontally in <code>1</code> second).</li>
</ul>
</li>
<li>You have to visit the points in the same order as they appear in the array.</li>
<li>You are allowed to pass through points that appear later in the order, but these do not count as visits.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/14/1626_example_1.PNG" style="width: 500px; height: 428px;"/>
<pre><strong>Input:</strong> points = [[1,1],[3,4],[-1,0]]
<strong>Output:</strong> 7
<strong>Explanation: </strong>One optimal path is <strong>[1,1]</strong> -&gt; [2,2] -&gt; [3,3] -&gt; <strong>[3,4] </strong>-&gt; [2,3] -&gt; [1,2] -&gt; [0,1] -&gt; <strong>[-1,0]</strong>   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> points = [[3,2],[-2,2]]
<strong>Output:</strong> 5
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>points.length == n</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>points[i].length == 2</code></li>
<li><code>-1000 &lt;= points[i][0], points[i][1] &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;