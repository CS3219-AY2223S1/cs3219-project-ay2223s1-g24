module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">1512. Erect the Fence</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>trees</code> where <code>trees[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents the location of a tree in the garden.</p>
<p>You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well fenced only if <strong>all the trees are enclosed</strong>.</p>
<p>Return <em>the coordinates of trees that are exactly located on the fence perimeter</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/erect2-plane.jpg" style="width: 509px; height: 500px;"/>
<pre><strong>Input:</strong> points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
<strong>Output:</strong> [[1,1],[2,0],[3,3],[2,4],[4,2]]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/erect1-plane.jpg" style="width: 509px; height: 500px;"/>
<pre><strong>Input:</strong> points = [[1,2],[2,2],[4,2]]
<strong>Output:</strong> [[4,2],[2,2],[1,2]]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= points.length &lt;= 3000</code></li>
<li><code>points[i].length == 2</code></li>
<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>
<li>All the given points are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;