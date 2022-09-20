module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">658. Number of Boomerangs</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given <code>n</code> <code>points</code> in the plane that are all <strong>distinct</strong>, where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code>. A <strong>boomerang</strong> is a tuple of points <code>(i, j, k)</code> such that the distance between <code>i</code> and <code>j</code> equals the distance between <code>i</code> and <code>k</code> <strong>(the order of the tuple matters)</strong>.</p>
<p>Return <em>the number of boomerangs</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> points = [[0,0],[1,0],[2,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> points = [[1,1],[2,2],[3,3]]
<strong>Output:</strong> 2
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> points = [[1,1]]
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == points.length</code></li>
<li><code>1 &lt;= n &lt;= 500</code></li>
<li><code>points[i].length == 2</code></li>
<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
<li>All the points are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;