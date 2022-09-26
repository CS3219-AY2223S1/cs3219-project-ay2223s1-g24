module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************************************<div id="title">1681. Find a Value of a Mysterious Function Closest to Target</div>
*************************************************************<div class="content__u3I1 question-content__JfgR"><div><p><img alt="" src="https://assets.leetcode.com/uploads/2020/07/09/change.png" style="width: 635px; height: 312px;"/></p>
<p>Winston was given the above mysterious function <code>func</code>. He has an integer array <code>arr</code> and an integer <code>target</code> and he wants to find the values <code>l</code> and <code>r</code> that make the value <code>|func(arr, l, r) - target|</code> minimum possible.</p>
<p>Return <em>the minimum possible value</em> of <code>|func(arr, l, r) - target|</code>.</p>
<p>Notice that <code>func</code> should be called with the values <code>l</code> and <code>r</code> where <code>0 &lt;= l, r &lt; arr.length</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [9,12,3,7,15], target = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Calling func with all the pairs of [l,r] = [[0,0],[1,1],[2,2],[3,3],[4,4],[0,1],[1,2],[2,3],[3,4],[0,2],[1,3],[2,4],[0,3],[1,4],[0,4]], Winston got the following results [9,12,3,7,15,8,0,3,7,0,0,3,0,0,0]. The value closest to 5 is 7 and 3, thus the minimum difference is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1000000,1000000,1000000], target = 1
<strong>Output:</strong> 999999
<strong>Explanation:</strong> Winston called the func with all possible values of [l,r] and he always got 1000000, thus the min difference is 999999.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,4,8,16], target = 0
<strong>Output:</strong> 0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= arr[i] &lt;= 10<sup>6</sup></code></li>
<li><code>0 &lt;= target &lt;= 10<sup>7</sup></code></li>
</ul>
</div></div><br><br></html> `;