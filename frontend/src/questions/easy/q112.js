module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">112. Distribute Candies</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>Alice has <code>n</code> candies, where the <code>i<sup>th</sup></code> candy is of type <code>candyType[i]</code>. Alice noticed that she started to gain weight, so she visited a doctor.</p>
<p>The doctor advised Alice to only eat <code>n / 2</code> of the candies she has (<code>n</code> is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.</p>
<p>Given the integer array <code>candyType</code> of length <code>n</code>, return <em>the <strong>maximum</strong> number of different types of candies she can eat if she only eats </em><code>n / 2</code><em> of them</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> candyType = [1,1,2,2,3,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> candyType = [1,1,2,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> candyType = [6,6,6,6]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == candyType.length</code></li>
<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
<li><code>n</code> is even.</li>
<li><code>-10<sup>5</sup> &lt;= candyType[i] &lt;= 10<sup>5</sup></code></li>
</ul>
</div></div><br><br></html> `;