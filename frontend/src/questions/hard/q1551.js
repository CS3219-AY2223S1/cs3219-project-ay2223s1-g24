module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">1551. Split Array With Same Average</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code>.</p>
<p>You should move each element of <code>nums</code> into one of the two arrays <code>A</code> and <code>B</code> such that <code>A</code> and <code>B</code> are non-empty, and <code>average(A) == average(B)</code>.</p>
<p>Return <code>true</code> if it is possible to achieve that and <code>false</code> otherwise.</p>
<p><strong>Note</strong> that for an array <code>arr</code>, <code>average(arr)</code> is the sum of all the elements of <code>arr</code> over the length of <code>arr</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,5,6,7,8]
<strong>Output:</strong> true
<strong>Explanation:</strong> We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have an average of 4.5.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,1]
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 30</code></li>
<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;