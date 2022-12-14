module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">1599. Minimum Cost to Merge Stones</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> piles of <code>stones</code> arranged in a row. The <code>i<sup>th</sup></code> pile has <code>stones[i]</code> stones.</p>
<p>A move consists of merging exactly <code>k</code> <strong>consecutive</strong> piles into one pile, and the cost of this move is equal to the total number of stones in these <code>k</code> piles.</p>
<p>Return <em>the minimum cost to merge all piles of stones into one pile</em>. If it is impossible, return <code>-1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> stones = [3,2,4,1], k = 2
<strong>Output:</strong> 20
<strong>Explanation:</strong> We start with [3, 2, 4, 1].
We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
We merge [4, 1] for a cost of 5, and we are left with [5, 5].
We merge [5, 5] for a cost of 10, and we are left with [10].
The total cost was 20, and this is the minimum possible.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> stones = [3,2,4,1], k = 3
<strong>Output:</strong> -1
<strong>Explanation:</strong> After any merge operation, there are 2 piles left, and we can't merge anymore.  So the task is impossible.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> stones = [3,5,1,2,6], k = 3
<strong>Output:</strong> 25
<strong>Explanation:</strong> We start with [3, 5, 1, 2, 6].
We merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].
We merge [3, 8, 6] for a cost of 17, and we are left with [17].
The total cost was 25, and this is the minimum possible.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == stones.length</code></li>
<li><code>1 &lt;= n &lt;= 30</code></li>
<li><code>1 &lt;= stones[i] &lt;= 100</code></li>
<li><code>2 &lt;= k &lt;= 30</code></li>
</ul>
</div></div><br><br></html> `;