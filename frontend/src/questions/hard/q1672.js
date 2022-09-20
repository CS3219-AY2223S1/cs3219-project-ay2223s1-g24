module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">1672. Allocate Mailboxes</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the array <code>houses</code> where <code>houses[i]</code> is the location of the <code>i<sup>th</sup></code> house along a street and an integer <code>k</code>, allocate <code>k</code> mailboxes in the street.</p>
<p>Return <em>the <strong>minimum</strong> total distance between each house and its nearest mailbox</em>.</p>
<p>The test cases are generated so that the answer fits in a 32-bit integer.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/07/sample_11_1816.png" style="width: 454px; height: 154px;"/>
<pre><strong>Input:</strong> houses = [1,4,8,10,20], k = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> Allocate mailboxes in position 3, 9 and 20.
Minimum total distance from each houses to nearest mailboxes is |3-1| + |4-3| + |9-8| + |10-9| + |20-20| = 5 
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/07/sample_2_1816.png" style="width: 433px; height: 154px;"/>
<pre><strong>Input:</strong> houses = [2,3,5,12,18], k = 2
<strong>Output:</strong> 9
<strong>Explanation:</strong> Allocate mailboxes in position 3 and 14.
Minimum total distance from each houses to nearest mailboxes is |2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= houses.length &lt;= 100</code></li>
<li><code>1 &lt;= houses[i] &lt;= 10<sup>4</sup></code></li>
<li>All the integers of <code>houses</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;