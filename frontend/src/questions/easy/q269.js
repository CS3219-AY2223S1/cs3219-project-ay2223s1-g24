module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************************<div id="title">269. Number of Students Doing Homework at a Given Time</div>
*******************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>startTime</code> and <code>endTime</code> and given an integer <code>queryTime</code>.</p>
<p>The <code>ith</code> student started doing their homework at the time <code>startTime[i]</code> and finished it at time <code>endTime[i]</code>.</p>
<p>Return <em>the number of students</em> doing their homework at time <code>queryTime</code>. More formally, return the number of students where <code>queryTime</code> lays in the interval <code>[startTime[i], endTime[i]]</code> inclusive.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
<strong>Output:</strong> 1
<strong>Explanation:</strong> We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> startTime = [4], endTime = [4], queryTime = 4
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only student was doing their homework at the queryTime.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>startTime.length == endTime.length</code></li>
<li><code>1 &lt;= startTime.length &lt;= 100</code></li>
<li><code>1 &lt;= startTime[i] &lt;= endTime[i] &lt;= 1000</code></li>
<li><code>1 &lt;= queryTime &lt;= 1000</code></li>
</ul>
</div></div><br><br></html> `;