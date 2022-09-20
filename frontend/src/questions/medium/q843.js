module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">843. Find and Replace Pattern</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of strings <code>words</code> and a string <code>pattern</code>, return <em>a list of</em> <code>words[i]</code> <em>that match</em> <code>pattern</code>. You may return the answer in <strong>any order</strong>.</p>
<p>A word matches the pattern if there exists a permutation of letters <code>p</code> so that after replacing every letter <code>x</code> in the pattern with <code>p(x)</code>, we get the desired word.</p>
<p>Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
<strong>Output:</strong> ["mee","aqq"]
<strong>Explanation:</strong> "mee" matches the pattern because there is a permutation {a -&gt; m, b -&gt; e, ...}. 
"ccc" does not match the pattern because {a -&gt; c, b -&gt; c, ...} is not a permutation, since a and b map to the same letter.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["a","b","c"], pattern = "a"
<strong>Output:</strong> ["a","b","c"]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= pattern.length &lt;= 20</code></li>
<li><code>1 &lt;= words.length &lt;= 50</code></li>
<li><code>words[i].length == pattern.length</code></li>
<li><code>pattern</code> and <code>words[i]</code> are lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;