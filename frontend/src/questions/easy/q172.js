module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">172. Fair Candy Swap</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>Alice and Bob have a different total number of candies. You are given two integer arrays <code>aliceSizes</code> and <code>bobSizes</code> where <code>aliceSizes[i]</code> is the number of candies of the <code>i<sup>th</sup></code> box of candy that Alice has and <code>bobSizes[j]</code> is the number of candies of the <code>j<sup>th</sup></code> box of candy that Bob has.</p>
<p>Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.</p>
<p>Return a<em>n integer array </em><code>answer</code><em> where </em><code>answer[0]</code><em> is the number of candies in the box that Alice must exchange, and </em><code>answer[1]</code><em> is the number of candies in the box that Bob must exchange</em>. If there are multiple answers, you may <strong>return any</strong> one of them. It is guaranteed that at least one answer exists.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> aliceSizes = [1,1], bobSizes = [2,2]
<strong>Output:</strong> [1,2]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> aliceSizes = [1,2], bobSizes = [2,3]
<strong>Output:</strong> [1,2]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> aliceSizes = [2], bobSizes = [1,3]
<strong>Output:</strong> [2,3]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= aliceSizes.length, bobSizes.length &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= aliceSizes[i], bobSizes[j] &lt;= 10<sup>5</sup></code></li>
<li>Alice and Bob have a different total number of candies.</li>
<li>There will be at least one valid answer for the given input.</li>
</ul>
</div></div><br><br></html> `;