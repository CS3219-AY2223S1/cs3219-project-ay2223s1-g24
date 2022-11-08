module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">444. First Letter to Appear Twice</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> consisting of lowercase English letters, return <em>the first letter to appear <strong>twice</strong></em>.</p>
<p><strong>Note</strong>:</p>
<ul>
<li>A letter <code>a</code> appears twice before another letter <code>b</code> if the <strong>second</strong> occurrence of <code>a</code> is before the <strong>second</strong> occurrence of <code>b</code>.</li>
<li><code>s</code> will contain at least one letter that appears twice.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "abccbaacz"
<strong>Output:</strong> "c"
<strong>Explanation:</strong>
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcdd"
<strong>Output:</strong> "d"
<strong>Explanation:</strong>
The only letter that appears twice is 'd' so we return 'd'.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 100</code></li>
<li><code>s</code> consists of lowercase English letters.</li>
<li><code>s</code> has at least one repeated letter.</li>
</ul>
</div></div><br><br></html> `;