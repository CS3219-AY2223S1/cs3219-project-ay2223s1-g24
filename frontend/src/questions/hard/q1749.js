module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">1749. Minimum XOR Sum of Two Arrays</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> of length <code>n</code>.</p>
<p>The <strong>XOR sum</strong> of the two integer arrays is <code>(nums1[0] XOR nums2[0]) + (nums1[1] XOR nums2[1]) + ... + (nums1[n - 1] XOR nums2[n - 1])</code> (<strong>0-indexed</strong>).</p>
<ul>
<li>For example, the <strong>XOR sum</strong> of <code>[1,2,3]</code> and <code>[3,2,1]</code> is equal to <code>(1 XOR 3) + (2 XOR 2) + (3 XOR 1) = 2 + 0 + 2 = 4</code>.</li>
</ul>
<p>Rearrange the elements of <code>nums2</code> such that the resulting <strong>XOR sum</strong> is <b>minimized</b>.</p>
<p>Return <em>the <strong>XOR sum</strong> after the rearrangement</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [2,3]
<strong>Output:</strong> 2
<b>Explanation:</b> Rearrange <code>nums2</code> so that it becomes <code>[3,2]</code>.
The XOR sum is (1 XOR 3) + (2 XOR 2) = 2 + 0 = 2.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums1 = [1,0,3], nums2 = [5,3,4]
<strong>Output:</strong> 8
<b>Explanation:</b> Rearrange <code>nums2</code> so that it becomes <code>[5,4,3]</code>. 
The XOR sum is (1 XOR 5) + (0 XOR 4) + (3 XOR 3) = 4 + 4 + 0 = 8.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums1.length</code></li>
<li><code>n == nums2.length</code></li>
<li><code>1 &lt;= n &lt;= 14</code></li>
<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10<sup>7</sup></code></li>
</ul>
</div></div><br><br></html> `;