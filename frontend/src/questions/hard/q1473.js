module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">1473. Find Median from Data Stream</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.</p>
<ul>
<li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>
<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>
</ul>
<p>Implement the MedianFinder class:</p>
<ul>
<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>
<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>
<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
<strong>Output</strong>
[null, null, null, 1.5, null, 2.0]

<strong>Explanation</strong>
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code></li>
<li>There will be at least one element in the data structure before calling <code>findMedian</code>.</li>
<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</li>
</ul>
<p> </p>
<p><strong>Follow up:</strong></p>
<ul>
<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
</ul>
</div></div><br><br></html> `;