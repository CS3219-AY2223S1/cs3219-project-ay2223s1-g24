module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************************<div id="title">1747. Number of Ways to Rearrange Sticks With K Sticks Visible</div>
**************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> uniquely-sized sticks whose lengths are integers from <code>1</code> to <code>n</code>. You want to arrange the sticks such that <strong>exactly</strong> <code>k</code> sticks are <strong>visible</strong> from the left. A stick is <strong>visible</strong> from the left if there are no <strong>longer</strong> sticks to the <strong>left</strong> of it.</p>
<ul>
<li>For example, if the sticks are arranged <code>[<u>1</u>,<u>3</u>,2,<u>5</u>,4]</code>, then the sticks with lengths <code>1</code>, <code>3</code>, and <code>5</code> are visible from the left.</li>
</ul>
<p>Given <code>n</code> and <code>k</code>, return <em>the <strong>number</strong> of such arrangements</em>. Since the answer may be large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> [<u>1</u>,<u>3</u>,2], [<u>2</u>,<u>3</u>,1], and [<u>2</u>,1,<u>3</u>] are the only arrangements such that exactly 2 sticks are visible.
The visible sticks are underlined.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 5, k = 5
<strong>Output:</strong> 1
<strong>Explanation:</strong> [<u>1</u>,<u>2</u>,<u>3</u>,<u>4</u>,<u>5</u>] is the only arrangement such that all 5 sticks are visible.
The visible sticks are underlined.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 20, k = 11
<strong>Output:</strong> 647427950
<strong>Explanation:</strong> There are 647427950 (mod 10<sup>9 </sup>+ 7) ways to rearrange the sticks such that exactly 11 sticks are visible.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 1000</code></li>
<li><code>1 &lt;= k &lt;= n</code></li>
</ul>
</div></div><br><br></html> `;