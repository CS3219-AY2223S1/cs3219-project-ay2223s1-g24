module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************<div id="title">733. Maximum Binary Tree</div>
************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code> with no duplicates. A <strong>maximum binary tree</strong> can be built recursively from <code>nums</code> using the following algorithm:</p>
<ol>
<li>Create a root node whose value is the maximum value in <code>nums</code>.</li>
<li>Recursively build the left subtree on the <strong>subarray prefix</strong> to the <strong>left</strong> of the maximum value.</li>
<li>Recursively build the right subtree on the <strong>subarray suffix</strong> to the <strong>right</strong> of the maximum value.</li>
</ol>
<p>Return <em>the <strong>maximum binary tree</strong> built from </em><code>nums</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree1.jpg" style="width: 302px; height: 421px;"/>
<pre><strong>Input:</strong> nums = [3,2,1,6,0,5]
<strong>Output:</strong> [6,3,5,null,2,0,null,null,1]
<strong>Explanation:</strong> The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
    - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
        - Empty array, so no child.
        - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
            - Empty array, so no child.
            - Only one element, so child is a node with value 1.
    - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
        - Only one element, so child is a node with value 0.
        - Empty array, so no child.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/tree2.jpg" style="width: 182px; height: 301px;"/>
<pre><strong>Input:</strong> nums = [3,2,1]
<strong>Output:</strong> [3,null,2,null,1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
<li>All integers in <code>nums</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;