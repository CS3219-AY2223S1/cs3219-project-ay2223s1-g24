module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">324. Maximum Number of Balls in a Box</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are working in a ball factory where you have <code>n</code> balls numbered from <code>lowLimit</code> up to <code>highLimit</code> <strong>inclusive</strong> (i.e., <code>n == highLimit - lowLimit + 1</code>), and an infinite number of boxes numbered from <code>1</code> to <code>infinity</code>.</p>
<p>Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number <code>321</code> will be put in the box number <code>3 + 2 + 1 = 6</code> and the ball number <code>10</code> will be put in the box number <code>1 + 0 = 1</code>.</p>
<p>Given two integers <code>lowLimit</code> and <code>highLimit</code>, return<em> the number of balls in the box with the most balls.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> lowLimit = 1, highLimit = 10
<strong>Output:</strong> 2
<strong>Explanation:</strong>
Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
Box 1 has the most number of balls with 2 balls.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> lowLimit = 5, highLimit = 15
<strong>Output:</strong> 2
<strong>Explanation:</strong>
Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
Ball Count:  1 1 1 1 2 2 1 1 1 0  0  ...
Boxes 5 and 6 have the most number of balls with 2 balls in each.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> lowLimit = 19, highLimit = 28
<strong>Output:</strong> 2
<strong>Explanation:</strong>
Box Number:  1 2 3 4 5 6 7 8 9 10 11 12 ...
Ball Count:  0 1 1 1 1 1 1 1 1 2  0  0  ...
Box 10 has the most number of balls with 2 balls.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= lowLimit &lt;= highLimit &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;