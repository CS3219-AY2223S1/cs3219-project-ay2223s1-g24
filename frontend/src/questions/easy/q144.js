module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************<div id="title">144. Flood Fill</div>
***************<div class="content__u3I1 question-content__JfgR"><div><p>An image is represented by an <code>m x n</code> integer grid <code>image</code> where <code>image[i][j]</code> represents the pixel value of the image.</p>
<p>You are also given three integers <code>sr</code>, <code>sc</code>, and <code>color</code>. You should perform a <strong>flood fill</strong> on the image starting from the pixel <code>image[sr][sc]</code>.</p>
<p>To perform a <strong>flood fill</strong>, consider the starting pixel, plus any pixels connected <strong>4-directionally</strong> to the starting pixel of the same color as the starting pixel, plus any pixels connected <strong>4-directionally</strong> to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with <code>color</code>.</p>
<p>Return <em>the modified image after performing the flood fill</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg" style="width: 613px; height: 253px;"/>
<pre><strong>Input:</strong> image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
<strong>Output:</strong> [[2,2,2],[2,2,0],[2,0,1]]
<strong>Explanation:</strong> From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
<strong>Output:</strong> [[0,0,0],[0,0,0]]
<strong>Explanation:</strong> The starting pixel is already colored 0, so no changes are made to the image.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>m == image.length</code></li>
<li><code>n == image[i].length</code></li>
<li><code>1 &lt;= m, n &lt;= 50</code></li>
<li><code>0 &lt;= image[i][j], color &lt; 2<sup>16</sup></code></li>
<li><code>0 &lt;= sr &lt; m</code></li>
<li><code>0 &lt;= sc &lt; n</code></li>
</ul>
</div></div><br><br></html> `;