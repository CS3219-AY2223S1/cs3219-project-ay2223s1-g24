module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************<div id="title">211. Occurrences After Bigram</div>
******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>first</code> and <code>second</code>, consider occurrences in some text of the form <code>"first second third"</code>, where <code>second</code> comes immediately after <code>first</code>, and <code>third</code> comes immediately after <code>second</code>.</p>
<p>Return <em>an array of all the words</em> <code>third</code> <em>for each occurrence of</em> <code>"first second third"</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> text = "alice is a good girl she is a good student", first = "a", second = "good"
<strong>Output:</strong> ["girl","student"]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> text = "we will we will rock you", first = "we", second = "will"
<strong>Output:</strong> ["we","rock"]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= text.length &lt;= 1000</code></li>
<li><code>text</code> consists of lowercase English letters and spaces.</li>
<li>All the words in <code>text</code> a separated by <strong>a single space</strong>.</li>
<li><code>1 &lt;= first.length, second.length &lt;= 10</code></li>
<li><code>first</code> and <code>second</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;