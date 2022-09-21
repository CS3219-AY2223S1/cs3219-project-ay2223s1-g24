module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">806. Card Flipping Game</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two <strong>0-indexed</strong> integer arrays <code>fronts</code> and <code>backs</code> of length <code>n</code>, where the <code>i<sup>th</sup></code> card has the positive integer <code>fronts[i]</code> printed on the front and <code>backs[i]</code> printed on the back. Initially, each card is placed on a table such that the front number is facing up and the other is facing down. You may flip over any number of cards (possibly zero).</p>
<p>After flipping the cards, an integer is considered <strong>good</strong> if it is facing down on some card and <strong>not</strong> facing up on any card.</p>
<p>Return <em>the minimum possible good integer after flipping the cards</em>. If there are no good integers, return <code>0</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
If we flip the second card, the face up numbers are [1,3,4,4,7] and the face down are [1,2,4,1,3].
2 is the minimum good integer as it appears facing down but not facing up.
It can be shown that 2 is the minimum possible good integer obtainable after flipping some cards.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> fronts = [1], backs = [1]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
There are no good integers no matter how we flip the cards, so we return 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == fronts.length == backs.length</code></li>
<li><code>1 &lt;= n &lt;= 1000</code></li>
<li><code>1 &lt;= fronts[i], backs[i] &lt;= 2000</code></li>
</ul>
</div></div><br><br></html> `;