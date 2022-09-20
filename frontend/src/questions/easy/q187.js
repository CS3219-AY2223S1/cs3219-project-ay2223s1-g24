module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">187. Delete Columns to Make Sorted</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of <code>n</code> strings <code>strs</code>, all of the same length.</p>
<p>The strings can be arranged such that there is one on each line, making a grid. For example, <code>strs = ["abc", "bce", "cae"]</code> can be arranged as:</p>
<pre>abc
bce
cae
</pre>
<p>You want to <strong>delete</strong> the columns that are <strong>not sorted lexicographically</strong>. In the above example (0-indexed), columns 0 (<code>'a'</code>, <code>'b'</code>, <code>'c'</code>) and 2 (<code>'c'</code>, <code>'e'</code>, <code>'e'</code>) are sorted while column 1 (<code>'b'</code>, <code>'c'</code>, <code>'a'</code>) is not, so you would delete column 1.</p>
<p>Return <em>the number of columns that you will delete</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["cba","daf","ghi"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> strs = ["a","b"]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> strs = ["zyx","wvu","tsr"]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == strs.length</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>1 &lt;= strs[i].length &lt;= 1000</code></li>
<li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;