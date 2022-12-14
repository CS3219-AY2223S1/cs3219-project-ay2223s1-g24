module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">178. X of a Kind in a Deck of Cards</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>In a deck of cards, each card has an integer written on it.</p>
<p>Return <code>true</code> if and only if you can choose <code>X &gt;= 2</code> such that it is possible to split the entire deck into 1 or more groups of cards, where:</p>
<ul>
<li>Each group has exactly <code>X</code> cards.</li>
<li>All the cards in each group have the same integer.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> deck = [1,2,3,4,4,3,2,1]
<strong>Output:</strong> true
<strong>Explanation</strong>: Possible partition [1,1],[2,2],[3,3],[4,4].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> deck = [1,1,1,2,2,2,3,3]
<strong>Output:</strong> false
<strong>Explanation</strong>: No possible partition.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= deck.length &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= deck[i] &lt; 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;