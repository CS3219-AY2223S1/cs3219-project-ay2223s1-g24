module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">816. Keys and Rooms</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> rooms labeled from <code>0</code> to <code>n - 1</code> and all the rooms are locked except for room <code>0</code>. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.</p>
<p>When you visit a room, you may find a set of <strong>distinct keys</strong> in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.</p>
<p>Given an array <code>rooms</code> where <code>rooms[i]</code> is the set of keys that you can obtain if you visited room <code>i</code>, return <code>true</code> <em>if you can visit <strong>all</strong> the rooms, or</em> <code>false</code> <em>otherwise</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> rooms = [[1],[2],[3],[]]
<strong>Output:</strong> true
<strong>Explanation:</strong> 
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> rooms = [[1,3],[3,0,1],[2],[0]]
<strong>Output:</strong> false
<strong>Explanation:</strong> We can not enter room number 2 since the only key that unlocks it is in that room.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == rooms.length</code></li>
<li><code>2 &lt;= n &lt;= 1000</code></li>
<li><code>0 &lt;= rooms[i].length &lt;= 1000</code></li>
<li><code>1 &lt;= sum(rooms[i].length) &lt;= 3000</code></li>
<li><code>0 &lt;= rooms[i][j] &lt; n</code></li>
<li>All the values of <code>rooms[i]</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;