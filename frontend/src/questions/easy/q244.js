module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">244. Remove Palindromic Subsequences</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> consisting <strong>only</strong> of letters <code>'a'</code> and <code>'b'</code>. In a single step you can remove one <strong>palindromic subsequence</strong> from <code>s</code>.</p>
<p>Return <em>the <strong>minimum</strong> number of steps to make the given string empty</em>.</p>
<p>A string is a <strong>subsequence</strong> of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does <strong>not</strong> necessarily need to be contiguous.</p>
<p>A string is called <strong>palindrome</strong> if is one that reads the same backward as well as forward.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ababa"
<strong>Output:</strong> 1
<strong>Explanation:</strong> s is already a palindrome, so its entirety can be removed in a single step.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abb"
<strong>Output:</strong> 2
<strong>Explanation:</strong> "<u>a</u>bb" -&gt; "<u>bb</u>" -&gt; "". 
Remove palindromic subsequence "a" then "bb".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "baabb"
<strong>Output:</strong> 2
<strong>Explanation:</strong> "<u>baa</u>b<u>b</u>" -&gt; "<u>b</u>" -&gt; "". 
Remove palindromic subsequence "baab" then "b".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s[i]</code> is either <code>'a'</code> or <code>'b'</code>.</li>
</ul>
</div></div><br><br></html> `;