module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************<div id="title">1638. Minimum Insertion Steps to Make a String Palindrome</div>
*********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code>. In one step you can insert any character at any index of the string.</p>
<p>Return <em>the minimum number of steps</em> to make <code>s</code> palindrome.</p>
<p>A <b>Palindrome String</b> is one that reads the same backward as well as forward.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "zzazz"
<strong>Output:</strong> 0
<strong>Explanation:</strong> The string "zzazz" is already palindrome we don't need any insertions.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "mbadm"
<strong>Output:</strong> 2
<strong>Explanation:</strong> String can be "mbdadbm" or "mdbabdm".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "leetcode"
<strong>Output:</strong> 5
<strong>Explanation:</strong> Inserting 5 characters the string becomes "leetcodocteel".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 500</code></li>
<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;