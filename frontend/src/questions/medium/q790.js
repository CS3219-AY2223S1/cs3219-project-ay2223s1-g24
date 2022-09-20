module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">790. Custom Sort String</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given two strings order and s. All the characters of <code>order</code> are <strong>unique</strong> and were sorted in some custom order previously.</p>
<p>Permute the characters of <code>s</code> so that they match the order that <code>order</code> was sorted. More specifically, if a character <code>x</code> occurs before a character <code>y</code> in <code>order</code>, then <code>x</code> should occur before <code>y</code> in the permuted string.</p>
<p>Return <em>any permutation of </em><code>s</code><em> that satisfies this property</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> order = "cba", s = "abcd"
<strong>Output:</strong> "cbad"
<strong>Explanation:</strong> 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> order = "cbafg", s = "abcd"
<strong>Output:</strong> "cbad"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= order.length &lt;= 26</code></li>
<li><code>1 &lt;= s.length &lt;= 200</code></li>
<li><code>order</code> and <code>s</code> consist of lowercase English letters.</li>
<li>All the characters of <code>order</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;