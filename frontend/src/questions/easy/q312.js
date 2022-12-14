module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">312. Goal Parser Interpretation</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>You own a <strong>Goal Parser</strong> that can interpret a string <code>command</code>. The <code>command</code> consists of an alphabet of <code>"G"</code>, <code>"()"</code> and/or <code>"(al)"</code> in some order. The Goal Parser will interpret <code>"G"</code> as the string <code>"G"</code>, <code>"()"</code> as the string <code>"o"</code>, and <code>"(al)"</code> as the string <code>"al"</code>. The interpreted strings are then concatenated in the original order.</p>
<p>Given the string <code>command</code>, return <em>the <strong>Goal Parser</strong>'s interpretation of </em><code>command</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> command = "G()(al)"
<strong>Output:</strong> "Goal"
<strong>Explanation:</strong> The Goal Parser interprets the command as follows:
G -&gt; G
() -&gt; o
(al) -&gt; al
The final concatenated result is "Goal".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> command = "G()()()()(al)"
<strong>Output:</strong> "Gooooal"
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> command = "(al)G(al)()()G"
<strong>Output:</strong> "alGalooG"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= command.length &lt;= 100</code></li>
<li><code>command</code> consists of <code>"G"</code>, <code>"()"</code>, and/or <code>"(al)"</code> in some order.</li>
</ul>
</div></div><br><br></html> `;