module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************<div id="title">1736. Maximize Number of Nice Divisors</div>
**************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a positive integer <code>primeFactors</code>. You are asked to construct a positive integer <code>n</code> that satisfies the following conditions:</p>
<ul>
<li>The number of prime factors of <code>n</code> (not necessarily distinct) is <strong>at most</strong> <code>primeFactors</code>.</li>
<li>The number of nice divisors of <code>n</code> is maximized. Note that a divisor of <code>n</code> is <strong>nice</strong> if it is divisible by every prime factor of <code>n</code>. For example, if <code>n = 12</code>, then its prime factors are <code>[2,2,3]</code>, then <code>6</code> and <code>12</code> are nice divisors, while <code>3</code> and <code>4</code> are not.</li>
</ul>
<p>Return <em>the number of nice divisors of</em> <code>n</code>. Since that number can be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p>Note that a prime number is a natural number greater than <code>1</code> that is not a product of two smaller natural numbers. The prime factors of a number <code>n</code> is a list of prime numbers such that their product equals <code>n</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> primeFactors = 5
<strong>Output:</strong> 6
<strong>Explanation:</strong> 200 is a valid value of n.
It has 5 prime factors: [2,2,2,5,5], and it has 6 nice divisors: [10,20,40,50,100,200].
There is not other value of n that has at most 5 prime factors and more nice divisors.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> primeFactors = 8
<strong>Output:</strong> 18
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= primeFactors &lt;= 10<sup>9</sup></code></li>
</ul></div></div><br><br></html> `;