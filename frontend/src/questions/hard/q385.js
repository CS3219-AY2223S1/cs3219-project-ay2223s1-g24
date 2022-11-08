module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************<div id="title">1815. Maximum Value of K Coins From Piles</div>
*****************************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> <strong>piles</strong> of coins on a table. Each pile consists of a <strong>positive number</strong> of coins of assorted denominations.</p>
<p>In one move, you can choose any coin on <strong>top</strong> of any pile, remove it, and add it to your wallet.</p>
<p>Given a list <code>piles</code>, where <code>piles[i]</code> is a list of integers denoting the composition of the <code>i<sup>th</sup></code> pile from <strong>top to bottom</strong>, and a positive integer <code>k</code>, return <em>the <strong>maximum total value</strong> of coins you can have in your wallet if you choose <strong>exactly</strong></em> <code>k</code> <em>coins optimally</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/11/09/e1.png" style="width: 600px; height: 243px;"/>
<pre><strong>Input:</strong> piles = [[1,100,3],[7,8,9]], k = 2
<strong>Output:</strong> 101
<strong>Explanation:</strong>
The above diagram shows the different ways we can choose k coins.
The maximum total we can obtain is 101.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7
<strong>Output:</strong> 706
<strong>Explanation:
</strong>The maximum total can be obtained if we choose all coins from the last pile.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == piles.length</code></li>
<li><code>1 &lt;= n &lt;= 1000</code></li>
<li><code>1 &lt;= piles[i][j] &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= k &lt;= sum(piles[i].length) &lt;= 2000</code></li>
</ul>
</div></div><br><br></html> `;