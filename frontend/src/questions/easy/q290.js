module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">290. Most Visited Sector in  a Circular Track</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code> and an integer array <code>rounds</code>. We have a circular track which consists of <code>n</code> sectors labeled from <code>1</code> to <code>n</code>. A marathon will be held on this track, the marathon consists of <code>m</code> rounds. The <code>i<sup>th</sup></code> round starts at sector <code>rounds[i - 1]</code> and ends at sector <code>rounds[i]</code>. For example, round 1 starts at sector <code>rounds[0]</code> and ends at sector <code>rounds[1]</code></p>
<p>Return <em>an array of the most visited sectors</em> sorted in <strong>ascending</strong> order.</p>
<p>Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/14/tmp.jpg" style="width: 433px; height: 341px;"/>
<pre><strong>Input:</strong> n = 4, rounds = [1,3,1,2]
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The marathon starts at sector 1. The order of the visited sectors is as follows:
1 --&gt; 2 --&gt; 3 (end of round 1) --&gt; 4 --&gt; 1 (end of round 2) --&gt; 2 (end of round 3 and the marathon)
We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2, rounds = [2,1,2,1,2,1,2,1,2]
<strong>Output:</strong> [2]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 7, rounds = [1,3,5,7]
<strong>Output:</strong> [1,2,3,4,5,6,7]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= n &lt;= 100</code></li>
<li><code>1 &lt;= m &lt;= 100</code></li>
<li><code>rounds.length == m + 1</code></li>
<li><code>1 &lt;= rounds[i] &lt;= n</code></li>
<li><code>rounds[i] != rounds[i + 1]</code> for <code>0 &lt;= i &lt; m</code></li>
</ul>
</div></div><br><br></html> `;