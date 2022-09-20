module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************<div id="title">216. Number of Equivalent Domino Pairs</div>
***************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of <code>dominoes</code>, <code>dominoes[i] = [a, b]</code> is <strong>equivalent to</strong> <code>dominoes[j] = [c, d]</code> if and only if either (<code>a == c</code> and <code>b == d</code>), or (<code>a == d</code> and <code>b == c</code>) - that is, one domino can be rotated to be equal to another domino.</p>
<p>Return <em>the number of pairs </em><code>(i, j)</code><em> for which </em><code>0 &lt;= i &lt; j &lt; dominoes.length</code><em>, and </em><code>dominoes[i]</code><em> is <strong>equivalent to</strong> </em><code>dominoes[j]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> dominoes = [[1,2],[2,1],[3,4],[5,6]]
<strong>Output:</strong> 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= dominoes.length &lt;= 4 * 10<sup>4</sup></code></li>
<li><code>dominoes[i].length == 2</code></li>
<li><code>1 &lt;= dominoes[i][j] &lt;= 9</code></li>
</ul>
</div></div><br><br></html> `;