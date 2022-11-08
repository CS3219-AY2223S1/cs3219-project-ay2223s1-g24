module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">1574. Orderly Queue</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> and an integer <code>k</code>. You can choose one of the first <code>k</code> letters of <code>s</code> and append it at the end of the string..</p>
<p>Return <em>the lexicographically smallest string you could have after applying the mentioned step any number of moves</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "cba", k = 1
<strong>Output:</strong> "acb"
<strong>Explanation:</strong> 
In the first move, we move the 1<sup>st</sup> character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1<sup>st</sup> character 'b' to the end, obtaining the final result "acb".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "baaca", k = 3
<strong>Output:</strong> "aaabc"
<strong>Explanation:</strong> 
In the first move, we move the 1<sup>st</sup> character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3<sup>rd</sup> character 'c' to the end, obtaining the final result "aaabc".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= s.length &lt;= 1000</code></li>
<li><code>s</code> consist of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;