module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">221. Distance Between Bus Stops</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>A bus has <code>n</code> stops numbered from <code>0</code> to <code>n - 1</code> that form a circle. We know the distance between all pairs of neighboring stops where <code>distance[i]</code> is the distance between the stops number <code>i</code> and <code>(i + 1) % n</code>.</p>
<p>The bus goes along both directions i.e. clockwise and counterclockwise.</p>
<p>Return the shortest distance between the given <code>start</code> and <code>destination</code> stops.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1.jpg" style="width: 388px; height: 240px;"/></p>
<pre><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> Distance between 0 and 1 is 1 or 9, minimum is 1.</pre>
<p> </p>
<p><strong>Example 2:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-1.jpg" style="width: 388px; height: 240px;"/></p>
<pre><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> Distance between 0 and 2 is 3 or 7, minimum is 3.
</pre>
<p> </p>
<p><strong>Example 3:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-2.jpg" style="width: 388px; height: 240px;"/></p>
<pre><strong>Input:</strong> distance = [1,2,3,4], start = 0, destination = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> Distance between 0 and 3 is 6 or 4, minimum is 4.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10^4</code></li>
<li><code>distance.length == n</code></li>
<li><code>0 &lt;= start, destination &lt; n</code></li>
<li><code>0 &lt;= distance[i] &lt;= 10^4</code></li>
</ul></div></div><br><br></html> `;