module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">1678. Stone Game IV</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>Alice and Bob take turns playing a game, with Alice starting first.</p>
<p>Initially, there are <code>n</code> stones in a pile. On each player's turn, that player makes a <em>move</em> consisting of removing <strong>any</strong> non-zero <strong>square number</strong> of stones in the pile.</p>
<p>Also, if a player cannot make a move, he/she loses the game.</p>
<p>Given a positive integer <code>n</code>, return <code>true</code> if and only if Alice wins the game otherwise return <code>false</code>, assuming both players play optimally.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> true
<strong>Explanation: </strong>Alice can remove 1 stone winning the game because Bob doesn't have any moves.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> false
<strong>Explanation: </strong>Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -&gt; 1 -&gt; 0).
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> n is already a perfect square, Alice can win with one move, removing 4 stones (4 -&gt; 0).
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;