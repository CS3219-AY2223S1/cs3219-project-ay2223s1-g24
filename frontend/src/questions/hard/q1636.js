module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">1636. Number of Paths with Max Score</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a square <code>board</code> of characters. You can move on the board starting at the bottom right square marked with the character <code>'S'</code>.</p>
<p>You need to reach the top left square marked with the character <code>'E'</code>. The rest of the squares are labeled either with a numeric character <code>1, 2, ..., 9</code> or with an obstacle <code>'X'</code>. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.</p>
<p>Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, <strong>taken modulo <code>10^9 + 7</code></strong>.</p>
<p>In case there is no path, return <code>[0, 0]</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> board = ["E23","2X2","12S"]
<strong>Output:</strong> [7,1]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> board = ["E12","1X1","21S"]
<strong>Output:</strong> [4,2]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> board = ["E11","XXX","11S"]
<strong>Output:</strong> [0,0]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= board.length == board[i].length &lt;= 100</code></li>
</ul></div></div><br><br></html> `;