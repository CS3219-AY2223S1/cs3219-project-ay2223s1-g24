module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">618. Find K Pairs with Smallest Sums</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>ascending order</strong> and an integer <code>k</code>.</p>
<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p>
<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>Output:</strong> [[1,2],[1,4],[1,6]]
<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3], k = 3
<strong>Output:</strong> [[1,3],[2,3]]
<strong>Explanation:</strong> All possible pairs are returned from the sequence: [1,3],[2,3]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>
<li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>ascending order</strong>.</li>
<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;