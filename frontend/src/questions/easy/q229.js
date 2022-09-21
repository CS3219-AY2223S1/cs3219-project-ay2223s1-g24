module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************<div id="title">229. Cells with Odd Values in a Matrix</div>
***************************************<div class="content__u3I1 question-content__JfgR"><div><p>There is an <code>m x n</code> matrix that is initialized to all <code>0</code>'s. There is also a 2D array <code>indices</code> where each <code>indices[i] = [r<sub>i</sub>, c<sub>i</sub>]</code> represents a <strong>0-indexed location</strong> to perform some increment operations on the matrix.</p>
<p>For each location <code>indices[i]</code>, do <strong>both</strong> of the following:</p>
<ol>
<li>Increment <strong>all</strong> the cells on row <code>r<sub>i</sub></code>.</li>
<li>Increment <strong>all</strong> the cells on column <code>c<sub>i</sub></code>.</li>
</ol>
<p>Given <code>m</code>, <code>n</code>, and <code>indices</code>, return <em>the <strong>number of odd-valued cells</strong> in the matrix after applying the increment to all locations in </em><code>indices</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/10/30/e1.png" style="width: 600px; height: 118px;"/>
<pre><strong>Input:</strong> m = 2, n = 3, indices = [[0,1],[1,1]]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/10/30/e2.png" style="width: 600px; height: 150px;"/>
<pre><strong>Input:</strong> m = 2, n = 2, indices = [[1,1],[0,0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= m, n &lt;= 50</code></li>
<li><code>1 &lt;= indices.length &lt;= 100</code></li>
<li><code>0 &lt;= r<sub>i</sub> &lt; m</code></li>
<li><code>0 &lt;= c<sub>i</sub> &lt; n</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you solve this in <code>O(n + m + indices.length)</code> time with only <code>O(n + m)</code> extra space?</p>
</div></div><br><br></html> `;