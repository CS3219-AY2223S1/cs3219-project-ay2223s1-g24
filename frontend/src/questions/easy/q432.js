module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************************<div id="title">432. Rearrange Characters to Make Target String</div>
************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two <strong>0-indexed</strong> strings <code>s</code> and <code>target</code>. You can take some letters from <code>s</code> and rearrange them to form new strings.</p>
<p>Return<em> the <strong>maximum</strong> number of copies of </em><code>target</code><em> that can be formed by taking letters from </em><code>s</code><em> and rearranging them.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ilovecodingonleetcode", target = "code"
<strong>Output:</strong> 2
<strong>Explanation:</strong>
For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
We can make at most two copies of "code", so we return 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcba", target = "abc"
<strong>Output:</strong> 1
<strong>Explanation:</strong>
We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
We can make at most one copy of "abc", so we return 1.
Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "abbaccaddaeea", target = "aaaaa"
<strong>Output:</strong> 1
<strong>Explanation:</strong>
We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of "aaaaa", so we return 1.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 100</code></li>
<li><code>1 &lt;= target.length &lt;= 10</code></li>
<li><code>s</code> and <code>target</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;