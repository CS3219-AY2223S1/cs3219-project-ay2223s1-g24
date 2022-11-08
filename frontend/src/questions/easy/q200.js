module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************************<div id="title">200. Partition Array Into Three Parts With Equal Sum</div>
*****************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>arr</code>, return <code>true</code> if we can partition the array into three <strong>non-empty</strong> parts with equal sums.</p>
<p>Formally, we can partition the array if we can find indexes <code>i + 1 &lt; j</code> with <code>(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])</code></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [0,2,1,-6,6,-7,9,1,2,0,1]
<strong>Output:</strong> true
<strong>Explanation: </strong>0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [0,2,1,-6,6,7,9,-1,2,0,1]
<strong>Output:</strong> false
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [3,3,6,5,-2,2,5,1,-9,4]
<strong>Output:</strong> true
<strong>Explanation: </strong>3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>-10<sup>4</sup> &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;