module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">292. Matrix Diagonal Sum</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a square matrix <code>mat</code>, return the sum of the matrix diagonals.</p>
<p>Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png" style="width: 336px; height: 174px;"/>
<pre><strong>Input:</strong> mat = [[<strong>1</strong>,2,<strong>3</strong>],
              [4,<strong>5</strong>,6],
              [<strong>7</strong>,8,<strong>9</strong>]]
<strong>Output:</strong> 25
<strong>Explanation: </strong>Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> mat = [[<strong>1</strong>,1,1,<strong>1</strong>],
              [1,<strong>1</strong>,<strong>1</strong>,1],
              [1,<strong>1</strong>,<strong>1</strong>,1],
              [<strong>1</strong>,1,1,<strong>1</strong>]]
<strong>Output:</strong> 8
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> mat = [[<strong>5</strong>]]
<strong>Output:</strong> 5
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == mat.length == mat[i].length</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>1 &lt;= mat[i][j] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;