module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">205. Matrix Cells in Distance Order</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given four integers <code>row</code>, <code>cols</code>, <code>rCenter</code>, and <code>cCenter</code>. There is a <code>rows x cols</code> matrix and you are on the cell with the coordinates <code>(rCenter, cCenter)</code>.</p>
<p>Return <em>the coordinates of all cells in the matrix, sorted by their <strong>distance</strong> from </em><code>(rCenter, cCenter)</code><em> from the smallest distance to the largest distance</em>. You may return the answer in <strong>any order</strong> that satisfies this condition.</p>
<p>The <strong>distance</strong> between two cells <code>(r<sub>1</sub>, c<sub>1</sub>)</code> and <code>(r<sub>2</sub>, c<sub>2</sub>)</code> is <code>|r<sub>1</sub> - r<sub>2</sub>| + |c<sub>1</sub> - c<sub>2</sub>|</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> rows = 1, cols = 2, rCenter = 0, cCenter = 0
<strong>Output:</strong> [[0,0],[0,1]]
<strong>Explanation:</strong> The distances from (0, 0) to other cells are: [0,1]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> rows = 2, cols = 2, rCenter = 0, cCenter = 1
<strong>Output:</strong> [[0,1],[0,0],[1,1],[1,0]]
<strong>Explanation:</strong> The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> rows = 2, cols = 3, rCenter = 1, cCenter = 2
<strong>Output:</strong> [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
<strong>Explanation:</strong> The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= rows, cols &lt;= 100</code></li>
<li><code>0 &lt;= rCenter &lt; rows</code></li>
<li><code>0 &lt;= cCenter &lt; cols</code></li>
</ul>
</div></div><br><br></html> `;