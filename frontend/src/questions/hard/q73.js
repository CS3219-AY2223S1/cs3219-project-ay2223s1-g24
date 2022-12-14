module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">1503. Smallest Good Base</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code> represented as a string, return <em>the smallest <strong>good base</strong> of</em> <code>n</code>.</p>
<p>We call <code>k &gt;= 2</code> a <strong>good base</strong> of <code>n</code>, if all digits of <code>n</code> base <code>k</code> are <code>1</code>'s.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = "13"
<strong>Output:</strong> "3"
<strong>Explanation:</strong> 13 base 3 is 111.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = "4681"
<strong>Output:</strong> "8"
<strong>Explanation:</strong> 4681 base 8 is 11111.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = "1000000000000000000"
<strong>Output:</strong> "999999999999999999"
<strong>Explanation:</strong> 1000000000000000000 base 999999999999999999 is 11.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n</code> is an integer in the range <code>[3, 10<sup>18</sup>]</code>.</li>
<li><code>n</code> does not contain any leading zeros.</li>
</ul>
</div></div><br><br></html> `;