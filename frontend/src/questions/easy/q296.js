module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">296. Rearrange Spaces Between Words</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>text</code> of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that <code>text</code> <strong>contains at least one word</strong>.</p>
<p>Rearrange the spaces so that there is an <strong>equal</strong> number of spaces between every pair of adjacent words and that number is <strong>maximized</strong>. If you cannot redistribute all the spaces equally, place the <strong>extra spaces at the end</strong>, meaning the returned string should be the same length as <code>text</code>.</p>
<p>Return <em>the string after rearranging the spaces</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> text = "  this   is  a sentence "
<strong>Output:</strong> "this   is   a   sentence"
<strong>Explanation:</strong> There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> text = " practice   makes   perfect"
<strong>Output:</strong> "practice   makes   perfect "
<strong>Explanation:</strong> There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= text.length &lt;= 100</code></li>
<li><code>text</code> consists of lowercase English letters and <code>' '</code>.</li>
<li><code>text</code> contains at least one word.</li>
</ul>
</div></div><br><br></html> `;