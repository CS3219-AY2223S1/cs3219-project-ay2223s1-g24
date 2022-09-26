module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************<div id="title">818. Longest Mountain in Array</div>
******************************<div class="content__u3I1 question-content__JfgR"><div><p>You may recall that an array <code>arr</code> is a <strong>mountain array</strong> if and only if:</p>
<ul>
<li><code>arr.length &gt;= 3</code></li>
<li>There exists some index <code>i</code> (<strong>0-indexed</strong>) with <code>0 &lt; i &lt; arr.length - 1</code> such that:
	<ul>
<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li>
<li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li>
</ul>
</li>
</ul>
<p>Given an integer array <code>arr</code>, return <em>the length of the longest subarray, which is a mountain</em>. Return <code>0</code> if there is no mountain subarray.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [2,1,4,7,3,2,5]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The largest mountain is [1,4,7,3,2] which has length 5.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [2,2,2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no mountain.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<ul>
<li>Can you solve it using only one pass?</li>
<li>Can you solve it in <code>O(1)</code> space?</li>
</ul>
</div></div><br><br></html> `;