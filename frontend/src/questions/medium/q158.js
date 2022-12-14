module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">614. Water and Jug Problem</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two jugs with capacities <code>jug1Capacity</code> and <code>jug2Capacity</code> liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly <code>targetCapacity</code> liters using these two jugs.</p>
<p>If <code>targetCapacity</code> liters of water are measurable, you must have <code>targetCapacity</code> liters of water contained <strong>within one or both buckets</strong> by the end.</p>
<p>Operations allowed:</p>
<ul>
<li>Fill any of the jugs with water.</li>
<li>Empty any of the jugs.</li>
<li>Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> The famous <a href="https://www.youtube.com/watch?v=BVtQNK_ZUJg&amp;ab_channel=notnek01" target="_blank">Die Hard</a> example 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
<strong>Output:</strong> false
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
<strong>Output:</strong> true
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= jug1Capacity, jug2Capacity, targetCapacity &lt;= 10<sup>6</sup></code></li>
</ul>
</div></div><br><br></html> `;