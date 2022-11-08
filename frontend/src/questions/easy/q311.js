module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">311. Richest Customer Wealth</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an <code>m x n</code> integer grid <code>accounts</code> where <code>accounts[i][j]</code> is the amount of money the <code>i​​​​​<sup>​​​​​​th</sup>​​​​</code> customer has in the <code>j​​​​​<sup>​​​​​​th</sup></code>​​​​ bank. Return<em> the <strong>wealth</strong> that the richest customer has.</em></p>
<p>A customer's <strong>wealth</strong> is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum <strong>wealth</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> accounts = [[1,2,3],[3,2,1]]
<strong>Output:</strong> 6
<strong>Explanation</strong><strong>:</strong>
<code>1st customer has wealth = 1 + 2 + 3 = 6
</code><code>2nd customer has wealth = 3 + 2 + 1 = 6
</code>Both customers are considered the richest with a wealth of 6 each, so return 6.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> accounts = [[1,5],[7,3],[3,5]]
<strong>Output:</strong> 10
<strong>Explanation</strong>: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> accounts = [[2,8,7],[7,1,3],[1,9,5]]
<strong>Output:</strong> 17
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == accounts.length</code></li>
<li><code>n == accounts[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 50</code></li>
<li><code>1 &lt;= accounts[i][j] &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;