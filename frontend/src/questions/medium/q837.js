module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************<div id="title">837. Stone Game</div>
***************<div class="content__u3I1 question-content__JfgR"><div><p>Alice and Bob play a game with piles of stones. There are an <strong>even</strong> number of piles arranged in a row, and each pile has a <strong>positive</strong> integer number of stones <code>piles[i]</code>.</p>
<p>The objective of the game is to end with the most stones. The <strong>total</strong> number of stones across all the piles is <strong>odd</strong>, so there are no ties.</p>
<p>Alice and Bob take turns, with <strong>Alice starting first</strong>. Each turn, a player takes the entire pile of stones either from the <strong>beginning</strong> or from the <strong>end</strong> of the row. This continues until there are no more piles left, at which point the person with the <strong>most stones wins</strong>.</p>
<p>Assuming Alice and Bob play optimally, return <code>true</code><em> if Alice wins the game, or </em><code>false</code><em> if Bob wins</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> piles = [5,3,4,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> piles = [3,7,2,3]
<strong>Output:</strong> true
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= piles.length &lt;= 500</code></li>
<li><code>piles.length</code> is <strong>even</strong>.</li>
<li><code>1 &lt;= piles[i] &lt;= 500</code></li>
<li><code>sum(piles[i])</code> is <strong>odd</strong>.</li>
</ul>
</div></div><br><br></html> `;