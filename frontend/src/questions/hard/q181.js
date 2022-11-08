module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************<div id="title">1611. Smallest Sufficient Team</div>
******************************<div class="content__u3I1 question-content__JfgR"><div><p>In a project, you have a list of required skills <code>req_skills</code>, and a list of people. The <code>i<sup>th</sup></code> person <code>people[i]</code> contains a list of skills that the person has.</p>
<p>Consider a sufficient team: a set of people such that for every required skill in <code>req_skills</code>, there is at least one person in the team who has that skill. We can represent these teams by the index of each person.</p>
<ul>
<li>For example, <code>team = [0, 1, 3]</code> represents the people with skills <code>people[0]</code>, <code>people[1]</code>, and <code>people[3]</code>.</li>
</ul>
<p>Return <em>any sufficient team of the smallest possible size, represented by the index of each person</em>. You may return the answer in <strong>any order</strong>.</p>
<p>It is <strong>guaranteed</strong> an answer exists.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
<strong>Output:</strong> [0,2]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
<strong>Output:</strong> [1,2]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= req_skills.length &lt;= 16</code></li>
<li><code>1 &lt;= req_skills[i].length &lt;= 16</code></li>
<li><code>req_skills[i]</code> consists of lowercase English letters.</li>
<li>All the strings of <code>req_skills</code> are <strong>unique</strong>.</li>
<li><code>1 &lt;= people.length &lt;= 60</code></li>
<li><code>0 &lt;= people[i].length &lt;= 16</code></li>
<li><code>1 &lt;= people[i][j].length &lt;= 16</code></li>
<li><code>people[i][j]</code> consists of lowercase English letters.</li>
<li>All the strings of <code>people[i]</code> are <strong>unique</strong>.</li>
<li>Every skill in <code>people[i]</code> is a skill in <code>req_skills</code>.</li>
<li>It is guaranteed a sufficient team exists.</li>
</ul>
</div></div><br><br></html> `;