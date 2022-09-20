module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1623. Dice Roll Simulation</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>A die simulator generates a random number from <code>1</code> to <code>6</code> for each roll. You introduced a constraint to the generator such that it cannot roll the number <code>i</code> more than <code>rollMax[i]</code> (<strong>1-indexed</strong>) consecutive times.</p>
<p>Given an array of integers <code>rollMax</code> and an integer <code>n</code>, return <em>the number of distinct sequences that can be obtained with exact </em><code>n</code><em> rolls</em>. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p>Two sequences are considered different if at least one element differs from each other.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2, rollMax = [1,1,2,2,2,3]
<strong>Output:</strong> 34
<strong>Explanation:</strong> There will be 2 rolls of die, if there are no constraints on the die, there are 6 * 6 = 36 possible combinations. In this case, looking at rollMax array, the numbers 1 and 2 appear at most once consecutively, therefore sequences (1,1) and (2,2) cannot occur, so the final answer is 36-2 = 34.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2, rollMax = [1,1,1,1,1,1]
<strong>Output:</strong> 30
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 3, rollMax = [1,1,1,2,2,3]
<strong>Output:</strong> 181
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 5000</code></li>
<li><code>rollMax.length == 6</code></li>
<li><code>1 &lt;= rollMax[i] &lt;= 15</code></li>
</ul>
</div></div><br><br></html> `;