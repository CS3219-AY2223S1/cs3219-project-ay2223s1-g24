module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>************************************<div id="title">155. Number of Lines To Write String</div>
************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code> of lowercase English letters and an array <code>widths</code> denoting <strong>how many pixels wide</strong> each lowercase English letter is. Specifically, <code>widths[0]</code> is the width of <code>'a'</code>, <code>widths[1]</code> is the width of <code>'b'</code>, and so on.</p>
<p>You are trying to write <code>s</code> across several lines, where <strong>each line is no longer than </strong><code>100</code><strong> pixels</strong>. Starting at the beginning of <code>s</code>, write as many letters on the first line such that the total width does not exceed <code>100</code> pixels. Then, from where you stopped in <code>s</code>, continue writing as many letters as you can on the second line. Continue this process until you have written all of <code>s</code>.</p>
<p>Return <em>an array </em><code>result</code><em> of length 2 where:</em></p>
<ul>
<li><code>result[0]</code><em> is the total number of lines.</em></li>
<li><code>result[1]</code><em> is the width of the last line in pixels.</em></li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
<strong>Output:</strong> [3,60]
<strong>Explanation:</strong> You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
<strong>Output:</strong> [2,4]
<strong>Explanation:</strong> You can write s as follows:
bbbcccdddaa  // 98 pixels wide
a            // 4 pixels wide
There are a total of 2 lines, and the last line is 4 pixels wide.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>widths.length == 26</code></li>
<li><code>2 &lt;= widths[i] &lt;= 10</code></li>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s</code> contains only lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;