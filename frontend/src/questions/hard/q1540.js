module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1540. Couples Holding Hands</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> couples sitting in <code>2n</code> seats arranged in a row and want to hold hands.</p>
<p>The people and seats are represented by an integer array <code>row</code> where <code>row[i]</code> is the ID of the person sitting in the <code>i<sup>th</sup></code> seat. The couples are numbered in order, the first couple being <code>(0, 1)</code>, the second couple being <code>(2, 3)</code>, and so on with the last couple being <code>(2n - 2, 2n - 1)</code>.</p>
<p>Return <em>the minimum number of swaps so that every couple is sitting side by side</em>. A swap consists of choosing any two people, then they stand up and switch seats.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> row = [0,2,1,3]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We only need to swap the second (row[1]) and third (row[2]) person.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> row = [3,2,0,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> All couples are already seated side by side.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2n == row.length</code></li>
<li><code>2 &lt;= n &lt;= 30</code></li>
<li><code>n</code> is even.</li>
<li><code>0 &lt;= row[i] &lt; 2n</code></li>
<li>All the elements of <code>row</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;