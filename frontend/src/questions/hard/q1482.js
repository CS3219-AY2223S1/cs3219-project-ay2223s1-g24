module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1482. Reconstruct Itinerary</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a list of airline <code>tickets</code> where <code>tickets[i] = [from<sub>i</sub>, to<sub>i</sub>]</code> represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.</p>
<p>All of the tickets belong to a man who departs from <code>"JFK"</code>, thus, the itinerary must begin with <code>"JFK"</code>. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.</p>
<ul>
<li>For example, the itinerary <code>["JFK", "LGA"]</code> has a smaller lexical order than <code>["JFK", "LGB"]</code>.</li>
</ul>
<p>You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg" style="width: 382px; height: 222px;"/>
<pre><strong>Input:</strong> tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
<strong>Output:</strong> ["JFK","MUC","LHR","SFO","SJC"]
</pre>
<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg" style="width: 222px; height: 230px;"/>
<pre><strong>Input:</strong> tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
<strong>Output:</strong> ["JFK","ATL","JFK","SFO","ATL","SFO"]
<strong>Explanation:</strong> Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= tickets.length &lt;= 300</code></li>
<li><code>tickets[i].length == 2</code></li>
<li><code>from<sub>i</sub>.length == 3</code></li>
<li><code>to<sub>i</sub>.length == 3</code></li>
<li><code>from<sub>i</sub></code> and <code>to<sub>i</sub></code> consist of uppercase English letters.</li>
<li><code>from<sub>i</sub> != to<sub>i</sub></code></li>
</ul>
</div></div><br><br></html> `;