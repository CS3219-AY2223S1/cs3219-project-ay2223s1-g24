module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************************************************<div id="title">1693. Check If String Is Transformable With Substring Sort Operations</div>
*********************************************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s</code> and <code>t</code>, transform string <code>s</code> into string <code>t</code> using the following operation any number of times:</p>
<ul>
<li>Choose a <strong>non-empty</strong> substring in <code>s</code> and sort it in place so the characters are in <strong>ascending order</strong>.

	<ul>
<li>For example, applying the operation on the underlined substring in <code>"1<u>4234</u>"</code> results in <code>"1<u>2344</u>"</code>.</li>
</ul>
</li>
</ul>
<p>Return <code>true</code> if <em>it is possible to transform <code>s</code> into <code>t</code></em>. Otherwise, return <code>false</code>.</p>
<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "84532", t = "34852"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can transform s into t using the following sort operations:
"84<u>53</u>2" (from index 2 to 3) -&gt; "84<u>35</u>2"
"<u>843</u>52" (from index 0 to 2) -&gt; "<u>348</u>52"
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "34521", t = "23415"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can transform s into t using the following sort operations:
"<u>3452</u>1" -&gt; "<u>2345</u>1"
"234<u>51</u>" -&gt; "234<u>15</u>"
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> s = "12345", t = "12435"
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>s.length == t.length</code></li>
<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
<li><code>s</code> and <code>t</code> consist of only digits.</li>
</ul>
</div></div><br><br></html> `;