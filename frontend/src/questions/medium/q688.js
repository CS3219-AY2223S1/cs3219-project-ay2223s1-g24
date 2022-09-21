module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">688. Coin Change II</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>
<p>Return <em>the number of combinations that make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>0</code>.</p>
<p>You may assume that you have an infinite number of each kind of coin.</p>
<p>The answer is <strong>guaranteed</strong> to fit into a signed <strong>32-bit</strong> integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> amount = 5, coins = [1,2,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> amount = 3, coins = [2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> the amount of 3 cannot be made up just with coins of 2.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> amount = 10, coins = [10]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= coins.length &lt;= 300</code></li>
<li><code>1 &lt;= coins[i] &lt;= 5000</code></li>
<li>All the values of <code>coins</code> are <strong>unique</strong>.</li>
<li><code>0 &lt;= amount &lt;= 5000</code></li>
</ul>
</div></div><br><br></html> `;