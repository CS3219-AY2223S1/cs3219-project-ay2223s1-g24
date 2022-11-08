module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">719. Task Scheduler</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>Given a characters array <code>tasks</code>, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.</p>
<p>However, there is a non-negative integer <code>n</code> that represents the cooldown period between two <b>same tasks</b> (the same letter in the array), that is that there must be at least <code>n</code> units of time between any two same tasks.</p>
<p>Return <em>the least number of units of times that the CPU will take to finish all the given tasks</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> tasks = ["A","A","A","B","B","B"], n = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
A -&gt; B -&gt; idle -&gt; A -&gt; B -&gt; idle -&gt; A -&gt; B
There is at least 2 units of time between any two same tasks.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> tasks = ["A","A","A","B","B","B"], n = 0
<strong>Output:</strong> 6
<strong>Explanation:</strong> On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
<strong>Output:</strong> 16
<strong>Explanation:</strong> 
One possible solution is
A -&gt; B -&gt; C -&gt; A -&gt; D -&gt; E -&gt; A -&gt; F -&gt; G -&gt; A -&gt; idle -&gt; idle -&gt; A -&gt; idle -&gt; idle -&gt; A
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= task.length &lt;= 10<sup>4</sup></code></li>
<li><code>tasks[i]</code> is upper-case English letter.</li>
<li>The integer <code>n</code> is in the range <code>[0, 100]</code>.</li>
</ul>
</div></div><br><br></html> `;