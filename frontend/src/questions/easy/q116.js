module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">116. Range Addition II</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an <code>m x n</code> matrix <code>M</code> initialized with all <code>0</code>'s and an array of operations <code>ops</code>, where <code>ops[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> means <code>M[x][y]</code> should be incremented by one for all <code>0 &lt;= x &lt; a<sub>i</sub></code> and <code>0 &lt;= y &lt; b<sub>i</sub></code>.</p>
<p>Count and return <em>the number of maximum integers in the matrix after performing all the operations</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg" style="width: 750px; height: 176px;"/>
<pre><strong>Input:</strong> m = 3, n = 3, ops = [[2,2],[3,3]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The maximum integer in M is 2, and there are four of it in M. So return 4.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
<strong>Output:</strong> 4
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> m = 3, n = 3, ops = []
<strong>Output:</strong> 9
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= m, n &lt;= 4 * 10<sup>4</sup></code></li>
<li><code>0 &lt;= ops.length &lt;= 10<sup>4</sup></code></li>
<li><code>ops[i].length == 2</code></li>
<li><code>1 &lt;= a<sub>i</sub> &lt;= m</code></li>
<li><code>1 &lt;= b<sub>i</sub> &lt;= n</code></li>
</ul>
</div></div><br><br></html> `;