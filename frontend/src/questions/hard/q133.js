module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">1563. K-Similar Strings</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>Strings <code>s1</code> and <code>s2</code> are <code>k</code><strong>-similar</strong> (for some non-negative integer <code>k</code>) if we can swap the positions of two letters in <code>s1</code> exactly <code>k</code> times so that the resulting string equals <code>s2</code>.</p>
<p>Given two anagrams <code>s1</code> and <code>s2</code>, return the smallest <code>k</code> for which <code>s1</code> and <code>s2</code> are <code>k</code><strong>-similar</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s1 = "ab", s2 = "ba"
<strong>Output:</strong> 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s1 = "abc", s2 = "bca"
<strong>Output:</strong> 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s1.length &lt;= 20</code></li>
<li><code>s2.length == s1.length</code></li>
<li><code>s1</code> and <code>s2</code> contain only lowercase letters from the set <code>{'a', 'b', 'c', 'd', 'e', 'f'}</code>.</li>
<li><code>s2</code> is an anagram of <code>s1</code>.</li>
</ul>
</div></div><br><br></html> `;