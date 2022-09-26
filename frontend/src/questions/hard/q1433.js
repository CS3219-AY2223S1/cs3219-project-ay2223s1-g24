module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">1433. Merge k Sorted Lists</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>
<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
merging them into one sorted list:
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> lists = []
<strong>Output:</strong> []
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> lists = [[]]
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>k == lists.length</code></li>
<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>
<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>
<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>
<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>
</ul>
</div></div><br><br></html> `;