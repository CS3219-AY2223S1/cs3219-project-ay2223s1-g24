module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">1787. Sum of k-Mirror Numbers</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>A <strong>k-mirror number</strong> is a <strong>positive</strong> integer <strong>without leading zeros</strong> that reads the same both forward and backward in base-10 <strong>as well as</strong> in base-k.</p>
<ul>
<li>For example, <code>9</code> is a 2-mirror number. The representation of <code>9</code> in base-10 and base-2 are <code>9</code> and <code>1001</code> respectively, which read the same both forward and backward.</li>
<li>On the contrary, <code>4</code> is not a 2-mirror number. The representation of <code>4</code> in base-2 is <code>100</code>, which does not read the same both forward and backward.</li>
</ul>
<p>Given the base <code>k</code> and the number <code>n</code>, return <em>the <strong>sum</strong> of the</em> <code>n</code> <em><strong>smallest</strong> k-mirror numbers</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> k = 2, n = 5
<strong>Output:</strong> 25
<strong>Explanation:
</strong>The 5 smallest 2-mirror numbers and their representations in base-2 are listed as follows:
  base-10    base-2
    1          1
    3          11
    5          101
    7          111
    9          1001
Their sum = 1 + 3 + 5 + 7 + 9 = 25. 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> k = 3, n = 7
<strong>Output:</strong> 499
<strong>Explanation:
</strong>The 7 smallest 3-mirror numbers are and their representations in base-3 are listed as follows:
  base-10    base-3
    1          1
    2          2
    4          11
    8          22
    121        11111
    151        12121
    212        21212
Their sum = 1 + 2 + 4 + 8 + 121 + 151 + 212 = 499.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> k = 7, n = 17
<strong>Output:</strong> 20379000
<strong>Explanation:</strong> The 17 smallest 7-mirror numbers are:
1, 2, 3, 4, 5, 6, 8, 121, 171, 242, 292, 16561, 65656, 2137312, 4602064, 6597956, 6958596
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>2 &lt;= k &lt;= 9</code></li>
<li><code>1 &lt;= n &lt;= 30</code></li>
</ul>
</div></div><br><br></html> `;