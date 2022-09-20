module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">1755. Count Ways to Build Rooms in an Ant Colony</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are an ant tasked with adding <code>n</code> new rooms numbered <code>0</code> to <code>n-1</code> to your colony. You are given the expansion plan as a <strong>0-indexed</strong> integer array of length <code>n</code>, <code>prevRoom</code>, where <code>prevRoom[i]</code> indicates that you must build room <code>prevRoom[i]</code> before building room <code>i</code>, and these two rooms must be connected <strong>directly</strong>. Room <code>0</code> is already built, so <code>prevRoom[0] = -1</code>. The expansion plan is given such that once all the rooms are built, every room will be reachable from room <code>0</code>.</p>
<p>You can only build <strong>one room</strong> at a time, and you can travel freely between rooms you have <strong>already built</strong> only if they are <strong>connected</strong>. You can choose to build <strong>any room</strong> as long as its <strong>previous room</strong> is already built.</p>
<p>Return <em>the <strong>number of different orders</strong> you can build all the rooms in</em>. Since the answer may be large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/19/d1.JPG" style="width: 200px; height: 212px;"/>
<pre><strong>Input:</strong> prevRoom = [-1,0,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one way to build the additional rooms: 0 → 1 → 2
</pre>
<p><strong>Example 2:</strong></p>
<strong><img alt="" src="https://assets.leetcode.com/uploads/2021/06/19/d2.JPG" style="width: 200px; height: 239px;"/></strong>
<pre><strong>Input:</strong> prevRoom = [-1,0,0,1,2]
<strong>Output:</strong> 6
<strong>Explanation:
</strong>The 6 ways are:
0 → 1 → 3 → 2 → 4
0 → 2 → 4 → 1 → 3
0 → 1 → 2 → 3 → 4
0 → 1 → 2 → 4 → 3
0 → 2 → 1 → 3 → 4
0 → 2 → 1 → 4 → 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == prevRoom.length</code></li>
<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>prevRoom[0] == -1</code></li>
<li><code>0 &lt;= prevRoom[i] &lt; n</code> for all <code>1 &lt;= i &lt; n</code></li>
<li>Every room is reachable from room <code>0</code> once all the rooms are built.</li>
</ul></div></div><br><br></html> `;