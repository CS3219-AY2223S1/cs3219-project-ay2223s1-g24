module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">744. Implement Magic Dictionary</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Design a data structure that is initialized with a list of <strong>different</strong> words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.</p>
<p>Implement the <code>MagicDictionary</code> class:</p>
<ul>
<li><code>MagicDictionary()</code> Initializes the object.</li>
<li><code>void buildDict(String[] dictionary)</code> Sets the data structure with an array of distinct strings <code>dictionary</code>.</li>
<li><code>bool search(String searchWord)</code> Returns <code>true</code> if you can change <strong>exactly one character</strong> in <code>searchWord</code> to match any string in the data structure, otherwise returns <code>false</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
<strong>Output</strong>
[null, null, false, true, false, false]

<strong>Explanation</strong>
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
magicDictionary.search("hell"); // return False
magicDictionary.search("leetcoded"); // return False
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= dictionary.length &lt;= 100</code></li>
<li><code>1 &lt;= dictionary[i].length &lt;= 100</code></li>
<li><code>dictionary[i]</code> consists of only lower-case English letters.</li>
<li>All the strings in <code>dictionary</code> are <strong>distinct</strong>.</li>
<li><code>1 &lt;= searchWord.length &lt;= 100</code></li>
<li><code>searchWord</code> consists of only lower-case English letters.</li>
<li><code>buildDict</code> will be called only once before <code>search</code>.</li>
<li>At most <code>100</code> calls will be made to <code>search</code>.</li>
</ul>
</div></div><br><br></html> `;