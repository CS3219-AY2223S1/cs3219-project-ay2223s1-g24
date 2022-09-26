module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">1810. Minimum Number of Moves to Make Palindrome</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> consisting only of lowercase English letters.</p>
<p>In one <strong>move</strong>, you can select any two <strong>adjacent</strong> characters of <code>s</code> and swap them.</p>
<p>Return <em>the <strong>minimum number of moves</strong> needed to make</em> <code>s</code> <em>a palindrome</em>.</p>
<p><strong>Note</strong> that the input will be generated such that <code>s</code> can always be converted to a palindrome.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aabb"
<strong>Output:</strong> 2
<strong>Explanation:</strong>
We can obtain two palindromes from s, "abba" and "baab". 
- We can obtain "abba" from s in 2 moves: "a<u><strong>ab</strong></u>b" -&gt; "ab<u><strong>ab</strong></u>" -&gt; "abba".
- We can obtain "baab" from s in 2 moves: "a<u><strong>ab</strong></u>b" -&gt; "<u><strong>ab</strong></u>ab" -&gt; "baab".
Thus, the minimum number of moves needed to make s a palindrome is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "letelt"
<strong>Output:</strong> 2
<strong>Explanation:</strong>
One of the palindromes we can obtain from s in 2 moves is "lettel".
One of the ways we can obtain it is "lete<u><strong>lt</strong></u>" -&gt; "let<u><strong>et</strong></u>l" -&gt; "lettel".
Other palindromes such as "tleelt" can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 2000</code></li>
<li><code>s</code> consists only of lowercase English letters.</li>
<li><code>s</code> can be converted to a palindrome using a finite number of moves.</li>
</ul>
</div></div><br><br></html> `;