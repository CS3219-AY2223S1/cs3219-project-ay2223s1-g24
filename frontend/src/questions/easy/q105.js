module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">105. Student Attendance Record I</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:</p>
<ul>
<li><code>'A'</code>: Absent.</li>
<li><code>'L'</code>: Late.</li>
<li><code>'P'</code>: Present.</li>
</ul>
<p>The student is eligible for an attendance award if they meet <strong>both</strong> of the following criteria:</p>
<ul>
<li>The student was absent (<code>'A'</code>) for <strong>strictly</strong> fewer than 2 days <strong>total</strong>.</li>
<li>The student was <strong>never</strong> late (<code>'L'</code>) for 3 or more <strong>consecutive</strong> days.</li>
</ul>
<p>Return <code>true</code><em> if the student is eligible for an attendance award, or </em><code>false</code><em> otherwise</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "PPALLP"
<strong>Output:</strong> true
<strong>Explanation:</strong> The student has fewer than 2 absences and was never late 3 or more consecutive days.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "PPALLL"
<strong>Output:</strong> false
<strong>Explanation:</strong> The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s[i]</code> is either <code>'A'</code>, <code>'L'</code>, or <code>'P'</code>.</li>
</ul>
</div></div><br><br></html> `;