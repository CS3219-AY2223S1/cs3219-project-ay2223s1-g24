module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">266. Destination City</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given the array <code>paths</code>, where <code>paths[i] = [cityA<sub>i</sub>, cityB<sub>i</sub>]</code> means there exists a direct path going from <code>cityA<sub>i</sub></code> to <code>cityB<sub>i</sub></code>. <em>Return the destination city, that is, the city without any path outgoing to another city.</em></p>
<p>It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
<strong>Output:</strong> "Sao Paulo" 
<strong>Explanation:</strong> Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -&gt; "New York" -&gt; "Lima" -&gt; "Sao Paulo".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> paths = [["B","C"],["D","B"],["C","A"]]
<strong>Output:</strong> "A"
<strong>Explanation:</strong> All possible trips are: 
"D" -&gt; "B" -&gt; "C" -&gt; "A". 
"B" -&gt; "C" -&gt; "A". 
"C" -&gt; "A". 
"A". 
Clearly the destination city is "A".
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> paths = [["A","Z"]]
<strong>Output:</strong> "Z"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= paths.length &lt;= 100</code></li>
<li><code>paths[i].length == 2</code></li>
<li><code>1 &lt;= cityA<sub>i</sub>.length, cityB<sub>i</sub>.length &lt;= 10</code></li>
<li><code>cityA<sub>i</sub> != cityB<sub>i</sub></code></li>
<li>All strings consist of lowercase and uppercase English letters and the space character.</li>
</ul>
</div></div><br><br></html> `;