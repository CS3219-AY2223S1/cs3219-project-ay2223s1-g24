module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************************************<div id="title">254. Find a Corresponding Node of a Binary Tree in a Clone of That Tree</div>
************************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two binary trees <code>original</code> and <code>cloned</code> and given a reference to a node <code>target</code> in the original tree.</p>
<p>The <code>cloned</code> tree is a <strong>copy of</strong> the <code>original</code> tree.</p>
<p>Return <em>a reference to the same node</em> in the <code>cloned</code> tree.</p>
<p><strong>Note</strong> that you are <strong>not allowed</strong> to change any of the two trees or the <code>target</code> node and the answer <strong>must be</strong> a reference to a node in the <code>cloned</code> tree.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/21/e1.png" style="width: 544px; height: 426px;"/>
<pre><strong>Input:</strong> tree = [7,4,3,null,null,6,19], target = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/21/e2.png" style="width: 221px; height: 159px;"/>
<pre><strong>Input:</strong> tree = [7], target =  7
<strong>Output:</strong> 7
</pre>
<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/21/e3.png" style="width: 459px; height: 486px;"/>
<pre><strong>Input:</strong> tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
<strong>Output:</strong> 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>The number of nodes in the <code>tree</code> is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
<li>The values of the nodes of the <code>tree</code> are unique.</li>
<li><code>target</code> node is a node from the <code>original</code> tree and is not <code>null</code>.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong> Could you solve the problem if repeated values on the tree are allowed?</p>
</div></div><br><br></html> `;