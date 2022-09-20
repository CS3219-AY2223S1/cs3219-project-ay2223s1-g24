module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********<div id="title">1457. Candy</div>
**********<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.</p>
<p>You are giving candies to these children subjected to the following requirements:</p>
<ul>
<li>Each child must have at least one candy.</li>
<li>Children with a higher rating get more candies than their neighbors.</li>
</ul>
<p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == ratings.length</code></li>
<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;