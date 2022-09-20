module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">1458. Word Break II</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, add spaces in <code>s</code> to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in <strong>any order</strong>.</p>
<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
<strong>Output:</strong> ["cats and dog","cat sand dog"]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
<strong>Output:</strong> ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
<strong>Explanation:</strong> Note that you are allowed to reuse a dictionary word.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
<strong>Output:</strong> []
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 20</code></li>
<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
<li><code>1 &lt;= wordDict[i].length &lt;= 10</code></li>
<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>
<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;