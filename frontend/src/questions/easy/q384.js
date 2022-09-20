module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*************************************<div id="title">384. Kth Distinct String in an Array</div>
*************************************<div class="content__u3I1 question-content__JfgR"><div><p>A <strong>distinct string</strong> is a string that is present only <strong>once</strong> in an array.</p>
<p>Given an array of strings <code>arr</code>, and an integer <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> <strong>distinct string</strong> present in </em><code>arr</code>. If there are <strong>fewer</strong> than <code>k</code> distinct strings, return <em>an <strong>empty string </strong></em><code>""</code>.</p>
<p>Note that the strings are considered in the <strong>order in which they appear</strong> in the array.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> arr = ["d","b","c","b","c","a"], k = 2
<strong>Output:</strong> "a"
<strong>Explanation:</strong>
The only distinct strings in arr are "d" and "a".
"d" appears 1<sup>st</sup>, so it is the 1<sup>st</sup> distinct string.
"a" appears 2<sup>nd</sup>, so it is the 2<sup>nd</sup> distinct string.
Since k == 2, "a" is returned. 
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> arr = ["aaa","aa","a"], k = 1
<strong>Output:</strong> "aaa"
<strong>Explanation:</strong>
All strings in arr are distinct, so the 1<sup>st</sup> string "aaa" is returned.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> arr = ["a","b","a"], k = 3
<strong>Output:</strong> ""
<strong>Explanation:</strong>
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= arr.length &lt;= 1000</code></li>
<li><code>1 &lt;= arr[i].length &lt;= 5</code></li>
<li><code>arr[i]</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;