module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************<div id="title">498. Simplify Path</div>
*****************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>path</code>, which is an <strong>absolute path</strong> (starting with a slash <code>'/'</code>) to a file or directory in a Unix-style file system, convert it to the simplified <strong>canonical path</strong>.</p>
<p>In a Unix-style file system, a period <code>'.'</code> refers to the current directory, a double period <code>'..'</code> refers to the directory up a level, and any multiple consecutive slashes (i.e. <code>'//'</code>) are treated as a single slash <code>'/'</code>. For this problem, any other format of periods such as <code>'...'</code> are treated as file/directory names.</p>
<p>The <strong>canonical path</strong> should have the following format:</p>
<ul>
<li>The path starts with a single slash <code>'/'</code>.</li>
<li>Any two directories are separated by a single slash <code>'/'</code>.</li>
<li>The path does not end with a trailing <code>'/'</code>.</li>
<li>The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period <code>'.'</code> or double period <code>'..'</code>)</li>
</ul>
<p>Return <em>the simplified <strong>canonical path</strong></em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> path = "/home/"
<strong>Output:</strong> "/home"
<strong>Explanation:</strong> Note that there is no trailing slash after the last directory name.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> path = "/../"
<strong>Output:</strong> "/"
<strong>Explanation:</strong> Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> path = "/home//foo/"
<strong>Output:</strong> "/home/foo"
<strong>Explanation:</strong> In the canonical path, multiple consecutive slashes are replaced by a single one.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= path.length &lt;= 3000</code></li>
<li><code>path</code> consists of English letters, digits, period <code>'.'</code>, slash <code>'/'</code> or <code>'_'</code>.</li>
<li><code>path</code> is a valid absolute Unix path.</li>
</ul>
</div></div><br><br></html> `;