module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">764. Split Linked List in Parts</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>head</code> of a singly linked list and an integer <code>k</code>, split the linked list into <code>k</code> consecutive linked list parts.</p>
<p>The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.</p>
<p>The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.</p>
<p>Return <em>an array of the </em><code>k</code><em> parts</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/split1-lc.jpg" style="width: 400px; height: 134px;"/>
<pre><strong>Input:</strong> head = [1,2,3], k = 5
<strong>Output:</strong> [[1],[2],[3],[],[]]
<strong>Explanation:</strong>
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/split2-lc.jpg" style="width: 600px; height: 60px;"/>
<pre><strong>Input:</strong> head = [1,2,3,4,5,6,7,8,9,10], k = 3
<strong>Output:</strong> [[1,2,3,4],[5,6,7],[8,9,10]]
<strong>Explanation:</strong>
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the list is in the range <code>[0, 1000]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
<li><code>1 &lt;= k &lt;= 50</code></li>
</ul>
</div></div><br><br></html> `;