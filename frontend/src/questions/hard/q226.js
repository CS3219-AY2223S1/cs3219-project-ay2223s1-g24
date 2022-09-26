module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">1656. Find All Good Strings</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the strings <code>s1</code> and <code>s2</code> of size <code>n</code> and the string <code>evil</code>, return <em>the number of <strong>good</strong> strings</em>.</p>
<p>A <strong>good</strong> string has size <code>n</code>, it is alphabetically greater than or equal to <code>s1</code>, it is alphabetically smaller than or equal to <code>s2</code>, and it does not contain the string <code>evil</code> as a substring. Since the answer can be a huge number, return this <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2, s1 = "aa", s2 = "da", evil = "b"
<strong>Output:</strong> 51 
<strong>Explanation:</strong> There are 25 good strings starting with 'a': "aa","ac","ad",...,"az". Then there are 25 good strings starting with 'c': "ca","cc","cd",...,"cz" and finally there is one good string starting with 'd': "da". 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
<strong>Output:</strong> 0 
<strong>Explanation:</strong> All strings greater than or equal to s1 and smaller than or equal to s2 start with the prefix "leet", therefore, there is not any good string.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 2, s1 = "gx", s2 = "gz", evil = "x"
<strong>Output:</strong> 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>s1.length == n</code></li>
<li><code>s2.length == n</code></li>
<li><code>s1 &lt;= s2</code></li>
<li><code>1 &lt;= n &lt;= 500</code></li>
<li><code>1 &lt;= evil.length &lt;= 50</code></li>
<li>All strings consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;