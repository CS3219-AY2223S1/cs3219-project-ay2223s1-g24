module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1510. Student Attendance Record II</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:</p>
<ul>
<li><code>'A'</code>: Absent.</li>
<li><code>'L'</code>: Late.</li>
<li><code>'P'</code>: Present.</li>
</ul>
<p>Any student is eligible for an attendance award if they meet <strong>both</strong> of the following criteria:</p>
<ul>
<li>The student was absent (<code>'A'</code>) for <strong>strictly</strong> fewer than 2 days <strong>total</strong>.</li>
<li>The student was <strong>never</strong> late (<code>'L'</code>) for 3 or more <strong>consecutive</strong> days.</li>
</ul>
<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of possible attendance records of length</em> <code>n</code><em> that make a student eligible for an attendance award. The answer may be very large, so return it <strong>modulo</strong> </em><code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 3
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 10101
<strong>Output:</strong> 183236316
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;