module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">1642. Reverse Subarray To Maximize Array Value</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>nums</code>. The <em>value</em> of this array is defined as the sum of <code>|nums[i] - nums[i + 1]|</code> for all <code>0 &lt;= i &lt; nums.length - 1</code>.</p>
<p>You are allowed to select any subarray of the given array and reverse it. You can perform this operation <strong>only once</strong>.</p>
<p>Find maximum possible value of the final array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,3,1,5,4]
<strong>Output:</strong> 10
<b>Explanation: </b>By reversing the subarray [3,1,5] the array becomes [2,5,1,3,4] whose value is 10.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,4,9,24,2,1,10]
<strong>Output:</strong> 68
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;