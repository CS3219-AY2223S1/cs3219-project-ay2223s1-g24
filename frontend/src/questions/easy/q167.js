module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************<div id="title">167. Binary Gap</div>
***************<div class="content__u3I1 question-content__JfgR"><div><p>Given a positive integer <code>n</code>, find and return <em>the <strong>longest distance</strong> between any two <strong>adjacent</strong> </em><code>1</code><em>'s in the binary representation of </em><code>n</code><em>. If there are no two adjacent </em><code>1</code><em>'s, return </em><code>0</code><em>.</em></p>
<p>Two <code>1</code>'s are <strong>adjacent</strong> if there are only <code>0</code>'s separating them (possibly no <code>0</code>'s). The <b>distance</b> between two <code>1</code>'s is the absolute difference between their bit positions. For example, the two <code>1</code>'s in <code>"1001"</code> have a distance of 3.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 22
<strong>Output:</strong> 2
<strong>Explanation:</strong> 22 in binary is "10110".
The first adjacent pair of 1's is "<u>1</u>0<u>1</u>10" with a distance of 2.
The second adjacent pair of 1's is "10<u>11</u>0" with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that "<u>1</u>01<u>1</u>0" is not a valid pair since there is a 1 separating the two 1's underlined.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 8
<strong>Output:</strong> 0
<strong>Explanation:</strong> 8 in binary is "1000".
There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> 5 in binary is "101".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;