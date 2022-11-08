module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************************<div id="title">349. Longer Contiguous Segments of Ones than Zeros</div>
***************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary string <code>s</code>, return <code>true</code><em> if the <strong>longest</strong> contiguous segment of </em><code>1</code>'<em>s is <strong>strictly longer</strong> than the <strong>longest</strong> contiguous segment of </em><code>0</code>'<em>s in </em><code>s</code>, or return <code>false</code><em> otherwise</em>.</p>
<ul>
<li>For example, in <code>s = "<u>11</u>01<u>000</u>10"</code> the longest continuous segment of <code>1</code>s has length <code>2</code>, and the longest continuous segment of <code>0</code>s has length <code>3</code>.</li>
</ul>
<p>Note that if there are no <code>0</code>'s, then the longest continuous segment of <code>0</code>'s is considered to have a length <code>0</code>. The same applies if there is no <code>1</code>'s.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "1101"
<strong>Output:</strong> true
<strong>Explanation:</strong>
The longest contiguous segment of 1s has length 2: "<u>11</u>01"
The longest contiguous segment of 0s has length 1: "11<u>0</u>1"
The segment of 1s is longer, so return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "111000"
<strong>Output:</strong> false
<strong>Explanation:</strong>
The longest contiguous segment of 1s has length 3: "<u>111</u>000"
The longest contiguous segment of 0s has length 3: "111<u>000</u>"
The segment of 1s is not longer, so return false.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "110100010"
<strong>Output:</strong> false
<strong>Explanation:</strong>
The longest contiguous segment of 1s has length 2: "<u>11</u>0100010"
The longest contiguous segment of 0s has length 3: "1101<u>000</u>10"
The segment of 1s is not longer, so return false.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
</ul>
</div></div><br><br></html> `;