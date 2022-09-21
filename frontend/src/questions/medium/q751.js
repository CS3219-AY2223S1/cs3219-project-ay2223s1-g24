module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">751. Employee Importance</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.</p>
<p>You are given an array of employees <code>employees</code> where:</p>
<ul>
<li><code>employees[i].id</code> is the ID of the <code>i<sup>th</sup></code> employee.</li>
<li><code>employees[i].importance</code> is the importance value of the <code>i<sup>th</sup></code> employee.</li>
<li><code>employees[i].subordinates</code> is a list of the IDs of the direct subordinates of the <code>i<sup>th</sup></code> employee.</li>
</ul>
<p>Given an integer <code>id</code> that represents an employee's ID, return <em>the <strong>total</strong> importance value of this employee and all their direct and indirect subordinates</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/31/emp1-tree.jpg" style="width: 400px; height: 258px;"/>
<pre><strong>Input:</strong> employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
<strong>Output:</strong> 11
<strong>Explanation:</strong> Employee 1 has an importance value of 5 and has two direct subordinates: employee 2 and employee 3.
They both have an importance value of 3.
Thus, the total importance value of employee 1 is 5 + 3 + 3 = 11.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/31/emp2-tree.jpg" style="width: 362px; height: 361px;"/>
<pre><strong>Input:</strong> employees = [[1,2,[5]],[5,-3,[]]], id = 5
<strong>Output:</strong> -3
<strong>Explanation:</strong> Employee 5 has an importance value of -3 and has no direct subordinates.
Thus, the total importance value of employee 5 is -3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= employees.length &lt;= 2000</code></li>
<li><code>1 &lt;= employees[i].id &lt;= 2000</code></li>
<li>All <code>employees[i].id</code> are <strong>unique</strong>.</li>
<li><code>-100 &lt;= employees[i].importance &lt;= 100</code></li>
<li>One employee has at most one direct leader and may have several subordinates.</li>
<li>The IDs in <code>employees[i].subordinates</code> are valid IDs.</li>
</ul>
</div></div><br><br></html> `;