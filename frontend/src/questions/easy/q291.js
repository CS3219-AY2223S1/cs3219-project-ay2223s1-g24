module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************<div id="title">291. Detect Pattern of Length M Repeated K or More Times</div>
*********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of positive integers <code>arr</code>, find a pattern of length <code>m</code> that is repeated <code>k</code> or more times.</p>
<p>A <strong>pattern</strong> is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times <strong>consecutively </strong>without overlapping. A pattern is defined by its length and the number of repetitions.</p>
<p>Return <code>true</code> <em>if there exists a pattern of length</em> <code>m</code> <em>that is repeated</em> <code>k</code> <em>or more times, otherwise return</em> <code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,4,4,4,4], m = 1, k = 3
<strong>Output:</strong> true
<strong>Explanation: </strong>The pattern <strong>(4)</strong> of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
<strong>Output:</strong> true
<strong>Explanation: </strong>The pattern <strong>(1,2)</strong> of length 2 is repeated 2 consecutive times. Another valid pattern <strong>(2,1) is</strong> also repeated 2 times.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,1,2,1,3], m = 2, k = 3
<strong>Output:</strong> false
<strong>Explanation: </strong>The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= arr.length &lt;= 100</code></li>
<li><code>1 &lt;= arr[i] &lt;= 100</code></li>
<li><code>1 &lt;= m &lt;= 100</code></li>
<li><code>2 &lt;= k &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;