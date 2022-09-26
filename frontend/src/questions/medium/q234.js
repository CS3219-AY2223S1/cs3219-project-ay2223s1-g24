module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">690. Longest Uncommon Subsequence II</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of strings <code>strs</code>, return <em>the length of the <strong>longest uncommon subsequence</strong> between them</em>. If the longest uncommon subsequence does not exist, return <code>-1</code>.</p>
<p>An <strong>uncommon subsequence</strong> between an array of strings is a string that is a <strong>subsequence of one string but not the others</strong>.</p>
<p>A <strong>subsequence</strong> of a string <code>s</code> is a string that can be obtained after deleting any number of characters from <code>s</code>.</p>
<ul>
<li>For example, <code>"abc"</code> is a subsequence of <code>"aebdc"</code> because you can delete the underlined characters in <code>"a<u>e</u>b<u>d</u>c"</code> to get <code>"abc"</code>. Other subsequences of <code>"aebdc"</code> include <code>"aebdc"</code>, <code>"aeb"</code>, and <code>""</code> (empty string).</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["aba","cdc","eae"]
<strong>Output:</strong> 3
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> strs = ["aaa","aaa","aa"]
<strong>Output:</strong> -1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= strs.length &lt;= 50</code></li>
<li><code>1 &lt;= strs[i].length &lt;= 10</code></li>
<li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;