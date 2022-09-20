module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">424. Intersection of Multiple Arrays</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div>Given a 2D integer array <code>nums</code> where <code>nums[i]</code> is a non-empty array of <strong>distinct</strong> positive integers, return <em>the list of integers that are present in <strong>each array</strong> of</em> <code>nums</code><em> sorted in <strong>ascending order</strong></em>.
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [[<u><strong>3</strong></u>,1,2,<u><strong>4</strong></u>,5],[1,2,<u><strong>3</strong></u>,<u><strong>4</strong></u>],[<u><strong>3</strong></u>,<u><strong>4</strong></u>,5,6]]
<strong>Output:</strong> [3,4]
<strong>Explanation:</strong> 
The only integers present in each of nums[0] = [<u><strong>3</strong></u>,1,2,<u><strong>4</strong></u>,5], nums[1] = [1,2,<u><strong>3</strong></u>,<u><strong>4</strong></u>], and nums[2] = [<u><strong>3</strong></u>,<u><strong>4</strong></u>,5,6] are 3 and 4, so we return [3,4].</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [[1,2,3],[4,5,6]]
<strong>Output:</strong> []
<strong>Explanation:</strong> 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
<li><code>1 &lt;= sum(nums[i].length) &lt;= 1000</code></li>
<li><code>1 &lt;= nums[i][j] &lt;= 1000</code></li>
<li>All the values of <code>nums[i]</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;