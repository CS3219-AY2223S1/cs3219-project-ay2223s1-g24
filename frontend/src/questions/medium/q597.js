module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">597. Best Time to Buy and Sell Stock with Cooldown</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>
<p>Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:</p>
<ul>
<li>After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).</li>
</ul>
<p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> prices = [1,2,3,0,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> transactions = [buy, sell, cooldown, buy, sell]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> prices = [1]
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= prices.length &lt;= 5000</code></li>
<li><code>0 &lt;= prices[i] &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;