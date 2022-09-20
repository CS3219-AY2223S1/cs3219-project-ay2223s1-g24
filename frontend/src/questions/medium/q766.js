module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">766. My Calendar II</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a <strong>triple booking</strong>.</p>
<p>A <strong>triple booking</strong> happens when three events have some non-empty intersection (i.e., some moment is common to all the three events.).</p>
<p>The event can be represented as a pair of integers <code>start</code> and <code>end</code> that represents a booking on the half-open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.</p>
<p>Implement the <code>MyCalendarTwo</code> class:</p>
<ul>
<li><code>MyCalendarTwo()</code> Initializes the calendar object.</li>
<li><code>boolean book(int start, int end)</code> Returns <code>true</code> if the event can be added to the calendar successfully without causing a <strong>triple booking</strong>. Otherwise, return <code>false</code> and do not add the event to the calendar.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
<strong>Output</strong>
[null, true, true, true, false, true, true]

<strong>Explanation</strong>
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return True, The event can be booked. 
myCalendarTwo.book(50, 60); // return True, The event can be booked. 
myCalendarTwo.book(10, 40); // return True, The event can be double booked. 
myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= start &lt; end &lt;= 10<sup>9</sup></code></li>
<li>At most <code>1000</code> calls will be made to <code>book</code>.</li>
</ul>
</div></div><br><br></html> `;