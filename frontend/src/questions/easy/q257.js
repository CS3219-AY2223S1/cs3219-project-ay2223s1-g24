module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">257. Create Target Array in the Given Order</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two arrays of integers <code>nums</code> and <code>index</code>. Your task is to create <em>target</em> array under the following rules:</p>
<ul>
<li>Initially <em>target</em> array is empty.</li>
<li>From left to right read nums[i] and index[i], insert at index <code>index[i]</code> the value <code>nums[i]</code> in <em>target</em> array.</li>
<li>Repeat the previous step until there are no elements to read in <code>nums</code> and <code>index.</code></li>
</ul>
<p>Return the <em>target</em> array.</p>
<p>It is guaranteed that the insertion operations will be valid.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,2,3,4], index = [0,1,2,2,1]
<strong>Output:</strong> [0,4,1,3,2]
<strong>Explanation:</strong>
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4,0], index = [0,1,2,3,0]
<strong>Output:</strong> [0,1,2,3,4]
<strong>Explanation:</strong>
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1], index = [0]
<strong>Output:</strong> [1]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length, index.length &lt;= 100</code></li>
<li><code>nums.length == index.length</code></li>
<li><code>0 &lt;= nums[i] &lt;= 100</code></li>
<li><code>0 &lt;= index[i] &lt;= i</code></li>
</ul>
</div></div><br><br></html> `;