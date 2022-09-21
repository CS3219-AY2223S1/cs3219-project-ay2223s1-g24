module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************<div id="title">213. Distribute Candies to People</div>
**********************************<div class="content__u3I1 question-content__JfgR"><div><p>We distribute some number of <code>candies</code>, to a row of <strong><code>n = num_people</code></strong> people in the following way:</p>
<p>We then give 1 candy to the first person, 2 candies to the second person, and so on until we give <code>n</code> candies to the last person.</p>
<p>Then, we go back to the start of the row, giving <code>n + 1</code> candies to the first person, <code>n + 2</code> candies to the second person, and so on until we give <code>2 * n</code> candies to the last person.</p>
<p>This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).</p>
<p>Return an array (of length <code>num_people</code> and sum <code>candies</code>) that represents the final distribution of candies.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> candies = 7, num_people = 4
<strong>Output:</strong> [1,2,3,1]
<strong>Explanation:</strong>
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> candies = 10, num_people = 3
<strong>Output:</strong> [5,2,3]
<strong>Explanation: </strong>
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li>1 &lt;= candies &lt;= 10^9</li>
<li>1 &lt;= num_people &lt;= 1000</li>
</ul>
</div></div><br><br></html> `;