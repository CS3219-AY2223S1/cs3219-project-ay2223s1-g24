module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">650. Minimum Genetic Mutation</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>A gene string can be represented by an 8-character long string, with choices from <code>'A'</code>, <code>'C'</code>, <code>'G'</code>, and <code>'T'</code>.</p>
<p>Suppose we need to investigate a mutation from a gene string <code>start</code> to a gene string <code>end</code> where one mutation is defined as one single character changed in the gene string.</p>
<ul>
<li>For example, <code>"AACCGGTT" --&gt; "AACCGGTA"</code> is one mutation.</li>
</ul>
<p>There is also a gene bank <code>bank</code> that records all the valid gene mutations. A gene must be in <code>bank</code> to make it a valid gene string.</p>
<p>Given the two gene strings <code>start</code> and <code>end</code> and the gene bank <code>bank</code>, return <em>the minimum number of mutations needed to mutate from </em><code>start</code><em> to </em><code>end</code>. If there is no such a mutation, return <code>-1</code>.</p>
<p>Note that the starting point is assumed to be valid, so it might not be included in the bank.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
<strong>Output:</strong> 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
<strong>Output:</strong> 2
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
<strong>Output:</strong> 3
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>start.length == 8</code></li>
<li><code>end.length == 8</code></li>
<li><code>0 &lt;= bank.length &lt;= 10</code></li>
<li><code>bank[i].length == 8</code></li>
<li><code>start</code>, <code>end</code>, and <code>bank[i]</code> consist of only the characters <code>['A', 'C', 'G', 'T']</code>.</li>
</ul>
</div></div><br><br></html> `;