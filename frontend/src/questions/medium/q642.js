module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">642. Pacific Atlantic Water Flow</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>There is an <code>m x n</code> rectangular island that borders both the <strong>Pacific Ocean</strong> and <strong>Atlantic Ocean</strong>. The <strong>Pacific Ocean</strong> touches the island's left and top edges, and the <strong>Atlantic Ocean</strong> touches the island's right and bottom edges.</p>
<p>The island is partitioned into a grid of square cells. You are given an <code>m x n</code> integer matrix <code>heights</code> where <code>heights[r][c]</code> represents the <strong>height above sea level</strong> of the cell at coordinate <code>(r, c)</code>.</p>
<p>The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is <strong>less than or equal to</strong> the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.</p>
<p>Return <em>a <strong>2D list</strong> of grid coordinates </em><code>result</code><em> where </em><code>result[i] = [r<sub>i</sub>, c<sub>i</sub>]</code><em> denotes that rain water can flow from cell </em><code>(r<sub>i</sub>, c<sub>i</sub>)</code><em> to <strong>both</strong> the Pacific and Atlantic oceans</em>.</p>
<p> </p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg" style="width: 400px; height: 400px;"/>
<pre><strong>Input:</strong> heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
<strong>Output:</strong> [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
<strong>Explanation:</strong> The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -&gt; Pacific Ocean 
       [0,4] -&gt; Atlantic Ocean
[1,3]: [1,3] -&gt; [0,3] -&gt; Pacific Ocean 
       [1,3] -&gt; [1,4] -&gt; Atlantic Ocean
[1,4]: [1,4] -&gt; [1,3] -&gt; [0,3] -&gt; Pacific Ocean 
       [1,4] -&gt; Atlantic Ocean
[2,2]: [2,2] -&gt; [1,2] -&gt; [0,2] -&gt; Pacific Ocean 
       [2,2] -&gt; [2,3] -&gt; [2,4] -&gt; Atlantic Ocean
[3,0]: [3,0] -&gt; Pacific Ocean 
       [3,0] -&gt; [4,0] -&gt; Atlantic Ocean
[3,1]: [3,1] -&gt; [3,0] -&gt; Pacific Ocean 
       [3,1] -&gt; [4,1] -&gt; Atlantic Ocean
[4,0]: [4,0] -&gt; Pacific Ocean 
       [4,0] -&gt; Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> heights = [[1]]
<strong>Output:</strong> [[0,0]]
<strong>Explanation:</strong> The water can flow from the only cell to the Pacific and Atlantic oceans.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == heights.length</code></li>
<li><code>n == heights[r].length</code></li>
<li><code>1 &lt;= m, n &lt;= 200</code></li>
<li><code>0 &lt;= heights[r][c] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;