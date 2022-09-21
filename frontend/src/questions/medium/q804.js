module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************<div id="title">804. Linked List Components</div>
***************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given the <code>head</code> of a linked list containing unique integer values and an integer array <code>nums</code> that is a subset of the linked list values.</p>
<p>Return <em>the number of connected components in </em><code>nums</code><em> where two values are connected if they appear <strong>consecutively</strong> in the linked list</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/22/lc-linkedlistcom1.jpg" style="width: 424px; height: 65px;"/>
<pre><strong>Input:</strong> head = [0,1,2,3], nums = [0,1,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 0 and 1 are connected, so [0, 1] and [3] are the two connected components.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/22/lc-linkedlistcom2.jpg" style="width: 544px; height: 65px;"/>
<pre><strong>Input:</strong> head = [0,1,2,3,4], nums = [0,3,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the linked list is <code>n</code>.</li>
<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>0 &lt;= Node.val &lt; n</code></li>
<li>All the values <code>Node.val</code> are <strong>unique</strong>.</li>
<li><code>1 &lt;= nums.length &lt;= n</code></li>
<li><code>0 &lt;= nums[i] &lt; n</code></li>
<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;