module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************************<div id="title">1477. Count of Smaller Numbers After Self</div>
****************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, return<em> an integer array </em><code>counts</code><em> where </em><code>counts[i]</code><em> is the number of smaller elements to the right of </em><code>nums[i]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [5,2,6,1]
<strong>Output:</strong> [2,1,1,0]
<strong>Explanation:</strong>
To the right of 5 there are <b>2</b> smaller elements (2 and 1).
To the right of 2 there is only <b>1</b> smaller element (1).
To the right of 6 there is <b>1</b> smaller element (1).
To the right of 1 there is <b>0</b> smaller element.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [-1]
<strong>Output:</strong> [0]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [-1,-1]
<strong>Output:</strong> [0,0]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;