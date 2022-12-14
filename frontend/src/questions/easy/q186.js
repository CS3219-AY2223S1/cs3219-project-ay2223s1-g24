module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">186. DI String Match</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>A permutation <code>perm</code> of <code>n + 1</code> integers of all the integers in the range <code>[0, n]</code> can be represented as a string <code>s</code> of length <code>n</code> where:</p>
<ul>
<li><code>s[i] == 'I'</code> if <code>perm[i] &lt; perm[i + 1]</code>, and</li>
<li><code>s[i] == 'D'</code> if <code>perm[i] &gt; perm[i + 1]</code>.</li>
</ul>
<p>Given a string <code>s</code>, reconstruct the permutation <code>perm</code> and return it. If there are multiple valid permutations perm, return <strong>any of them</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "IDID"
<strong>Output:</strong> [0,4,1,3,2]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "III"
<strong>Output:</strong> [0,1,2,3]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "DDI"
<strong>Output:</strong> [3,2,0,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s[i]</code> is either <code>'I'</code> or <code>'D'</code>.</li>
</ul>
</div></div><br><br></html> `;