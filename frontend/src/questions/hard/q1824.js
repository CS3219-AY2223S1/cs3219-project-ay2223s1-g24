module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************************<div id="title">1824. Check if There Is a Valid Parentheses String Path</div>
********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>A parentheses string is a <strong>non-empty</strong> string consisting only of <code>'('</code> and <code>')'</code>. It is <strong>valid</strong> if <strong>any</strong> of the following conditions is <strong>true</strong>:</p>
<ul>
<li>It is <code>()</code>.</li>
<li>It can be written as <code>AB</code> (<code>A</code> concatenated with <code>B</code>), where <code>A</code> and <code>B</code> are valid parentheses strings.</li>
<li>It can be written as <code>(A)</code>, where <code>A</code> is a valid parentheses string.</li>
</ul>
<p>You are given an <code>m x n</code> matrix of parentheses <code>grid</code>. A <strong>valid parentheses string path</strong> in the grid is a path satisfying <strong>all</strong> of the following conditions:</p>
<ul>
<li>The path starts from the upper left cell <code>(0, 0)</code>.</li>
<li>The path ends at the bottom-right cell <code>(m - 1, n - 1)</code>.</li>
<li>The path only ever moves <strong>down</strong> or <strong>right</strong>.</li>
<li>The resulting parentheses string formed by the path is <strong>valid</strong>.</li>
</ul>
<p>Return <code>true</code> <em>if there exists a <strong>valid parentheses string path</strong> in the grid.</em> Otherwise, return <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png" style="width: 521px; height: 300px;"/>
<pre><strong>Input:</strong> grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string "()(())".
The second path shown results in the valid parentheses string "((()))".
Note that there may be other valid parentheses string paths.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/15/example2drawio.png" style="width: 165px; height: 165px;"/>
<pre><strong>Input:</strong> grid = [[")",")"],["(","("]]
<strong>Output:</strong> false
<strong>Explanation:</strong> The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == grid.length</code></li>
<li><code>n == grid[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 100</code></li>
<li><code>grid[i][j]</code> is either <code>'('</code> or <code>')'</code>.</li>
</ul>
</div></div><br><br></html> `;