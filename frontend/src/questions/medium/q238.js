module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">694. Beautiful Arrangement</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>Suppose you have <code>n</code> integers labeled <code>1</code> through <code>n</code>. A permutation of those <code>n</code> integers <code>perm</code> (<strong>1-indexed</strong>) is considered a <strong>beautiful arrangement</strong> if for every <code>i</code> (<code>1 &lt;= i &lt;= n</code>), <strong>either</strong> of the following is true:</p>
<ul>
<li><code>perm[i]</code> is divisible by <code>i</code>.</li>
<li><code>i</code> is divisible by <code>perm[i]</code>.</li>
</ul>
<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of the <strong>beautiful arrangements</strong> that you can construct</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<b>Explanation:</b> 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 15</code></li>
</ul>
</div></div><br><br></html> `;