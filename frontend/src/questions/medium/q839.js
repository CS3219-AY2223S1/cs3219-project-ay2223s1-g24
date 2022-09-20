module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************<div id="title">839. Boats to Save People</div>
*************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>people</code> where <code>people[i]</code> is the weight of the <code>i<sup>th</sup></code> person, and an <strong>infinite number of boats</strong> where each boat can carry a maximum weight of <code>limit</code>. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most <code>limit</code>.</p>
<p>Return <em>the minimum number of boats to carry every given person</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> people = [1,2], limit = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> 1 boat (1, 2)
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> people = [3,2,2,1], limit = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 boats (1, 2), (2) and (3)
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> people = [3,5,3,4], limit = 5
<strong>Output:</strong> 4
<strong>Explanation:</strong> 4 boats (3), (3), (4), (5)
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= people.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= people[i] &lt;= limit &lt;= 3 * 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;