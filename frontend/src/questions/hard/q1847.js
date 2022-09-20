module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">1847. Maximum Segment Sum After Removals</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two <strong>0-indexed</strong> integer arrays <code>nums</code> and <code>removeQueries</code>, both of length <code>n</code>. For the <code>i<sup>th</sup></code> query, the element in <code>nums</code> at the index <code>removeQueries[i]</code> is removed, splitting <code>nums</code> into different segments.</p>
<p>A <strong>segment</strong> is a contiguous sequence of <strong>positive</strong> integers in <code>nums</code>. A <strong>segment sum</strong> is the sum of every element in a segment.</p>
<p>Return<em> an integer array </em><code>answer</code><em>, of length </em><code>n</code><em>, where </em><code>answer[i]</code><em> is the <strong>maximum</strong> segment sum after applying the </em><code>i<sup>th</sup></code> <em>removal.</em></p>
<p><strong>Note:</strong> The same index will <strong>not</strong> be removed more than once.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1]
<strong>Output:</strong> [14,7,2,2,0]
<strong>Explanation:</strong> Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 0th element, nums becomes [0,2,5,6,1] and the maximum segment sum is 14 for segment [2,5,6,1].
Query 2: Remove the 3rd element, nums becomes [0,2,5,0,1] and the maximum segment sum is 7 for segment [2,5].
Query 3: Remove the 2nd element, nums becomes [0,2,0,0,1] and the maximum segment sum is 2 for segment [2]. 
Query 4: Remove the 4th element, nums becomes [0,2,0,0,0] and the maximum segment sum is 2 for segment [2]. 
Query 5: Remove the 1st element, nums becomes [0,0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [14,7,2,2,0].</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,11,1], removeQueries = [3,2,1,0]
<strong>Output:</strong> [16,5,3,0]
<strong>Explanation:</strong> Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 3rd element, nums becomes [3,2,11,0] and the maximum segment sum is 16 for segment [3,2,11].
Query 2: Remove the 2nd element, nums becomes [3,2,0,0] and the maximum segment sum is 5 for segment [3,2].
Query 3: Remove the 1st element, nums becomes [3,0,0,0] and the maximum segment sum is 3 for segment [3].
Query 4: Remove the 0th element, nums becomes [0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [16,5,3,0].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length == removeQueries.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
<li><code>0 &lt;= removeQueries[i] &lt; n</code></li>
<li>All the values of <code>removeQueries</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;