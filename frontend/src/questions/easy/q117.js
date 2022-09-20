module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************************<div id="title">117. Minimum Index Sum of Two Lists</div>
***********************************<div class="content__u3I1 question-content__JfgR"><div><p>Given two arrays of strings <code>list1</code> and <code>list2</code>, find the <strong>common strings with the least index sum</strong>.</p>
<p>A <strong>common string</strong> is a string that appeared in both <code>list1</code> and <code>list2</code>.</p>
<p>A <strong>common string with the least index sum</strong> is a common string such that if it appeared at <code>list1[i]</code> and <code>list2[j]</code> then <code>i + j</code> should be the minimum value among all the other <strong>common strings</strong>.</p>
<p>Return <em>all the <strong>common strings with the least index sum</strong></em>. Return the answer in <strong>any order</strong>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
<strong>Output:</strong> ["Shogun"]
<strong>Explanation:</strong> The only common string is "Shogun".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
<strong>Output:</strong> ["Shogun"]
<strong>Explanation:</strong> The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
<strong>Output:</strong> ["sad","happy"]
<strong>Explanation:</strong> There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= list1.length, list2.length &lt;= 1000</code></li>
<li><code>1 &lt;= list1[i].length, list2[i].length &lt;= 30</code></li>
<li><code>list1[i]</code> and <code>list2[i]</code> consist of spaces <code>' '</code> and English letters.</li>
<li>All the strings of <code>list1</code> are <strong>unique</strong>.</li>
<li>All the strings of <code>list2</code> are <strong>unique</strong>.</li>
</ul>
</div></div><br><br></html> `;