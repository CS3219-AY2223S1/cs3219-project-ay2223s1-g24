module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">162. Rectangle Overlap</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>An axis-aligned rectangle is represented as a list <code>[x1, y1, x2, y2]</code>, where <code>(x1, y1)</code> is the coordinate of its bottom-left corner, and <code>(x2, y2)</code> is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.</p>
<p>Two rectangles overlap if the area of their intersection is <strong>positive</strong>. To be clear, two rectangles that only touch at the corner or edges do not overlap.</p>
<p>Given two axis-aligned rectangles <code>rec1</code> and <code>rec2</code>, return <code>true</code><em> if they overlap, otherwise return </em><code>false</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> rec1 = [0,0,2,2], rec2 = [1,1,3,3]
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> rec1 = [0,0,1,1], rec2 = [1,0,2,1]
<strong>Output:</strong> false
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> rec1 = [0,0,1,1], rec2 = [2,2,3,3]
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>rec1.length == 4</code></li>
<li><code>rec2.length == 4</code></li>
<li><code>-10<sup>9</sup> &lt;= rec1[i], rec2[i] &lt;= 10<sup>9</sup></code></li>
<li><code>rec1</code> and <code>rec2</code> represent a valid rectangle with a non-zero area.</li>
</ul>
</div></div><br><br></html> `;