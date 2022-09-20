module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">1508. Super Washing Machines</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>You have <code>n</code> super washing machines on a line. Initially, each washing machine has some dresses or is empty.</p>
<p>For each move, you could choose any <code>m</code> (<code>1 &lt;= m &lt;= n</code>) washing machines, and pass one dress of each washing machine to one of its adjacent washing machines at the same time.</p>
<p>Given an integer array <code>machines</code> representing the number of dresses in each washing machine from left to right on the line, return <em>the minimum number of moves to make all the washing machines have the same number of dresses</em>. If it is not possible to do it, return <code>-1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> machines = [1,0,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
1st move:    1     0 &lt;-- 5    =&gt;    1     1     4
2nd move:    1 &lt;-- 1 &lt;-- 4    =&gt;    2     1     3
3rd move:    2     1 &lt;-- 3    =&gt;    2     2     2
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> machines = [0,3,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
1st move:    0 &lt;-- 3     0    =&gt;    1     2     0
2nd move:    1     2 --&gt; 0    =&gt;    1     1     1
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> machines = [0,2,0]
<strong>Output:</strong> -1
<strong>Explanation:</strong>
It's impossible to make all three washing machines have the same number of dresses.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == machines.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= machines[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;