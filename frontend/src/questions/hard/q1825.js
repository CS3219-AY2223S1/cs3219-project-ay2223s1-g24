module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">1825. Substring With Largest Variance</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>The <strong>variance</strong> of a string is defined as the largest difference between the number of occurrences of <strong>any</strong> <code>2</code> characters present in the string. Note the two characters may or may not be the same.</p>
<p>Given a string <code>s</code> consisting of lowercase English letters only, return <em>the <strong>largest variance</strong> possible among all <strong>substrings</strong> of</em> <code>s</code>.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aababbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong>
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings "a", "aa", "ab", "abab", "aababb", "ba", "b", "bb", and "bbb".
- Variance 1 for substrings "aab", "aba", "abb", "aabab", "ababb", "aababbb", and "bab".
- Variance 2 for substrings "aaba", "ababbb", "abbb", and "babb".
- Variance 3 for substring "babbb".
Since the largest possible variance is 3, we return it.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcde"
<strong>Output:</strong> 0
<strong>Explanation:</strong>
No letter occurs more than once in s, so the variance of every substring is 0.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;