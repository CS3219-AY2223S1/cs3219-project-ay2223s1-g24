module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************<div id="title">1644. Jump Game V</div>
*****************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>arr</code> and an integer <code>d</code>. In one step you can jump from index <code>i</code> to index:</p>
<ul>
<li><code>i + x</code> where: <code>i + x &lt; arr.length</code> and <code> 0 &lt; x &lt;= d</code>.</li>
<li><code>i - x</code> where: <code>i - x &gt;= 0</code> and <code> 0 &lt; x &lt;= d</code>.</li>
</ul>
<p>In addition, you can only jump from index <code>i</code> to index <code>j</code> if <code>arr[i] &gt; arr[j]</code> and <code>arr[i] &gt; arr[k]</code> for all indices <code>k</code> between <code>i</code> and <code>j</code> (More formally <code>min(i, j) &lt; k &lt; max(i, j)</code>).</p>
<p>You can choose any index of the array and start jumping. Return <em>the maximum number of indices</em> you can visit.</p>
<p>Notice that you can not jump outside of the array at any time.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/23/meta-chart.jpeg" style="width: 633px; height: 419px;"/>
<pre><strong>Input:</strong> arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can start at index 10. You can jump 10 --&gt; 8 --&gt; 6 --&gt; 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 &gt; 9. You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 &gt; 9.
Similarly You cannot jump from index 3 to index 2 or index 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [3,3,3,3,3], d = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can start at any index. You always cannot jump to any index.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [7,6,5,4,3,2,1], d = 1
<strong>Output:</strong> 7
<strong>Explanation:</strong> Start at index 0. You can visit all the indicies. 
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 1000</code></li>
<li><code>1 &lt;= arr[i] &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= d &lt;= arr.length</code></li>
</ul>
</div></div><br><br></html> `;