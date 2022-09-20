module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************************<div id="title">449. Minimum Recolors to Get K Consecutive Black Blocks</div>
********************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> string <code>blocks</code> of length <code>n</code>, where <code>blocks[i]</code> is either <code>'W'</code> or <code>'B'</code>, representing the color of the <code>i<sup>th</sup></code> block. The characters <code>'W'</code> and <code>'B'</code> denote the colors white and black, respectively.</p>
<p>You are also given an integer <code>k</code>, which is the desired number of <strong>consecutive</strong> black blocks.</p>
<p>In one operation, you can <strong>recolor</strong> a white block such that it becomes a black block.</p>
<p>Return<em> the <strong>minimum</strong> number of operations needed such that there is at least <strong>one</strong> occurrence of </em><code>k</code><em> consecutive black blocks.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> blocks = "WBBWWBBWBW", k = 7
<strong>Output:</strong> 3
<strong>Explanation:</strong>
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW". 
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> blocks = "WBWBBBW", k = 2
<strong>Output:</strong> 0
<strong>Explanation:</strong>
No changes need to be made, since 2 consecutive black blocks already exist.
Therefore, we return 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == blocks.length</code></li>
<li><code>1 &lt;= n &lt;= 100</code></li>
<li><code>blocks[i]</code> is either <code>'W'</code> or <code>'B'</code>.</li>
<li><code>1 &lt;= k &lt;= n</code></li>
</ul>
</div></div><br><br></html> `;