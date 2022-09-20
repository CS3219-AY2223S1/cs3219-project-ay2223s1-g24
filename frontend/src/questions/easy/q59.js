module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************<div id="title">59. Nim Game</div>
*************<div class="content__u3I1 question-content__JfgR"><div><p>You are playing the following Nim Game with your friend:</p>
<ul>
<li>Initially, there is a heap of stones on the table.</li>
<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
<li>The one who removes the last stone is the winner.</li>
</ul>
<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> false
<strong>Explanation:</strong> These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> true
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> true
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div><br><br></html> `;