module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">780. Swap Adjacent in LR String</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>In a string composed of <code>'L'</code>, <code>'R'</code>, and <code>'X'</code> characters, like <code>"RXXLRXRXL"</code>, a move consists of either replacing one occurrence of <code>"XL"</code> with <code>"LX"</code>, or replacing one occurrence of <code>"RX"</code> with <code>"XR"</code>. Given the starting string <code>start</code> and the ending string <code>end</code>, return <code>True</code> if and only if there exists a sequence of moves to transform one string to the other.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> start = "RXXLRXRXL", end = "XRLXXRRLX"
<strong>Output:</strong> true
<strong>Explanation:</strong> We can transform start to end following these steps:
RXXLRXRXL -&gt;
XRXLRXRXL -&gt;
XRLXRXRXL -&gt;
XRLXXRRXL -&gt;
XRLXXRRLX
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> start = "X", end = "L"
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= start.length &lt;= 10<sup>4</sup></code></li>
<li><code>start.length == end.length</code></li>
<li>Both <code>start</code> and <code>end</code> will only consist of characters in <code>'L'</code>, <code>'R'</code>, and <code>'X'</code>.</li>
</ul>
</div></div><br><br></html> `;