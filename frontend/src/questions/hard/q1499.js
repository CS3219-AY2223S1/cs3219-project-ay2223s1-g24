module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1499. Count The Repetitions</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>We define <code>str = [s, n]</code> as the string <code>str</code> which consists of the string <code>s</code> concatenated <code>n</code> times.</p>
<ul>
<li>For example, <code>str == ["abc", 3] =="abcabcabc"</code>.</li>
</ul>
<p>We define that string <code>s1</code> can be obtained from string <code>s2</code> if we can remove some characters from <code>s2</code> such that it becomes <code>s1</code>.</p>
<ul>
<li>For example, <code>s1 = "abc"</code> can be obtained from <code>s2 = "ab<strong><u>dbe</u></strong>c"</code> based on our definition by removing the bolded underlined characters.</li>
</ul>
<p>You are given two strings <code>s1</code> and <code>s2</code> and two integers <code>n1</code> and <code>n2</code>. You have the two strings <code>str1 = [s1, n1]</code> and <code>str2 = [s2, n2]</code>.</p>
<p>Return <em>the maximum integer </em><code>m</code><em> such that </em><code>str = [str2, m]</code><em> can be obtained from </em><code>str1</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
<strong>Output:</strong> 2
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s1.length, s2.length &lt;= 100</code></li>
<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
<li><code>1 &lt;= n1, n2 &lt;= 10<sup>6</sup></code></li>
</ul>
</div></div><br><br></html> `;