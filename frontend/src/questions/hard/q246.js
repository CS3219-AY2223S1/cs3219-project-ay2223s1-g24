module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">1676. Max Value of Equation</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>points</code> containing the coordinates of points on a 2D plane, sorted by the x-values, where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> such that <code>x<sub>i</sub> &lt; x<sub>j</sub></code> for all <code>1 &lt;= i &lt; j &lt;= points.length</code>. You are also given an integer <code>k</code>.</p>
<p>Return <em>the maximum value of the equation </em><code>y<sub>i</sub> + y<sub>j</sub> + |x<sub>i</sub> - x<sub>j</sub>|</code> where <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code> and <code>1 &lt;= i &lt; j &lt;= points.length</code>.</p>
<p>It is guaranteed that there exists at least one pair of points that satisfy the constraint <code>|x<sub>i</sub> - x<sub>j</sub>| &lt;= k</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
<strong>Output:</strong> 4
<strong>Explanation:</strong> The first two points satisfy the condition |x<sub>i</sub> - x<sub>j</sub>| &lt;= 1 and if we calculate the equation we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1.
No other pairs satisfy the condition, so we return the max of 4 and 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> points = [[0,0],[3,0],[9,2]], k = 3
<strong>Output:</strong> 3
<strong>Explanation: </strong>Only the first two points have an absolute difference of 3 or less in the x-values, and give the value of 0 + 0 + |0 - 3| = 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= points.length &lt;= 10<sup>5</sup></code></li>
<li><code>points[i].length == 2</code></li>
<li><code>-10<sup>8</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>8</sup></code></li>
<li><code>0 &lt;= k &lt;= 2 * 10<sup>8</sup></code></li>
<li><code>x<sub>i</sub> &lt; x<sub>j</sub></code> for all <code>1 &lt;= i &lt; j &lt;= points.length</code></li>
<li><code>x<sub>i</sub></code> form a strictly increasing sequence.</li>
</ul>
</div></div><br><br></html> `;