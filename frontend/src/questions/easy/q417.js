module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************<div id="title">417. Minimum Bit Flips to Convert Number</div>
*****************************************<div class="content__u3I1 question-content__JfgR"><div><p>A <strong>bit flip</strong> of a number <code>x</code> is choosing a bit in the binary representation of <code>x</code> and <strong>flipping</strong> it from either <code>0</code> to <code>1</code> or <code>1</code> to <code>0</code>.</p>
<ul>
<li>For example, for <code>x = 7</code>, the binary representation is <code>111</code> and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get <code>110</code>, flip the second bit from the right to get <code>101</code>, flip the fifth bit from the right (a leading zero) to get <code>10111</code>, etc.</li>
</ul>
<p>Given two integers <code>start</code> and <code>goal</code>, return<em> the <strong>minimum</strong> number of <strong>bit flips</strong> to convert </em><code>start</code><em> to </em><code>goal</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> start = 10, goal = 7
<strong>Output:</strong> 3
<strong>Explanation:</strong> The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 101<u>0</u> -&gt; 101<u>1</u>.
- Flip the third bit from the right: 1<u>0</u>11 -&gt; 1<u>1</u>11.
- Flip the fourth bit from the right: <u>1</u>111 -&gt; <u>0</u>111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> start = 3, goal = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
- Flip the first bit from the right: 01<u>1</u> -&gt; 01<u>0</u>.
- Flip the second bit from the right: 0<u>1</u>0 -&gt; 0<u>0</u>0.
- Flip the third bit from the right: <u>0</u>00 -&gt; <u>1</u>00.
It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= start, goal &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;