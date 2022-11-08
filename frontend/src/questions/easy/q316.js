module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">316. Number of Students Unable to Eat Lunch</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers <code>0</code> and <code>1</code> respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.</p>
<p>The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a <strong>stack</strong>. At each step:</p>
<ul>
<li>If the student at the front of the queue <strong>prefers</strong> the sandwich on the top of the stack, they will <strong>take it</strong> and leave the queue.</li>
<li>Otherwise, they will <strong>leave it</strong> and go to the queue's end.</li>
</ul>
<p>This continues until none of the queue students want to take the top sandwich and are thus unable to eat.</p>
<p>You are given two integer arrays <code>students</code> and <code>sandwiches</code> where <code>sandwiches[i]</code> is the type of the <code>i<sup>​​​​​​th</sup></code> sandwich in the stack (<code>i = 0</code> is the top of the stack) and <code>students[j]</code> is the preference of the <code>j<sup>​​​​​​th</sup></code> student in the initial queue (<code>j = 0</code> is the front of the queue). Return <em>the number of students that are unable to eat.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> students = [1,1,0,0], sandwiches = [0,1,0,1]
<strong>Output:</strong> 0<strong> 
Explanation:</strong>
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= students.length, sandwiches.length &lt;= 100</code></li>
<li><code>students.length == sandwiches.length</code></li>
<li><code>sandwiches[i]</code> is <code>0</code> or <code>1</code>.</li>
<li><code>students[i]</code> is <code>0</code> or <code>1</code>.</li>
</ul>
</div></div><br><br></html> `;