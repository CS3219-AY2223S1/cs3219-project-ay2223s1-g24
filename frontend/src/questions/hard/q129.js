module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">1559. Similar String Groups</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>Two strings <code>X</code> and <code>Y</code> are similar if we can swap two letters (in different positions) of <code>X</code>, so that it equals <code>Y</code>. Also two strings <code>X</code> and <code>Y</code> are similar if they are equal.</p>
<p>For example, <code>"tars"</code> and <code>"rats"</code> are similar (swapping at positions <code>0</code> and <code>2</code>), and <code>"rats"</code> and <code>"arts"</code> are similar, but <code>"star"</code> is not similar to <code>"tars"</code>, <code>"rats"</code>, or <code>"arts"</code>.</p>
<p>Together, these form two connected groups by similarity: <code>{"tars", "rats", "arts"}</code> and <code>{"star"}</code>.  Notice that <code>"tars"</code> and <code>"arts"</code> are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.</p>
<p>We are given a list <code>strs</code> of strings where every string in <code>strs</code> is an anagram of every other string in <code>strs</code>. How many groups are there?</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["tars","rats","arts","star"]
<strong>Output:</strong> 2
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> strs = ["omv","ovm"]
<strong>Output:</strong> 1
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= strs.length &lt;= 300</code></li>
<li><code>1 &lt;= strs[i].length &lt;= 300</code></li>
<li><code>strs[i]</code> consists of lowercase letters only.</li>
<li>All words in <code>strs</code> have the same length and are anagrams of each other.</li>
</ul>
</div></div><br><br></html> `;