module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************<div id="title">367. Number of Strings That Appear as Substrings in Word</div>
*********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of strings <code>patterns</code> and a string <code>word</code>, return <em>the <strong>number</strong> of strings in </em><code>patterns</code><em> that exist as a <strong>substring</strong> in </em><code>word</code>.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> patterns = ["a","abc","bc","d"], word = "abc"
<strong>Output:</strong> 3
<strong>Explanation:</strong>
- "a" appears as a substring in "<u>a</u>bc".
- "abc" appears as a substring in "<u>abc</u>".
- "bc" appears as a substring in "a<u>bc</u>".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> patterns = ["a","b","c"], word = "aaaaabbbbb"
<strong>Output:</strong> 2
<strong>Explanation:</strong>
- "a" appears as a substring in "a<u>a</u>aaabbbbb".
- "b" appears as a substring in "aaaaabbbb<u>b</u>".
- "c" does not appear as a substring in "aaaaabbbbb".
2 of the strings in patterns appear as a substring in word.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> patterns = ["a","a","a"], word = "ab"
<strong>Output:</strong> 3
<strong>Explanation:</strong> Each of the patterns appears as a substring in word "<u>a</u>b".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= patterns.length &lt;= 100</code></li>
<li><code>1 &lt;= patterns[i].length &lt;= 100</code></li>
<li><code>1 &lt;= word.length &lt;= 100</code></li>
<li><code>patterns[i]</code> and <code>word</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;