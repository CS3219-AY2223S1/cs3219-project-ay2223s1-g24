module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************<div id="title">573. Count Complete Tree Nodes</div>
******************************<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a <strong>complete</strong> binary tree, return the number of the nodes in the tree.</p>
<p>According to <strong><a href="http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">Wikipedia</a></strong>, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between <code>1</code> and <code>2<sup>h</sup></code> nodes inclusive at the last level <code>h</code>.</p>
<p>Design an algorithm that runs in less than <code data-stringify-type="code">O(n)</code> time complexity.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/14/complete.jpg" style="width: 372px; height: 302px;"/>
<pre><strong>Input:</strong> root = [1,2,3,4,5,6]
<strong>Output:</strong> 6
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = []
<strong>Output:</strong> 0
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> root = [1]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 5 * 10<sup>4</sup></code></li>
<li>The tree is guaranteed to be <strong>complete</strong>.</li>
</ul>
</div></div><br><br></html> `;