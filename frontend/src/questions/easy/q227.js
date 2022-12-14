module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">227. Split a String in Balanced Strings</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p><strong>Balanced</strong> strings are those that have an equal quantity of <code>'L'</code> and <code>'R'</code> characters.</p>
<p>Given a <strong>balanced</strong> string <code>s</code>, split it into some number of substrings such that:</p>
<ul>
<li>Each substring is balanced.</li>
</ul>
<p>Return <em>the <strong>maximum</strong> number of balanced strings you can obtain.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "RLRRLLRLRL"
<strong>Output:</strong> 4
<strong>Explanation:</strong> s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "RLRRRLLRLL"
<strong>Output:</strong> 2
<strong>Explanation:</strong> s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2<sup>nd</sup> and 5<sup>th</sup> substrings are not balanced.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "LLLLRRRR"
<strong>Output:</strong> 1
<strong>Explanation:</strong> s can be split into "LLLLRRRR".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 1000</code></li>
<li><code>s[i]</code> is either <code>'L'</code> or <code>'R'</code>.</li>
<li><code>s</code> is a <strong>balanced</strong> string.</li>
</ul>
</div></div><br><br></html> `;