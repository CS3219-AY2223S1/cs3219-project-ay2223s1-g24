module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************************<div id="title">294. Special Positions in a Binary Matrix</div>
******************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an <code>m x n</code> binary matrix <code>mat</code>, return <em>the number of special positions in </em><code>mat</code><em>.</em></p>
<p>A position <code>(i, j)</code> is called <strong>special</strong> if <code>mat[i][j] == 1</code> and all other elements in row <code>i</code> and column <code>j</code> are <code>0</code> (rows and columns are <strong>0-indexed</strong>).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/12/23/special1.jpg" style="width: 244px; height: 245px;"/>
<pre><strong>Input:</strong> mat = [[1,0,0],[0,0,1],[1,0,0]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/12/24/special-grid.jpg" style="width: 244px; height: 245px;"/>
<pre><strong>Input:</strong> mat = [[1,0,0],[0,1,0],[0,0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> (0, 0), (1, 1) and (2, 2) are special positions.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == mat.length</code></li>
<li><code>n == mat[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 100</code></li>
<li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>
</div></div><br><br></html> `;