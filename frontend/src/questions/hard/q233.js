module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************<div id="title">1663. Number of Ways to Wear Different Hats to Each Other</div>
*********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> people and <code>40</code> types of hats labeled from <code>1</code> to <code>40</code>.</p>
<p>Given a 2D integer array <code>hats</code>, where <code>hats[i]</code> is a list of all hats preferred by the <code>i<sup>th</sup></code> person.</p>
<p>Return <em>the number of ways that the <code>n</code> people wear different hats to each other</em>.</p>
<p>Since the answer may be too large, return it modulo <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> hats = [[3,4],[4,5],[5]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one way to choose hats given the conditions. 
First person choose hat 3, Second person choose hat 4 and last one hat 5.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> hats = [[3,5,1],[3,5]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 ways to choose hats:
(3,5), (5,3), (1,3) and (1,5)
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]
<strong>Output:</strong> 24
<strong>Explanation:</strong> Each person can choose hats labeled from 1 to 4.
Number of Permutations of (1,2,3,4) = 24.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == hats.length</code></li>
<li><code>1 &lt;= n &lt;= 10</code></li>
<li><code>1 &lt;= hats[i].length &lt;= 40</code></li>
<li><code>1 &lt;= hats[i][j] &lt;= 40</code></li>
<li><code>hats[i]</code> contains a list of <strong>unique</strong> integers.</li>
</ul>
</div></div><br><br></html> `;