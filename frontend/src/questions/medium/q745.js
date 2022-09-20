module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>******************<div id="title">745. Map Sum Pairs</div>
******************<div class="content__u3I1 question-content__JfgR"><div><p>Design a map that allows you to do the following:</p>
<ul>
<li>Maps a string key to a given value.</li>
<li>Returns the sum of the values that have a key with a prefix equal to a given string.</li>
</ul>
<p>Implement the <code>MapSum</code> class:</p>
<ul>
<li><code>MapSum()</code> Initializes the <code>MapSum</code> object.</li>
<li><code>void insert(String key, int val)</code> Inserts the <code>key-val</code> pair into the map. If the <code>key</code> already existed, the original <code>key-value</code> pair will be overridden to the new one.</li>
<li><code>int sum(string prefix)</code> Returns the sum of all the pairs' value whose <code>key</code> starts with the <code>prefix</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
<strong>Output</strong>
[null, null, 3, null, 5]

<strong>Explanation</strong>
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (<u>ap</u>ple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (<u>ap</u>ple + <u>ap</u>p = 3 + 2 = 5)
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= key.length, prefix.length &lt;= 50</code></li>
<li><code>key</code> and <code>prefix</code> consist of only lowercase English letters.</li>
<li><code>1 &lt;= val &lt;= 1000</code></li>
<li>At most <code>50</code> calls will be made to <code>insert</code> and <code>sum</code>.</li>
</ul>
</div></div><br><br></html> `;