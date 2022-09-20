module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">347. Sorting the Sentence</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>A <strong>sentence</strong> is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.</p>
<p>A sentence can be <strong>shuffled</strong> by appending the <strong>1-indexed word position</strong> to each word then rearranging the words in the sentence.</p>
<ul>
<li>For example, the sentence <code>"This is a sentence"</code> can be shuffled as <code>"sentence4 a3 is2 This1"</code> or <code>"is2 sentence4 This1 a3"</code>.</li>
</ul>
<p>Given a <strong>shuffled sentence</strong> <code>s</code> containing no more than <code>9</code> words, reconstruct and return <em>the original sentence</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "is2 sentence4 This1 a3"
<strong>Output:</strong> "This is a sentence"
<strong>Explanation:</strong> Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "Myself2 Me1 I4 and3"
<strong>Output:</strong> "Me Myself and I"
<strong>Explanation:</strong> Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= s.length &lt;= 200</code></li>
<li><code>s</code> consists of lowercase and uppercase English letters, spaces, and digits from <code>1</code> to <code>9</code>.</li>
<li>The number of words in <code>s</code> is between <code>1</code> and <code>9</code>.</li>
<li>The words in <code>s</code> are separated by a single space.</li>
<li><code>s</code> contains no leading or trailing spaces.</li>
</ul></div></div><br><br></html> `;