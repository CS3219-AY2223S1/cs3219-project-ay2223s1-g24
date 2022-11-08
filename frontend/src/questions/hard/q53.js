module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">1483. Self Crossing</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of integers <code>distance</code>.</p>
<p>You start at point <code>(0,0)</code> on an <strong>X-Y</strong> plane and you move <code>distance[0]</code> meters to the north, then <code>distance[1]</code> meters to the west, <code>distance[2]</code> meters to the south, <code>distance[3]</code> meters to the east, and so on. In other words, after each move, your direction changes counter-clockwise.</p>
<p>Return <code>true</code> if your path crosses itself, and <code>false</code> if it does not.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/selfcross1-plane.jpg" style="width: 400px; height: 435px;"/>
<pre><strong>Input:</strong> distance = [2,1,1,2]
<strong>Output:</strong> true
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/selfcross2-plane.jpg" style="width: 400px; height: 435px;"/>
<pre><strong>Input:</strong> distance = [1,2,3,4]
<strong>Output:</strong> false
</pre>
<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/selfcross3-plane.jpg" style="width: 400px; height: 435px;"/>
<pre><strong>Input:</strong> distance = [1,1,1,1]
<strong>Output:</strong> true
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= distance.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= distance[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;