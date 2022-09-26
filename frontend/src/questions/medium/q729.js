module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">729. Replace Words</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>In English, we have a concept called <strong>root</strong>, which can be followed by some other word to form another longer word - let's call this word <strong>successor</strong>. For example, when the <strong>root</strong> <code>"an"</code> is followed by the <strong>successor</strong> word <code>"other"</code>, we can form a new word <code>"another"</code>.</p>
<p>Given a <code>dictionary</code> consisting of many <strong>roots</strong> and a <code>sentence</code> consisting of words separated by spaces, replace all the <strong>successors</strong> in the sentence with the <strong>root</strong> forming it. If a <strong>successor</strong> can be replaced by more than one <strong>root</strong>, replace it with the <strong>root</strong> that has <strong>the shortest length</strong>.</p>
<p>Return <em>the <code>sentence</code></em> after the replacement.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
<strong>Output:</strong> "the cat was rat by the bat"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
<strong>Output:</strong> "a a b c"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= dictionary.length &lt;= 1000</code></li>
<li><code>1 &lt;= dictionary[i].length &lt;= 100</code></li>
<li><code>dictionary[i]</code> consists of only lower-case letters.</li>
<li><code>1 &lt;= sentence.length &lt;= 10<sup>6</sup></code></li>
<li><code>sentence</code> consists of only lower-case letters and spaces.</li>
<li>The number of words in <code>sentence</code> is in the range <code>[1, 1000]</code></li>
<li>The length of each word in <code>sentence</code> is in the range <code>[1, 1000]</code></li>
<li>Every two consecutive words in <code>sentence</code> will be separated by exactly one space.</li>
<li><code>sentence</code> does not have leading or trailing spaces.</li>
</ul>
</div></div><br><br></html> `;