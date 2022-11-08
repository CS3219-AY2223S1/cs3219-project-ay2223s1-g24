module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">1581. Three Equal Parts</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>arr</code> which consists of only zeros and ones, divide the array into <strong>three non-empty parts</strong> such that all of these parts represent the same binary value.</p>
<p>If it is possible, return any <code>[i, j]</code> with <code>i + 1 &lt; j</code>, such that:</p>
<ul>
<li><code>arr[0], arr[1], ..., arr[i]</code> is the first part,</li>
<li><code>arr[i + 1], arr[i + 2], ..., arr[j - 1]</code> is the second part, and</li>
<li><code>arr[j], arr[j + 1], ..., arr[arr.length - 1]</code> is the third part.</li>
<li>All three parts have equal binary values.</li>
</ul>
<p>If it is not possible, return <code>[-1, -1]</code>.</p>
<p>Note that the entire part is used when considering what binary value it represents. For example, <code>[1,1,0]</code> represents <code>6</code> in decimal, not <code>3</code>. Also, leading zeros <strong>are allowed</strong>, so <code>[0,1,1]</code> and <code>[1,1]</code> represent the same value.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = [1,0,1,0,1]
<strong>Output:</strong> [0,3]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = [1,1,0,1,1]
<strong>Output:</strong> [-1,-1]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = [1,1,0,0,1]
<strong>Output:</strong> [0,2]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= arr.length &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>arr[i]</code> is <code>0</code> or <code>1</code></li>
</ul>
</div></div><br><br></html> `;