module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************************<div id="title">1613. Online Majority Element In Subarray</div>
*****************************************<div class="content__u3I1 question-content__JfgR"><div><p>Design a data structure that efficiently finds the <strong>majority element</strong> of a given subarray.</p>
<p>The <strong>majority element</strong> of a subarray is an element that occurs <code>threshold</code> times or more in the subarray.</p>
<p>Implementing the <code>MajorityChecker</code> class:</p>
<ul>
<li><code>MajorityChecker(int[] arr)</code> Initializes the instance of the class with the given array <code>arr</code>.</li>
<li><code>int query(int left, int right, int threshold)</code> returns the element in the subarray <code>arr[left...right]</code> that occurs at least <code>threshold</code> times, or <code>-1</code> if no such element exists.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MajorityChecker", "query", "query", "query"]
[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
<strong>Output</strong>
[null, 1, -1, 2]

<strong>Explanation</strong>
MajorityChecker majorityChecker = new MajorityChecker([1, 1, 2, 2, 1, 1]);
majorityChecker.query(0, 5, 4); // return 1
majorityChecker.query(0, 3, 3); // return -1
majorityChecker.query(2, 3, 2); // return 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= arr.length &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= arr[i] &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>0 &lt;= left &lt;= right &lt; arr.length</code></li>
<li><code>threshold &lt;= right - left + 1</code></li>
<li><code>2 * threshold &gt; right - left + 1</code></li>
<li>At most <code>10<sup>4</sup></code> calls will be made to <code>query</code>.</li>
</ul>
</div></div><br><br></html> `;