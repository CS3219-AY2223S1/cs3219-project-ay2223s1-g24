module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">434. Strong Password Checker II</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>A password is said to be <strong>strong</strong> if it satisfies all the following criteria:</p>
<ul>
<li>It has at least <code>8</code> characters.</li>
<li>It contains at least <strong>one lowercase</strong> letter.</li>
<li>It contains at least <strong>one uppercase</strong> letter.</li>
<li>It contains at least <strong>one digit</strong>.</li>
<li>It contains at least <strong>one special character</strong>. The special characters are the characters in the following string: <code>"!@#$%^&amp;*()-+"</code>.</li>
<li>It does <strong>not</strong> contain <code>2</code> of the same character in adjacent positions (i.e., <code>"aab"</code> violates this condition, but <code>"aba"</code> does not).</li>
</ul>
<p>Given a string <code>password</code>, return <code>true</code><em> if it is a <strong>strong</strong> password</em>. Otherwise, return <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> password = "IloveLe3tcode!"
<strong>Output:</strong> true
<strong>Explanation:</strong> The password meets all the requirements. Therefore, we return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> password = "Me+You--IsMyDream"
<strong>Output:</strong> false
<strong>Explanation:</strong> The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> password = "1aB!"
<strong>Output:</strong> false
<strong>Explanation:</strong> The password does not meet the length requirement. Therefore, we return false.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= password.length &lt;= 100</code></li>
<li><code>password</code> consists of letters, digits, and special characters: <code>"!@#$%^&amp;*()-+"</code>.</li>
</ul>
</div></div><br><br></html> `;