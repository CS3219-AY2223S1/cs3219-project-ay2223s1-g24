module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">301. Mean of Array After Removing Some Elements</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>arr</code>, return <em>the mean of the remaining integers after removing the smallest <code>5%</code> and the largest <code>5%</code> of the elements.</em></p>
<p>Answers within <code>10<sup>-5</sup></code> of the <strong>actual answer</strong> will be considered accepted.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
<strong>Output:</strong> 4.00000
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
<strong>Output:</strong> 4.77778
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>20 &lt;= arr.length &lt;= 1000</code></li>
<li><code>arr.length</code><b> </b><strong>is a multiple</strong> of <code>20</code>.</li>
<li><code><font face="monospace">0 &lt;= arr[i] &lt;= 10<sup>5</sup></font></code></li>
</ul>
</div></div><br><br></html> `;