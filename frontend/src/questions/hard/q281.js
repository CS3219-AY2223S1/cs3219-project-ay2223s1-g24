module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1711. Minimize Deviation in Array</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>nums</code> of <code>n</code> positive integers.</p>
<p>You can perform two types of operations on any element of the array any number of times:</p>
<ul>
<li>If the element is <strong>even</strong>, <strong>divide</strong> it by <code>2</code>.

	<ul>
<li>For example, if the array is <code>[1,2,3,4]</code>, then you can do this operation on the last element, and the array will be <code>[1,2,3,<u>2</u>].</code></li>
</ul>
</li>
<li>If the element is <strong>odd</strong>, <strong>multiply</strong> it by <code>2</code>.
	<ul>
<li>For example, if the array is <code>[1,2,3,4]</code>, then you can do this operation on the first element, and the array will be <code>[<u>2</u>,2,3,4].</code></li>
</ul>
</li>
</ul>
<p>The <strong>deviation</strong> of the array is the <strong>maximum difference</strong> between any two elements in the array.</p>
<p>Return <em>the <strong>minimum deviation</strong> the array can have after performing some number of operations.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can transform the array to [1,2,3,<u>2</u>], then to [<u>2</u>,2,3,2], then the deviation will be 3 - 2 = 1.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [4,1,5,20,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can transform the array after two operations to [4,<u>2</u>,5,<u>5</u>,3], then the deviation will be 5 - 2 = 3.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [2,10,8]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == nums.length</code></li>
<li><code>2 &lt;= n &lt;= 5 * 10<sup><span style="font-size: 10.8333px;">4</span></sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;