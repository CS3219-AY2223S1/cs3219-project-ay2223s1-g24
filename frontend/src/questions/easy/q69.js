module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">69. Guess Number Higher or Lower</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>We are playing the Guess Game. The game is as follows:</p>
<p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked.</p>
<p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.</p>
<p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:</p>
<ul>
<li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num &gt; pick</code>).</li>
<li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).</li>
<li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</li>
</ul>
<p>Return <em>the number that I picked</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 10, pick = 6
<strong>Output:</strong> 6
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1, pick = 1
<strong>Output:</strong> 1
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 2, pick = 1
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
<li><code>1 &lt;= pick &lt;= n</code></li>
</ul>
</div></div><br><br></html> `;