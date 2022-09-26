module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">773. Reach a Number</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>You are standing at position <code>0</code> on an infinite number line. There is a destination at position <code>target</code>.</p>
<p>You can make some number of moves <code>numMoves</code> so that:</p>
<ul>
<li>On each move, you can either go left or right.</li>
<li>During the <code>i<sup>th</sup></code> move (starting from <code>i == 1</code> to <code>i == numMoves</code>), you take <code>i</code> steps in the chosen direction.</li>
</ul>
<p>Given the integer <code>target</code>, return <em>the <strong>minimum</strong> number of moves required (i.e., the minimum </em><code>numMoves</code><em>) to reach the destination</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> target = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong>
On the 1<sup>st</sup> move, we step from 0 to 1 (1 step).
On the 2<sup>nd</sup> move, we step from 1 to -1 (2 steps).
On the 3<sup>rd</sup> move, we step from -1 to 2 (3 steps).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> target = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong>
On the 1<sup>st</sup> move, we step from 0 to 1 (1 step).
On the 2<sup>nd</sup> move, we step from 1 to 3 (2 steps).
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
<li><code>target != 0</code></li>
</ul>
</div></div><br><br></html> `;