module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************<div id="title">1522. 24 Game</div>
************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an integer array <code>cards</code> of length <code>4</code>. You have four cards, each containing a number in the range <code>[1, 9]</code>. You should arrange the numbers on these cards in a mathematical expression using the operators <code>['+', '-', '*', '/']</code> and the parentheses <code>'('</code> and <code>')'</code> to get the value 24.</p>
<p>You are restricted with the following rules:</p>
<ul>
<li>The division operator <code>'/'</code> represents real division, not integer division.

	<ul>
<li>For example, <code>4 / (1 - 2 / 3) = 4 / (1 / 3) = 12</code>.</li>
</ul>
</li>
<li>Every operation done is between two numbers. In particular, we cannot use <code>'-'</code> as a unary operator.
	<ul>
<li>For example, if <code>cards = [1, 1, 1, 1]</code>, the expression <code>"-1 - 1 - 1 - 1"</code> is <strong>not allowed</strong>.</li>
</ul>
</li>
<li>You cannot concatenate numbers together
	<ul>
<li>For example, if <code>cards = [1, 2, 1, 2]</code>, the expression <code>"12 + 12"</code> is not valid.</li>
</ul>
</li>
</ul>
<p>Return <code>true</code> if you can get such expression that evaluates to <code>24</code>, and <code>false</code> otherwise.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> cards = [4,1,8,7]
<strong>Output:</strong> true
<strong>Explanation:</strong> (8-4) * (7-1) = 24
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> cards = [1,2,1,2]
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>cards.length == 4</code></li>
<li><code>1 &lt;= cards[i] &lt;= 9</code></li>
</ul>
</div></div><br><br></html> `;