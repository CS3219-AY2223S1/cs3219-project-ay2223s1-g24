module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">1619. Sort Items by Groups Respecting Dependencies</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> items each belonging to zero or one of <code>m</code> groups where <code>group[i]</code> is the group that the <code>i</code>-th item belongs to and it's equal to <code>-1</code> if the <code>i</code>-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.</p>
<p>Return a sorted list of the items such that:</p>
<ul>
<li>The items that belong to the same group are next to each other in the sorted list.</li>
<li>There are some relations between these items where <code>beforeItems[i]</code> is a list containing all the items that should come before the <code>i</code>-th item in the sorted array (to the left of the <code>i</code>-th item).</li>
</ul>
<p>Return any solution if there is more than one solution and return an <strong>empty list</strong> if there is no solution.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png" style="width: 191px; height: 181px;"/></strong></p>
<pre><strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
<strong>Output:</strong> [6,3,4,1,5,2,0,7]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
<strong>Output:</strong> []
<strong>Explanation:</strong> This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= m &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>group.length == beforeItems.length == n</code></li>
<li><code>-1 &lt;= group[i] &lt;= m - 1</code></li>
<li><code>0 &lt;= beforeItems[i].length &lt;= n - 1</code></li>
<li><code>0 &lt;= beforeItems[i][j] &lt;= n - 1</code></li>
<li><code>i != beforeItems[i][j]</code></li>
<li><code>beforeItems[i] </code>does not contain duplicates elements.</li>
</ul>
</div></div><br><br></html> `;