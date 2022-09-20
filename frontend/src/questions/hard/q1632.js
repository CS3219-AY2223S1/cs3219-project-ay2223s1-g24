module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************************<div id="title">1632. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix</div>
*********************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>m x n</code> binary matrix <code>mat</code>. In one step, you can choose one cell and flip it and all the four neighbors of it if they exist (Flip is changing <code>1</code> to <code>0</code> and <code>0</code> to <code>1</code>). A pair of cells are called neighbors if they share one edge.</p>
<p>Return the <em>minimum number of steps</em> required to convert <code>mat</code> to a zero matrix or <code>-1</code> if you cannot.</p>
<p>A <strong>binary matrix</strong> is a matrix with all cells equal to <code>0</code> or <code>1</code> only.</p>
<p>A <strong>zero matrix</strong> is a matrix with all cells equal to <code>0</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/28/matrix.png" style="width: 409px; height: 86px;"/>
<pre><strong>Input:</strong> mat = [[0,0],[0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> One possible solution is to flip (1, 0) then (0, 1) and finally (1, 1) as shown.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> mat = [[0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Given matrix is a zero matrix. We do not need to change it.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> mat = [[1,0,0],[1,0,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> Given matrix cannot be a zero matrix.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == mat.length</code></li>
<li><code>n == mat[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 3</code></li>
<li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>
</div></div><br><br></html> `;