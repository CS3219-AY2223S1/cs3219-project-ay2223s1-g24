module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************************************************<div id="title">606. Verify Preorder Serialization of a Binary Tree</div>
***************************************************<div class="content__u3I1 question-content__JfgR"><div><p>One way to serialize a binary tree is to use <strong>preorder traversal</strong>. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as <code>'#'</code>.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg" style="width: 362px; height: 293px;"/>
<p>For example, the above binary tree can be serialized to the string <code>"9,3,4,#,#,1,#,#,2,#,6,#,#"</code>, where <code>'#'</code> represents a null node.</p>
<p>Given a string of comma-separated values <code>preorder</code>, return <code>true</code> if it is a correct preorder traversal serialization of a binary tree.</p>
<p>It is <strong>guaranteed</strong> that each comma-separated value in the string must be either an integer or a character <code>'#'</code> representing null pointer.</p>
<p>You may assume that the input format is always valid.</p>
<ul>
<li>For example, it could never contain two consecutive commas, such as <code>"1,,3"</code>.</li>
</ul>
<p><strong>Note: </strong>You are not allowed to reconstruct the tree.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> preorder = "1,#"
<strong>Output:</strong> false
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> preorder = "9,#,#,1"
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= preorder.length &lt;= 10<sup>4</sup></code></li>
<li><code>preorder</code> consist of integers in the range <code>[0, 100]</code> and <code>'#'</code> separated by commas <code>','</code>.</li>
</ul>
</div></div><br><br></html> `;