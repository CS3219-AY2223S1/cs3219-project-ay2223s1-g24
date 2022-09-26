module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">799. Expressive Words</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>Sometimes people repeat letters to represent extra feeling. For example:</p>
<ul>
<li><code>"hello" -&gt; "heeellooo"</code></li>
<li><code>"hi" -&gt; "hiiii"</code></li>
</ul>
<p>In these strings like <code>"heeellooo"</code>, we have groups of adjacent letters that are all the same: <code>"h"</code>, <code>"eee"</code>, <code>"ll"</code>, <code>"ooo"</code>.</p>
<p>You are given a string <code>s</code> and an array of query strings <code>words</code>. A query word is <strong>stretchy</strong> if it can be made to be equal to <code>s</code> by any number of applications of the following extension operation: choose a group consisting of characters <code>c</code>, and add some number of characters <code>c</code> to the group so that the size of the group is <strong>three or more</strong>.</p>
<ul>
<li>For example, starting with <code>"hello"</code>, we could do an extension on the group <code>"o"</code> to get <code>"hellooo"</code>, but we cannot get <code>"helloo"</code> since the group <code>"oo"</code> has a size less than three. Also, we could do another extension like <code>"ll" -&gt; "lllll"</code> to get <code>"helllllooo"</code>. If <code>s = "helllllooo"</code>, then the query word <code>"hello"</code> would be <strong>stretchy</strong> because of these two extension operations: <code>query = "hello" -&gt; "hellooo" -&gt; "helllllooo" = s</code>.</li>
</ul>
<p>Return <em>the number of query strings that are <strong>stretchy</strong></em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "heeellooo", words = ["hello", "hi", "helo"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length, words.length &lt;= 100</code></li>
<li><code>1 &lt;= words[i].length &lt;= 100</code></li>
<li><code>s</code> and <code>words[i]</code> consist of lowercase letters.</li>
</ul>
</div></div><br><br></html> `;