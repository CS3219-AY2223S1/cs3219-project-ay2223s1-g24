module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************************************<div id="title">1764. Maximum Product of the Length of Two Palindromic Substrings</div>
*****************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> string <code>s</code> and are tasked with finding two <strong>non-intersecting palindromic </strong>substrings of <strong>odd</strong> length such that the product of their lengths is maximized.</p>
<p>More formally, you want to choose four integers <code>i</code>, <code>j</code>, <code>k</code>, <code>l</code> such that <code>0 &lt;= i &lt;= j &lt; k &lt;= l &lt; s.length</code> and both the substrings <code>s[i...j]</code> and <code>s[k...l]</code> are palindromes and have odd lengths. <code>s[i...j]</code> denotes a substring from index <code>i</code> to index <code>j</code> <strong>inclusive</strong>.</p>
<p>Return <em>the <strong>maximum</strong> possible product of the lengths of the two non-intersecting palindromic substrings.</em></p>
<p>A <strong>palindrome</strong> is a string that is the same forward and backward. A <strong>substring</strong> is a contiguous sequence of characters in a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "ababbb"
<strong>Output:</strong> 9
<strong>Explanation:</strong> Substrings "aba" and "bbb" are palindromes with odd length. product = 3 * 3 = 9.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "zaaaxbbby"
<strong>Output:</strong> 9
<strong>Explanation:</strong> Substrings "aaa" and "bbb" are palindromes with odd length. product = 3 * 3 = 9.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;