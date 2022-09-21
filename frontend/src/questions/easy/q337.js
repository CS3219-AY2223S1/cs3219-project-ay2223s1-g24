module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************************************<div id="title">337. Number of Different Integers in a String</div>
**********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>word</code> that consists of digits and lowercase English letters.</p>
<p>You will replace every non-digit character with a space. For example, <code>"a123bc34d8ef34"</code> will become <code>" 123  34 8  34"</code>. Notice that you are left with some integers that are separated by at least one space: <code>"123"</code>, <code>"34"</code>, <code>"8"</code>, and <code>"34"</code>.</p>
<p>Return <em>the number of <strong>different</strong> integers after performing the replacement operations on </em><code>word</code>.</p>
<p>Two integers are considered different if their decimal representations <strong>without any leading zeros</strong> are different.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> word = "a<u>123</u>bc<u>34</u>d<u>8</u>ef<u>34</u>"
<strong>Output:</strong> 3
<strong>Explanation: </strong>The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> word = "leet<u>1234</u>code<u>234</u>"
<strong>Output:</strong> 2
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> word = "a<u>1</u>b<u>01</u>c<u>001</u>"
<strong>Output:</strong> 1
<strong>Explanation: </strong>The three integers "1", "01", and "001" all represent the same integer because
the leading zeros are ignored when comparing their decimal values.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= word.length &lt;= 1000</code></li>
<li><code>word</code> consists of digits and lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;