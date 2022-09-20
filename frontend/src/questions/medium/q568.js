module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************************<div id="title">568. Design Add and Search Words Data Structure</div>
***********************************************<div class="content__u3I1 question-content__JfgR"><div><p>Design a data structure that supports adding new words and finding if a string matches any previously added string.</p>
<p>Implement the <code>WordDictionary</code> class:</p>
<ul>
<li><code>WordDictionary()</code> Initializes the object.</li>
<li><code>void addWord(word)</code> Adds <code>word</code> to the data structure, it can be matched later.</li>
<li><code>bool search(word)</code> Returns <code>true</code> if there is any string in the data structure that matches <code>word</code> or <code>false</code> otherwise. <code>word</code> may contain dots <code>'.'</code> where dots can be matched with any letter.</li>
</ul>
<p> </p>
<p><strong>Example:</strong></p>
<pre><strong>Input</strong>
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
<strong>Output</strong>
[null,null,null,null,false,true,true,true]

<strong>Explanation</strong>
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word.length &lt;= 25</code></li>
<li><code>word</code> in <code>addWord</code> consists of lowercase English letters.</li>
<li><code>word</code> in <code>search</code> consist of <code>'.'</code> or lowercase English letters.</li>
<li>There will be at most <code>3</code> dots in <code>word</code> for <code>search</code> queries.</li>
<li>At most <code>10<sup>4</sup></code> calls will be made to <code>addWord</code> and <code>search</code>.</li>
</ul>
</div></div><br><br></html> `;