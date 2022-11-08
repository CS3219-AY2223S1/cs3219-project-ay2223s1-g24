module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">440. Evaluate Boolean Binary Tree</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given the <code>root</code> of a <strong>full binary tree</strong> with the following properties:</p>
<ul>
<li><strong>Leaf nodes</strong> have either the value <code>0</code> or <code>1</code>, where <code>0</code> represents <code>False</code> and <code>1</code> represents <code>True</code>.</li>
<li><strong>Non-leaf nodes</strong> have either the value <code>2</code> or <code>3</code>, where <code>2</code> represents the boolean <code>OR</code> and <code>3</code> represents the boolean <code>AND</code>.</li>
</ul>
<p>The <strong>evaluation</strong> of a node is as follows:</p>
<ul>
<li>If the node is a leaf node, the evaluation is the <strong>value</strong> of the node, i.e. <code>True</code> or <code>False</code>.</li>
<li>Otherwise, <strong>evaluate</strong> the node's two children and <strong>apply</strong> the boolean operation of its value with the children's evaluations.</li>
</ul>
<p>Return<em> the boolean result of <strong>evaluating</strong> the </em><code>root</code><em> node.</em></p>
<p>A <strong>full binary tree</strong> is a binary tree where each node has either <code>0</code> or <code>2</code> children.</p>
<p>A <strong>leaf node</strong> is a node that has zero children.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png" style="width: 700px; height: 252px;"/>
<pre><strong>Input:</strong> root = [2,1,3,null,null,0,1]
<strong>Output:</strong> true
<strong>Explanation:</strong> The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> root = [0]
<strong>Output:</strong> false
<strong>Explanation:</strong> The root node is a leaf node and it evaluates to false, so we return false.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
<li><code>0 &lt;= Node.val &lt;= 3</code></li>
<li>Every node has either <code>0</code> or <code>2</code> children.</li>
<li>Leaf nodes have a value of <code>0</code> or <code>1</code>.</li>
<li>Non-leaf nodes have a value of <code>2</code> or <code>3</code>.</li>
</ul>
</div></div><br><br></html> `;