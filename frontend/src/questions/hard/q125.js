module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1555. Making A Large Island</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p>
<p>Return <em>the size of the largest <strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p>
<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> grid = [[1,0],[0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> grid = [[1,1],[1,0]]
<strong>Output:</strong> 4
<strong>Explanation: </strong>Change the 0 to 1 and make the island bigger, only one island with area = 4.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> grid = [[1,1],[1,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Can't change any 0 to 1, only one island with area = 4.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= n &lt;= 500</code></li>
<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul></div></div><br><br></html> `;