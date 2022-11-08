module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">821. Maximize Distance to Closest Person</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array representing a row of <code>seats</code> where <code>seats[i] = 1</code> represents a person sitting in the <code>i<sup>th</sup></code> seat, and <code>seats[i] = 0</code> represents that the <code>i<sup>th</sup></code> seat is empty <strong>(0-indexed)</strong>.</p>
<p>There is at least one empty seat, and at least one person sitting.</p>
<p>Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. </p>
<p>Return <em>that maximum distance to the closest person</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/10/distance.jpg" style="width: 650px; height: 257px;"/>
<pre><strong>Input:</strong> seats = [1,0,0,0,1,0,1]
<strong>Output:</strong> 2
<strong>Explanation: </strong>
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> seats = [1,0,0,0]
<strong>Output:</strong> 3
<strong>Explanation: </strong>
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> seats = [0,1]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= seats.length &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>seats[i]</code> is <code>0</code> or <code>1</code>.</li>
<li>At least one seat is <strong>empty</strong>.</li>
<li>At least one seat is <strong>occupied</strong>.</li>
</ul>
</div></div><br><br></html> `;