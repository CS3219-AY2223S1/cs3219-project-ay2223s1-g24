module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************<div id="title">427. Largest 3-Same-Digit Number in String</div>
*******************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>num</code> representing a large integer. An integer is <strong>good</strong> if it meets the following conditions:</p>
<ul>
<li>It is a <strong>substring</strong> of <code>num</code> with length <code>3</code>.</li>
<li>It consists of only one unique digit.</li>
</ul>
<p>Return <em>the <strong>maximum good </strong>integer as a <strong>string</strong> or an empty string </em><code>""</code><em> if no such integer exists</em>.</p>
<p>Note:</p>
<ul>
<li>A <strong>substring</strong> is a contiguous sequence of characters within a string.</li>
<li>There may be <strong>leading zeroes</strong> in <code>num</code> or a good integer.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> num = "6<strong><u>777</u></strong>133339"
<strong>Output:</strong> "777"
<strong>Explanation:</strong> There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> num = "23<strong><u>000</u></strong>19"
<strong>Output:</strong> "000"
<strong>Explanation:</strong> "000" is the only good integer.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> num = "42352338"
<strong>Output:</strong> ""
<strong>Explanation:</strong> No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>3 &lt;= num.length &lt;= 1000</code></li>
<li><code>num</code> only consists of digits.</li>
</ul>
</div></div><br><br></html> `;