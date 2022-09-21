module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">379. Minimum Moves to Convert String</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> consisting of <code>n</code> characters which are either <code>'X'</code> or <code>'O'</code>.</p>
<p>A <strong>move</strong> is defined as selecting <strong>three</strong> <strong>consecutive characters</strong> of <code>s</code> and converting them to <code>'O'</code>. Note that if a move is applied to the character <code>'O'</code>, it will stay the <strong>same</strong>.</p>
<p>Return <em>the <strong>minimum</strong> number of moves required so that all the characters of </em><code>s</code><em> are converted to </em><code>'O'</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "XXX"
<strong>Output:</strong> 1
<strong>Explanation:</strong> <u>XXX</u> -&gt; OOO
We select all the 3 characters and convert them in one move.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "XXOX"
<strong>Output:</strong> 2
<strong>Explanation:</strong> <u>XXO</u>X -&gt; O<u>OOX</u> -&gt; OOOO
We select the first 3 characters in the first move, and convert them to <code>'O'</code>.
Then we select the last 3 characters and convert them so that the final string contains all <code>'O'</code>s.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "OOOO"
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no <code>'X's</code> in <code>s</code> to convert.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= s.length &lt;= 1000</code></li>
<li><code>s[i]</code> is either <code>'X'</code> or <code>'O'</code>.</li>
</ul>
</div></div><br><br></html> `;