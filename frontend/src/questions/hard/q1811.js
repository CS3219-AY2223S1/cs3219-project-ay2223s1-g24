module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************************<div id="title">1811. Replace Non-Coprime Numbers in Array</div>
******************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array of integers <code>nums</code>. Perform the following steps:</p>
<ol>
<li>Find <strong>any</strong> two <strong>adjacent</strong> numbers in <code>nums</code> that are <strong>non-coprime</strong>.</li>
<li>If no such numbers are found, <strong>stop</strong> the process.</li>
<li>Otherwise, delete the two numbers and <strong>replace</strong> them with their <strong>LCM (Least Common Multiple)</strong>.</li>
<li><strong>Repeat</strong> this process as long as you keep finding two adjacent non-coprime numbers.</li>
</ol>
<p>Return <em>the <strong>final</strong> modified array.</em> It can be shown that replacing adjacent non-coprime numbers in <strong>any</strong> arbitrary order will lead to the same result.</p>
<p>The test cases are generated such that the values in the final array are <strong>less than or equal</strong> to <code>10<sup>8</sup></code>.</p>
<p>Two values <code>x</code> and <code>y</code> are <strong>non-coprime</strong> if <code>GCD(x, y) &gt; 1</code> where <code>GCD(x, y)</code> is the <strong>Greatest Common Divisor</strong> of <code>x</code> and <code>y</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [6,4,3,2,7,6,2]
<strong>Output:</strong> [12,7,6]
<strong>Explanation:</strong> 
- (6, 4) are non-coprime with LCM(6, 4) = 12. Now, nums = [<strong><u>12</u></strong>,3,2,7,6,2].
- (12, 3) are non-coprime with LCM(12, 3) = 12. Now, nums = [<strong><u>12</u></strong>,2,7,6,2].
- (12, 2) are non-coprime with LCM(12, 2) = 12. Now, nums = [<strong><u>12</u></strong>,7,6,2].
- (6, 2) are non-coprime with LCM(6, 2) = 6. Now, nums = [12,7,<u><strong>6</strong></u>].
There are no more adjacent non-coprime numbers in nums.
Thus, the final modified array is [12,7,6].
Note that there are other ways to obtain the same resultant array.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1,1,3,3,3]
<strong>Output:</strong> [2,1,1,3]
<strong>Explanation:</strong> 
- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,<u><strong>3</strong></u>,3].
- (3, 3) are non-coprime with LCM(3, 3) = 3. Now, nums = [2,2,1,1,<u><strong>3</strong></u>].
- (2, 2) are non-coprime with LCM(2, 2) = 2. Now, nums = [<u><strong>2</strong></u>,1,1,3].
There are no more adjacent non-coprime numbers in nums.
Thus, the final modified array is [2,1,1,3].
Note that there are other ways to obtain the same resultant array.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
<li>The test cases are generated such that the values in the final array are <strong>less than or equal</strong> to <code>10<sup>8</sup></code>.</li>
</ul>
</div></div><br><br></html> `;