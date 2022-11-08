module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************************************************<div id="title">149. Prime Number of Set Bits in Binary Representation</div>
******************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two integers <code>left</code> and <code>right</code>, return <em>the <strong>count</strong> of numbers in the <strong>inclusive</strong> range </em><code>[left, right]</code><em> having a <strong>prime number of set bits</strong> in their binary representation</em>.</p>
<p>Recall that the <strong>number of set bits</strong> an integer has is the number of <code>1</code>'s present when written in binary.</p>
<ul>
<li>For example, <code>21</code> written in binary is <code>10101</code>, which has <code>3</code> set bits.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> left = 6, right = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong>
6  -&gt; 110 (2 set bits, 2 is prime)
7  -&gt; 111 (3 set bits, 3 is prime)
8  -&gt; 1000 (1 set bit, 1 is not prime)
9  -&gt; 1001 (2 set bits, 2 is prime)
10 -&gt; 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> left = 10, right = 15
<strong>Output:</strong> 5
<strong>Explanation:</strong>
10 -&gt; 1010 (2 set bits, 2 is prime)
11 -&gt; 1011 (3 set bits, 3 is prime)
12 -&gt; 1100 (2 set bits, 2 is prime)
13 -&gt; 1101 (3 set bits, 3 is prime)
14 -&gt; 1110 (3 set bits, 3 is prime)
15 -&gt; 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= left &lt;= right &lt;= 10<sup>6</sup></code></li>
<li><code>0 &lt;= right - left &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div><br><br></html> `;