module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">742. Bulb Switcher II</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>There is a room with <code>n</code> bulbs labeled from <code>1</code> to <code>n</code> that all are turned on initially, and <strong>four buttons</strong> on the wall. Each of the four buttons has a different functionality where:</p>
<ul>
<li><strong>Button 1:</strong> Flips the status of all the bulbs.</li>
<li><strong>Button 2:</strong> Flips the status of all the bulbs with even labels (i.e., <code>2, 4, ...</code>).</li>
<li><strong>Button 3:</strong> Flips the status of all the bulbs with odd labels (i.e., <code>1, 3, ...</code>).</li>
<li><strong>Button 4:</strong> Flips the status of all the bulbs with a label <code>j = 3k + 1</code> where <code>k = 0, 1, 2, ...</code> (i.e., <code>1, 4, 7, 10, ...</code>).</li>
</ul>
<p>You must make <strong>exactly</strong> <code>presses</code> button presses in total. For each press, you may pick <strong>any</strong> of the four buttons to press.</p>
<p>Given the two integers <code>n</code> and <code>presses</code>, return <em>the number of <strong>different possible statuses</strong> after performing all </em><code>presses</code><em> button presses</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 1, presses = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong> Status can be:
- [off] by pressing button 1
- [on] by pressing button 2
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2, presses = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> Status can be:
- [off, off] by pressing button 1
- [on, off] by pressing button 2
- [off, on] by pressing button 3
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 3, presses = 1
<strong>Output:</strong> 4
<strong>Explanation:</strong> Status can be:
- [off, off, off] by pressing button 1
- [off, on, off] by pressing button 2
- [on, off, on] by pressing button 3
- [off, on, on] by pressing button 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 1000</code></li>
<li><code>0 &lt;= presses &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;