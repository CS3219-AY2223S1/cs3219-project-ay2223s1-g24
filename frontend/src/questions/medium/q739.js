module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">739. Beautiful Arrangement II</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integers <code>n</code> and <code>k</code>, construct a list <code>answer</code> that contains <code>n</code> different positive integers ranging from <code>1</code> to <code>n</code> and obeys the following requirement:</p>
<ul>
<li>Suppose this list is <code>answer = [a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ... , a<sub>n</sub>]</code>, then the list <code>[|a<sub>1</sub> - a<sub>2</sub>|, |a<sub>2</sub> - a<sub>3</sub>|, |a<sub>3</sub> - a<sub>4</sub>|, ... , |a<sub>n-1</sub> - a<sub>n</sub>|]</code> has exactly <code>k</code> distinct integers.</li>
</ul>
<p>Return <em>the list</em> <code>answer</code>. If there multiple valid answers, return <strong>any of them</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> [1,2,3]
Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 2
<strong>Output:</strong> [1,3,2]
Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt; n &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;