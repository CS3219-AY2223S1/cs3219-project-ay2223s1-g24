module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">410. Counting Words With a Given Prefix</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of strings <code>words</code> and a string <code>pref</code>.</p>
<p>Return <em>the number of strings in </em><code>words</code><em> that contain </em><code>pref</code><em> as a <strong>prefix</strong></em>.</p>
<p>A <strong>prefix</strong> of a string <code>s</code> is any leading contiguous substring of <code>s</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["pay","<strong><u>at</u></strong>tention","practice","<u><strong>at</strong></u>tend"], <code>pref </code>= "at"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The 2 strings that contain "at" as a prefix are: "<u><strong>at</strong></u>tention" and "<u><strong>at</strong></u>tend".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["leetcode","win","loops","success"], <code>pref </code>= "code"
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no strings that contain "code" as a prefix.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 100</code></li>
<li><code>1 &lt;= words[i].length, pref.length &lt;= 100</code></li>
<li><code>words[i]</code> and <code>pref</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;