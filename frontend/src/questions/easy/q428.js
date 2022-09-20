module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">428. Find the K-Beauty of a Number</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>The <strong>k-beauty</strong> of an integer <code>num</code> is defined as the number of <strong>substrings</strong> of <code>num</code> when it is read as a string that meet the following conditions:</p>
<ul>
<li>It has a length of <code>k</code>.</li>
<li>It is a divisor of <code>num</code>.</li>
</ul>
<p>Given integers <code>num</code> and <code>k</code>, return <em>the k-beauty of </em><code>num</code>.</p>
<p>Note:</p>
<ul>
<li><strong>Leading zeros</strong> are allowed.</li>
<li><code>0</code> is not a divisor of any value.</li>
</ul>
<p>A <strong>substring</strong> is a contiguous sequence of characters in a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = 240, k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> The following are the substrings of num of length k:
- "24" from "<strong><u>24</u></strong>0": 24 is a divisor of 240.
- "40" from "2<u><strong>40</strong></u>": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = 430043, k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> The following are the substrings of num of length k:
- "43" from "<u><strong>43</strong></u>0043": 43 is a divisor of 430043.
- "30" from "4<u><strong>30</strong></u>043": 30 is not a divisor of 430043.
- "00" from "43<u><strong>00</strong></u>43": 0 is not a divisor of 430043.
- "04" from "430<u><strong>04</strong></u>3": 4 is not a divisor of 430043.
- "43" from "4300<u><strong>43</strong></u>": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= num &lt;= 10<sup>9</sup></code></li>
<li><code>1 &lt;= k &lt;= num.length</code> (taking <code>num</code> as a string)</li>
</ul>
</div></div><br><br></html> `;