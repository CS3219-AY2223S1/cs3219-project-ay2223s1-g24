module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">1617. Make Array Strictly Increasing</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>arr1</code> and <code>arr2</code>, return the minimum number of operations (possibly zero) needed to make <code>arr1</code> strictly increasing.</p>
<p>In one operation, you can choose two indices <code>0 &lt;= i &lt; arr1.length</code> and <code>0 &lt;= j &lt; arr2.length</code> and do the assignment <code>arr1[i] = arr2[j]</code>.</p>
<p>If there is no way to make <code>arr1</code> strictly increasing, return <code>-1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Replace <code>5</code> with <code>2</code>, then <code>arr1 = [1, 2, 3, 6, 7]</code>.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [4,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Replace <code>5</code> with <code>3</code> and then replace <code>3</code> with <code>4</code>. <code>arr1 = [1, 3, 4, 6, 7]</code>.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong> You can't make <code>arr1</code> strictly increasing.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr1.length, arr2.length &lt;= 2000</code></li>
<li><code>0 &lt;= arr1[i], arr2[i] &lt;= 10^9</code></li>
</ul>
<p> </p></div></div><br><br></html> `;