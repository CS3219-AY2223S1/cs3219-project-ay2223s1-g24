module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">1604. Escape a Large Maze</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are <code>(x, y)</code>.</p>
<p>We start at the <code>source = [s<sub>x</sub>, s<sub>y</sub>]</code> square and want to reach the <code>target = [t<sub>x</sub>, t<sub>y</sub>]</code> square. There is also an array of <code>blocked</code> squares, where each <code>blocked[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a blocked square with coordinates <code>(x<sub>i</sub>, y<sub>i</sub>)</code>.</p>
<p>Each move, we can walk one square north, east, south, or west if the square is <strong>not</strong> in the array of <code>blocked</code> squares. We are also not allowed to walk outside of the grid.</p>
<p>Return <code>true</code><em> if and only if it is possible to reach the </em><code>target</code><em> square from the </em><code>source</code><em> square through a sequence of valid moves</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
<strong>Output:</strong> false
<strong>Explanation:</strong> The target square is inaccessible starting from the source square because we cannot move.
We cannot move north or east because those squares are blocked.
We cannot move south or west because we cannot go outside of the grid.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> blocked = [], source = [0,0], target = [999999,999999]
<strong>Output:</strong> true
<strong>Explanation:</strong> Because there are no blocked cells, it is possible to reach the target square.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= blocked.length &lt;= 200</code></li>
<li><code>blocked[i].length == 2</code></li>
<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt; 10<sup>6</sup></code></li>
<li><code>source.length == target.length == 2</code></li>
<li><code>0 &lt;= s<sub>x</sub>, s<sub>y</sub>, t<sub>x</sub>, t<sub>y</sub> &lt; 10<sup>6</sup></code></li>
<li><code>source != target</code></li>
<li>It is guaranteed that <code>source</code> and <code>target</code> are not blocked.</li>
</ul>
</div></div><br><br></html> `;