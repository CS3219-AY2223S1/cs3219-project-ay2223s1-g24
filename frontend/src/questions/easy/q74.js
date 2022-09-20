module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************<div id="title">74. Binary Watch</div>
*****************<div class="content__u3I1 question-content__JfgR"><div><p>A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.</p>
<ul>
<li>For example, the below binary watch reads <code>"4:51"</code>.</li>
</ul>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg" style="width: 500px; height: 500px;"/></p>
<p>Given an integer <code>turnedOn</code> which represents the number of LEDs that are currently on (ignoring the PM), return <em>all possible times the watch could represent</em>. You may return the answer in <strong>any order</strong>.</p>
<p>The hour must not contain a leading zero.</p>
<ul>
<li>For example, <code>"01:00"</code> is not valid. It should be <code>"1:00"</code>.</li>
</ul>
<p>The minute must be consist of two digits and may contain a leading zero.</p>
<ul>
<li>For example, <code>"10:2"</code> is not valid. It should be <code>"10:02"</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> turnedOn = 1
<strong>Output:</strong> ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> turnedOn = 9
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= turnedOn &lt;= 10</code></li>
</ul>
</div></div><br><br></html> `;