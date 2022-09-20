module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">287. Make The String Great</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> of lower and upper case English letters.</p>
<p>A good string is a string which doesn't have <strong>two adjacent characters</strong> <code>s[i]</code> and <code>s[i + 1]</code> where:</p>
<ul>
<li><code>0 &lt;= i &lt;= s.length - 2</code></li>
<li><code>s[i]</code> is a lower-case letter and <code>s[i + 1]</code> is the same letter but in upper-case or <strong>vice-versa</strong>.</li>
</ul>
<p>To make the string good, you can choose <strong>two adjacent</strong> characters that make the string bad and remove them. You can keep doing this until the string becomes good.</p>
<p>Return <em>the string</em> after making it good. The answer is guaranteed to be unique under the given constraints.</p>
<p><strong>Notice</strong> that an empty string is also good.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "leEeetcode"
<strong>Output:</strong> "leetcode"
<strong>Explanation:</strong> In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abBAcC"
<strong>Output:</strong> ""
<strong>Explanation:</strong> We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --&gt; "aAcC" --&gt; "cC" --&gt; ""
"abBAcC" --&gt; "abBA" --&gt; "aA" --&gt; ""
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "s"
<strong>Output:</strong> "s"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code> contains only lower and upper case English letters.</li>
</ul>
</div></div><br><br></html> `;