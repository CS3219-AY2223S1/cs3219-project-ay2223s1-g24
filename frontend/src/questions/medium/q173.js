module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">629. Elimination Game</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>You have a list <code>arr</code> of all integers in the range <code>[1, n]</code> sorted in a strictly increasing order. Apply the following algorithm on <code>arr</code>:</p>
<ul>
<li>Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.</li>
<li>Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.</li>
<li>Keep repeating the steps again, alternating left to right and right to left, until a single number remains.</li>
</ul>
<p>Given the integer <code>n</code>, return <em>the last number that remains in</em> <code>arr</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 9
<strong>Output:</strong> 6
<strong>Explanation:</strong>
arr = [<u>1</u>, 2, <u>3</u>, 4, <u>5</u>, 6, <u>7</u>, 8, <u>9</u>]
arr = [2, <u>4</u>, 6, <u>8</u>]
arr = [<u>2</u>, 6]
arr = [6]
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>
</div></div><br><br></html> `;