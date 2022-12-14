module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">390. Count Common Words With One Occurrence</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two string arrays <code>words1</code> and <code>words2</code>, return <em>the number of strings that appear <strong>exactly once</strong> in <b>each</b> of the two arrays.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no strings that appear in each of the two arrays.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words1 = ["a","ab"], words2 = ["a","a","a","ab"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only string that appears exactly once in each of the two arrays is "ab".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words1.length, words2.length &lt;= 1000</code></li>
<li><code>1 &lt;= words1[i].length, words2[j].length &lt;= 30</code></li>
<li><code>words1[i]</code> and <code>words2[j]</code> consists only of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;