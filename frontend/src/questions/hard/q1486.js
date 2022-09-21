module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">1486. Russian Doll Envelopes</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a 2D array of integers <code>envelopes</code> where <code>envelopes[i] = [w<sub>i</sub>, h<sub>i</sub>]</code> represents the width and the height of an envelope.</p>
<p>One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.</p>
<p>Return <em>the maximum number of envelopes you can Russian doll (i.e., put one inside the other)</em>.</p>
<p><strong>Note:</strong> You cannot rotate an envelope.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> envelopes = [[5,4],[6,4],[6,7],[2,3]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The maximum number of envelopes you can Russian doll is <code>3</code> ([2,3] =&gt; [5,4] =&gt; [6,7]).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> envelopes = [[1,1],[1,1],[1,1]]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= envelopes.length &lt;= 10<sup>5</sup></code></li>
<li><code>envelopes[i].length == 2</code></li>
<li><code>1 &lt;= w<sub>i</sub>, h<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;