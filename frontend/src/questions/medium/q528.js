module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************************<div id="title">528. Populating Next Right Pointers in Each Node II</div>
***************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree</p>
<pre>struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</pre>
<p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p>
<p>Initially, all next pointers are set to <code>NULL</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" style="width: 500px; height: 171px;"/>
<pre><strong>Input:</strong> root = [1,2,3,4,5,null,7]
<strong>Output:</strong> [1,#,2,3,#,4,5,7,#]
<strong>Explanation: </strong>Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[0, 6000]</code>.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>
<p> </p>
<p><strong>Follow-up:</strong></p>
<ul>
<li>You may only use constant extra space.</li>
<li>The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.</li>
</ul>
</div></div><br><br></html> `;