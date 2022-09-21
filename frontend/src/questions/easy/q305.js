module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************************<div id="title">305. Check Array Formation Through Concatenation</div>
*************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of <strong>distinct</strong> integers <code>arr</code> and an array of integer arrays <code>pieces</code>, where the integers in <code>pieces</code> are <strong>distinct</strong>. Your goal is to form <code>arr</code> by concatenating the arrays in <code>pieces</code> <strong>in any order</strong>. However, you are <strong>not</strong> allowed to reorder the integers in each array <code>pieces[i]</code>.</p>
<p>Return <code>true</code> <em>if it is possible </em><em>to form the array </em><code>arr</code><em> from </em><code>pieces</code>. Otherwise, return <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [15,88], pieces = [[88],[15]]
<strong>Output:</strong> true
<strong>Explanation:</strong> Concatenate [15] then [88]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [49,18,16], pieces = [[16,18,49]]
<strong>Output:</strong> false
<strong>Explanation:</strong> Even though the numbers match, we cannot reorder pieces[0].
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
<strong>Output:</strong> true
<strong>Explanation:</strong> Concatenate [91] then [4,64] then [78]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= pieces.length &lt;= arr.length &lt;= 100</code></li>
<li><code>sum(pieces[i].length) == arr.length</code></li>
<li><code>1 &lt;= pieces[i].length &lt;= arr.length</code></li>
<li><code>1 &lt;= arr[i], pieces[i][j] &lt;= 100</code></li>
<li>The integers in <code>arr</code> are <strong>distinct</strong>.</li>
<li>The integers in <code>pieces</code> are <strong>distinct</strong> (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).</li>
</ul>
</div></div><br><br></html> `;