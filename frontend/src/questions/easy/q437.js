module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************<div id="title">437. Count Asterisks</div>
*********************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>s</code>, where every <strong>two</strong> consecutive vertical bars <code>'|'</code> are grouped into a <strong>pair</strong>. In other words, the 1<sup>st</sup> and 2<sup>nd</sup> <code>'|'</code> make a pair, the 3<sup>rd</sup> and 4<sup>th</sup> <code>'|'</code> make a pair, and so forth.</p>
<p>Return <em>the number of </em><code>'*'</code><em> in </em><code>s</code><em>, <strong>excluding</strong> the </em><code>'*'</code><em> between each pair of </em><code>'|'</code>.</p>
<p><strong>Note</strong> that each <code>'|'</code> will belong to <strong>exactly</strong> one pair.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "l|*e*et|c**o|*de|"
<strong>Output:</strong> 2
<strong>Explanation:</strong> The considered characters are underlined: "<u>l</u>|*e*et|<u>c**o</u>|*de|".
The characters between the first and second '|' are excluded from the answer.
Also, the characters between the third and fourth '|' are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "iamprogrammer"
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this example, there are no asterisks in s. Therefore, we return 0.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "yo|uar|e**|b|e***au|tifu|l"
<strong>Output:</strong> 5
<strong>Explanation:</strong> The considered characters are underlined: "<u>yo</u>|uar|<u>e**</u>|b|<u>e***au</u>|tifu|<u>l</u>". There are 5 asterisks considered. Therefore, we return 5.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 1000</code></li>
<li><code>s</code> consists of lowercase English letters, vertical bars <code>'|'</code>, and asterisks <code>'*'</code>.</li>
<li><code>s</code> contains an <strong>even</strong> number of vertical bars <code>'|'</code>.</li>
</ul>
</div></div><br><br></html> `;