module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************<div id="title">825. Exam Room</div>
**************<div class="content__u3I1 question-content__JfgR"><div><p>There is an exam room with <code>n</code> seats in a single row labeled from <code>0</code> to <code>n - 1</code>.</p>
<p>When a student enters the room, they must sit in the seat that maximizes the distance to the closest person. If there are multiple such seats, they sit in the seat with the lowest number. If no one is in the room, then the student sits at seat number <code>0</code>.</p>
<p>Design a class that simulates the mentioned exam room.</p>
<p>Implement the <code>ExamRoom</code> class:</p>
<ul>
<li><code>ExamRoom(int n)</code> Initializes the object of the exam room with the number of the seats <code>n</code>.</li>
<li><code>int seat()</code> Returns the label of the seat at which the next student will set.</li>
<li><code>void leave(int p)</code> Indicates that the student sitting at seat <code>p</code> will leave the room. It is guaranteed that there will be a student sitting at seat <code>p</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"]
[[10], [], [], [], [], [4], []]
<strong>Output</strong>
[null, 0, 9, 4, 2, null, 5]

<strong>Explanation</strong>
ExamRoom examRoom = new ExamRoom(10);
examRoom.seat(); // return 0, no one is in the room, then the student sits at seat number 0.
examRoom.seat(); // return 9, the student sits at the last seat number 9.
examRoom.seat(); // return 4, the student sits at the last seat number 4.
examRoom.seat(); // return 2, the student sits at the last seat number 2.
examRoom.leave(4);
examRoom.seat(); // return 5, the student sits at the last seat number 5.

</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
<li>It is guaranteed that there is a student sitting at seat <code>p</code>.</li>
<li>At most <code>10<sup>4</sup></code> calls will be made to <code>seat</code> and <code>leave</code>.</li>
</ul>
</div></div><br><br></html> `;