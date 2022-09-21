module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">735. Find K Closest Elements</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>sorted</strong> integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p>
<p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p>
<ul>
<li><code>|a - x| &lt; |b - x|</code>, or</li>
<li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3
<strong>Output:</strong> [1,2,3,4]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = -1
<strong>Output:</strong> [1,2,3,4]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= arr.length</code></li>
<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
<li><code>arr</code> is sorted in <strong>ascending</strong> order.</li>
<li><code>-10<sup>4</sup> &lt;= arr[i], x &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;