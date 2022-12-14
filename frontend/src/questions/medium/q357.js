module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************<div id="title">813. New 21 Game</div>
****************<div class="content__u3I1 question-content__JfgR"><div><p>Alice plays the following game, loosely based on the card game <strong>"21"</strong>.</p>
<p>Alice starts with <code>0</code> points and draws numbers while she has less than <code>k</code> points. During each draw, she gains an integer number of points randomly from the range <code>[1, maxPts]</code>, where <code>maxPts</code> is an integer. Each draw is independent and the outcomes have equal probabilities.</p>
<p>Alice stops drawing numbers when she gets <code>k</code> <strong>or more points</strong>.</p>
<p>Return the probability that Alice has <code>n</code> or fewer points.</p>
<p>Answers within <code>10<sup>-5</sup></code> of the actual answer are considered accepted.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 10, k = 1, maxPts = 10
<strong>Output:</strong> 1.00000
<strong>Explanation:</strong> Alice gets a single card, then stops.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 6, k = 1, maxPts = 10
<strong>Output:</strong> 0.60000
<strong>Explanation:</strong> Alice gets a single card, then stops.
In 6 out of 10 possibilities, she is at or below 6 points.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 21, k = 17, maxPts = 10
<strong>Output:</strong> 0.73278
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= maxPts &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;