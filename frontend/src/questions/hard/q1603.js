module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1603. Stream of Characters</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings <code>words</code>.</p>
<p>For example, if <code>words = ["abc", "xyz"]</code> and the stream added the four characters (one by one) <code>'a'</code>, <code>'x'</code>, <code>'y'</code>, and <code>'z'</code>, your algorithm should detect that the suffix <code>"xyz"</code> of the characters <code>"axyz"</code> matches <code>"xyz"</code> from <code>words</code>.</p>
<p>Implement the <code>StreamChecker</code> class:</p>
<ul>
<li><code>StreamChecker(String[] words)</code> Initializes the object with the strings array <code>words</code>.</li>
<li><code>boolean query(char letter)</code> Accepts a new character from the stream and returns <code>true</code> if any non-empty suffix from the stream forms a word that is in <code>words</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
[[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]
<strong>Output</strong>
[null, false, false, false, true, false, true, false, false, false, false, false, true]

<strong>Explanation</strong>
StreamChecker streamChecker = new StreamChecker(["cd", "f", "kl"]);
streamChecker.query("a"); // return False
streamChecker.query("b"); // return False
streamChecker.query("c"); // return False
streamChecker.query("d"); // return True, because 'cd' is in the wordlist
streamChecker.query("e"); // return False
streamChecker.query("f"); // return True, because 'f' is in the wordlist
streamChecker.query("g"); // return False
streamChecker.query("h"); // return False
streamChecker.query("i"); // return False
streamChecker.query("j"); // return False
streamChecker.query("k"); // return False
streamChecker.query("l"); // return True, because 'kl' is in the wordlist
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 2000</code></li>
<li><code>1 &lt;= words[i].length &lt;= 200</code></li>
<li><code>words[i]</code> consists of lowercase English letters.</li>
<li><code>letter</code> is a lowercase English letter.</li>
<li>At most <code>4 * 10<sup>4</sup></code> calls will be made to query.</li>
</ul>
</div></div><br><br></html> `;