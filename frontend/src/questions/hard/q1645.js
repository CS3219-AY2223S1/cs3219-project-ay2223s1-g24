module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">1645. Jump Game IV</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>arr</code>, you are initially positioned at the first index of the array.</p>
<p>In one step you can jump from index <code>i</code> to index:</p>
<ul>
<li><code>i + 1</code> where: <code>i + 1 &lt; arr.length</code>.</li>
<li><code>i - 1</code> where: <code>i - 1 &gt;= 0</code>.</li>
<li><code>j</code> where: <code>arr[i] == arr[j]</code> and <code>i != j</code>.</li>
</ul>
<p>Return <em>the minimum number of steps</em> to reach the <strong>last index</strong> of the array.</p>
<p>Notice that you can not jump outside of the array at any time.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [100,-23,-23,404,100,23,23,23,3,404]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You need three jumps from index 0 --&gt; 4 --&gt; 3 --&gt; 9. Note that index 9 is the last index of the array.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [7]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Start index is the last index. You do not need to jump.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [7,6,9,6,9,6,9,7]
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can jump directly from index 0 to index 7 which is last index of the array.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-10<sup>8</sup> &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>
</ul>
</div></div><br><br></html> `;