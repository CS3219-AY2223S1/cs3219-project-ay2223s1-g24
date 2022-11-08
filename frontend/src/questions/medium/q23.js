module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">479. Combination Sum</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.</p>
<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the frequency of at least one of the chosen numbers is different.</p>
<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> candidates = [2,3,6,7], target = 7
<strong>Output:</strong> [[2,2,3],[7]]
<strong>Explanation:</strong>
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> candidates = [2,3,5], target = 8
<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> candidates = [2], target = 1
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= candidates.length &lt;= 30</code></li>
<li><code>2 &lt;= candidates[i] &lt;= 40</code></li>
<li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li>
<li><code>1 &lt;= target &lt;= 500</code></li>
</ul>
</div></div><br><br></html> `;