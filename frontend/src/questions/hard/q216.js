module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">1646. Maximum Students Taking Exam</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>m * n</code> matrix <code>seats</code>  that represent seats distributions in a classroom. If a seat is broken, it is denoted by <code>'#'</code> character otherwise it is denoted by a <code>'.'</code> character.</p>
<p>Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting directly in front or behind him. Return the <strong>maximum </strong>number of students that can take the exam together without any cheating being possible..</p>
<p>Students must be placed in seats in good condition.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img height="200" src="https://assets.leetcode.com/uploads/2020/01/29/image.png" width="339"/>
<pre><strong>Input:</strong> seats = [["#",".","#","#",".","#"],
                [".","#","#","#","#","."],
                ["#",".","#","#",".","#"]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Teacher can place 4 students in available seats so they don't cheat on the exam. 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> seats = [[".","#"],
                ["#","#"],
                ["#","."],
                ["#","#"],
                [".","#"]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Place all students in available seats. 

</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> seats = [["#",".","<strong>.</strong>",".","#"],
                ["<strong>.</strong>","#","<strong>.</strong>","#","<strong>.</strong>"],
                ["<strong>.</strong>",".","#",".","<strong>.</strong>"],
                ["<strong>.</strong>","#","<strong>.</strong>","#","<strong>.</strong>"],
                ["#",".","<strong>.</strong>",".","#"]]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Place students in available seats in column 1, 3 and 5.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>seats</code> contains only characters <code>'.'<font face="sans-serif, Arial, Verdana, Trebuchet MS"> and</font></code><code>'#'.</code></li>
<li><code>m == seats.length</code></li>
<li><code>n == seats[i].length</code></li>
<li><code>1 &lt;= m &lt;= 8</code></li>
<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>
</div></div><br><br></html> `;