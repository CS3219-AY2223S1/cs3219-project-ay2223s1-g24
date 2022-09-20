module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">421. Root Equals Sum of Children</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given the <code>root</code> of a <strong>binary tree</strong> that consists of exactly <code>3</code> nodes: the root, its left child, and its right child.</p>
<p>Return <code>true</code> <em>if the value of the root is equal to the <strong>sum</strong> of the values of its two children, or </em><code>false</code><em> otherwise</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio.png" style="width: 281px; height: 199px;"/>
<pre><strong>Input:</strong> root = [10,4,6]
<strong>Output:</strong> true
<strong>Explanation:</strong> The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/04/08/graph3drawio-1.png" style="width: 281px; height: 199px;"/>
<pre><strong>Input:</strong> root = [5,3,1]
<strong>Output:</strong> false
<strong>Explanation:</strong> The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The tree consists only of the root, its left child, and its right child.</li>
<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>
</div></div><br><br></html> `;