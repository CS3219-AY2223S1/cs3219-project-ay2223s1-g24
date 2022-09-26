module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">1723. Building Boxes</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>You have a cubic storeroom where the width, length, and height of the room are all equal to <code>n</code> units. You are asked to place <code>n</code> boxes in this room where each box is a cube of unit side length. There are however some rules to placing the boxes:</p>
<ul>
<li>You can place the boxes anywhere on the floor.</li>
<li>If box <code>x</code> is placed on top of the box <code>y</code>, then each side of the four vertical sides of the box <code>y</code> <strong>must</strong> either be adjacent to another box or to a wall.</li>
</ul>
<p>Given an integer <code>n</code>, return<em> the <strong>minimum</strong> possible number of boxes touching the floor.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/3-boxes.png" style="width: 135px; height: 143px;"/></p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> The figure above is for the placement of the three boxes.
These boxes are placed in the corner of the room, where the corner is on the left side.
</pre>
<p><strong>Example 2:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/4-boxes.png" style="width: 135px; height: 179px;"/></p>
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> The figure above is for the placement of the four boxes.
These boxes are placed in the corner of the room, where the corner is on the left side.
</pre>
<p><strong>Example 3:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/10-boxes.png" style="width: 271px; height: 257px;"/></p>
<pre><strong>Input:</strong> n = 10
<strong>Output:</strong> 6
<strong>Explanation:</strong> The figure above is for the placement of the ten boxes.
These boxes are placed in the corner of the room, where the corner is on the back side.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;