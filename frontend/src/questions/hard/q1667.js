module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************************<div id="title">1667. Maximum Number of Darts Inside of a Circular Dartboard</div>
************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Alice is throwing <code>n</code> darts on a very large wall. You are given an array <code>darts</code> where <code>darts[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> is the position of the <code>i<sup>th</sup></code> dart that Alice threw on the wall.</p>
<p>Bob knows the positions of the <code>n</code> darts on the wall. He wants to place a dartboard of radius <code>r</code> on the wall so that the maximum number of darts that Alice throws lies on the dartboard.</p>
<p>Given the integer <code>r</code>, return <em>the maximum number of darts that can lie on the dartboard</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/29/sample_1_1806.png" style="width: 248px; height: 211px;"/>
<pre><strong>Input:</strong> darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> Circle dartboard with center in (0,0) and radius = 2 contain all points.
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/29/sample_2_1806.png" style="width: 306px; height: 244px;"/>
<pre><strong>Input:</strong> darts = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong> Circle dartboard with center in (0,4) and radius = 5 contain all points except the point (7,8).
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= darts.length &lt;= 100</code></li>
<li><code>darts[i].length == 2</code></li>
<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= r &lt;= 5000</code></li>
</ul>
</div></div><br><br></html> `;