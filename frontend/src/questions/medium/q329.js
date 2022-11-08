module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">785. K-th Smallest Prime Fraction</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a sorted integer array <code>arr</code> containing <code>1</code> and <strong>prime</strong> numbers, where all the integers of <code>arr</code> are unique. You are also given an integer <code>k</code>.</p>
<p>For every <code>i</code> and <code>j</code> where <code>0 &lt;= i &lt; j &lt; arr.length</code>, we consider the fraction <code>arr[i] / arr[j]</code>.</p>
<p>Return <em>the</em> <code>k<sup>th</sup></code> <em>smallest fraction considered</em>. Return your answer as an array of integers of size <code>2</code>, where <code>answer[0] == arr[i]</code> and <code>answer[1] == arr[j]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,3,5], k = 3
<strong>Output:</strong> [2,5]
<strong>Explanation:</strong> The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,7], k = 1
<strong>Output:</strong> [1,7]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= arr.length &lt;= 1000</code></li>
<li><code>1 &lt;= arr[i] &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>arr[0] == 1</code></li>
<li><code>arr[i]</code> is a <strong>prime</strong> number for <code>i &gt; 0</code>.</li>
<li>All the numbers of <code>arr</code> are <strong>unique</strong> and sorted in <strong>strictly increasing</strong> order.</li>
<li><code>1 &lt;= k &lt;= arr.length * (arr.length - 1) / 2</code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Can you solve the problem with better than <code>O(n<sup>2</sup>)</code> complexity?</div></div><br><br></html> `;