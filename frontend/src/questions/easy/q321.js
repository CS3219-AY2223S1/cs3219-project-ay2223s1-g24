module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************************<div id="title">321. Number Of Rectangles That Can Form The Largest Square</div>
***********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>rectangles</code> where <code>rectangles[i] = [l<sub>i</sub>, w<sub>i</sub>]</code> represents the <code>i<sup>th</sup></code> rectangle of length <code>l<sub>i</sub></code> and width <code>w<sub>i</sub></code>.</p>
<p>You can cut the <code>i<sup>th</sup></code> rectangle to form a square with a side length of <code>k</code> if both <code>k &lt;= l<sub>i</sub></code> and <code>k &lt;= w<sub>i</sub></code>. For example, if you have a rectangle <code>[4,6]</code>, you can cut it to get a square with a side length of at most <code>4</code>.</p>
<p>Let <code>maxLen</code> be the side length of the <strong>largest</strong> square you can obtain from any of the given rectangles.</p>
<p>Return <em>the <strong>number</strong> of rectangles that can make a square with a side length of </em><code>maxLen</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> rectangles = [[5,8],[3,9],[5,12],[16,5]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The largest squares you can get from each rectangle are of lengths [5,3,5,5].
The largest possible square is of length 5, and you can get it out of 3 rectangles.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> rectangles = [[2,3],[3,7],[4,3],[3,7]]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= rectangles.length &lt;= 1000</code></li>
<li><code>rectangles[i].length == 2</code></li>
<li><code>1 &lt;= l<sub>i</sub>, w<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
<li><code>l<sub>i</sub> != w<sub>i</sub></code></li>
</ul></div></div><br><br></html> `;