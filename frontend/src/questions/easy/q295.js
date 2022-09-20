module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">295. Sum of All Odd Length Subarrays</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of positive integers <code>arr</code>, return <em>the sum of all possible <strong>odd-length subarrays</strong> of </em><code>arr</code>.</p>
<p>A <strong>subarray</strong> is a contiguous subsequence of the array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,4,2,5,3]
<strong>Output:</strong> 58
<strong>Explanation: </strong>The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,2]
<strong>Output:</strong> 3
<b>Explanation: </b>There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [10,11,12]
<strong>Output:</strong> 66
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 100</code></li>
<li><code>1 &lt;= arr[i] &lt;= 1000</code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<p>Could you solve this problem in O(n) time complexity?</p>
</div></div><br><br></html> `;