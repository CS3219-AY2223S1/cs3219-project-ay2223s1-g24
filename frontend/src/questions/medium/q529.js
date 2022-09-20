module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************<div id="title">529. Triangle</div>
*************<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.</p>
<p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The triangle looks like:
   <u>2</u>
  <u>3</u> 4
 6 <u>5</u> 7
4 <u>1</u> 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> triangle = [[-10]]
<strong>Output:</strong> -10
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= triangle.length &lt;= 200</code></li>
<li><code>triangle[0].length == 1</code></li>
<li><code>triangle[i].length == triangle[i - 1].length + 1</code></li>
<li><code>-10<sup>4</sup> &lt;= triangle[i][j] &lt;= 10<sup>4</sup></code></li>
</ul>
<p> </p>
<strong>Follow up:</strong> Could you do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?</div></div><br><br></html> `;