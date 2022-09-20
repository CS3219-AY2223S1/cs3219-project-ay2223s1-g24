module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">204. Divisor Game</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>Alice and Bob take turns playing a game, with Alice starting first.</p>
<p>Initially, there is a number <code>n</code> on the chalkboard. On each player's turn, that player makes a move consisting of:</p>
<ul>
<li>Choosing any <code>x</code> with <code>0 &lt; x &lt; n</code> and <code>n % x == 0</code>.</li>
<li>Replacing the number <code>n</code> on the chalkboard with <code>n - x</code>.</li>
</ul>
<p>Also, if a player cannot make a move, they lose the game.</p>
<p>Return <code>true</code> <em>if and only if Alice wins the game, assuming both players play optimally</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> Alice chooses 1, and Bob has no more moves.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> Alice chooses 1, Bob chooses 1, and Alice has no more moves.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;