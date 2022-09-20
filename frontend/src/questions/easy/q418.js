module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">418. Minimum Number of Operations to Convert Time</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two strings <code>current</code> and <code>correct</code> representing two <strong>24-hour times</strong>.</p>
<p>24-hour times are formatted as <code>"HH:MM"</code>, where <code>HH</code> is between <code>00</code> and <code>23</code>, and <code>MM</code> is between <code>00</code> and <code>59</code>. The earliest 24-hour time is <code>00:00</code>, and the latest is <code>23:59</code>.</p>
<p>In one operation you can increase the time <code>current</code> by <code>1</code>, <code>5</code>, <code>15</code>, or <code>60</code> minutes. You can perform this operation <strong>any</strong> number of times.</p>
<p>Return <em>the <strong>minimum number of operations</strong> needed to convert </em><code>current</code><em> to </em><code>correct</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> current = "02:30", correct = "04:35"
<strong>Output:</strong> 3
<strong>Explanation:
</strong>We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> current = "11:00", correct = "11:01"
<strong>Output:</strong> 1
<strong>Explanation:</strong> We only have to add one minute to current, so the minimum number of operations needed is 1.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>current</code> and <code>correct</code> are in the format <code>"HH:MM"</code></li>
<li><code>current &lt;= correct</code></li>
</ul>
</div></div><br><br></html> `;