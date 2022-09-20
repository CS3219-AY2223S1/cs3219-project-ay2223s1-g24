module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*********************************<div id="title">330. Count Items Matching a Rule</div>
*********************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>items</code>, where each <code>items[i] = [type<sub>i</sub>, color<sub>i</sub>, name<sub>i</sub>]</code> describes the type, color, and name of the <code>i<sup>th</sup></code> item. You are also given a rule represented by two strings, <code>ruleKey</code> and <code>ruleValue</code>.</p>
<p>The <code>i<sup>th</sup></code> item is said to match the rule if <strong>one</strong> of the following is true:</p>
<ul>
<li><code>ruleKey == "type"</code> and <code>ruleValue == type<sub>i</sub></code>.</li>
<li><code>ruleKey == "color"</code> and <code>ruleValue == color<sub>i</sub></code>.</li>
<li><code>ruleKey == "name"</code> and <code>ruleValue == name<sub>i</sub></code>.</li>
</ul>
<p>Return <em>the number of items that match the given rule</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one item matching the given rule, which is ["computer","silver","lenovo"].
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= items.length &lt;= 10<sup>4</sup></code></li>
<li><code>1 &lt;= type<sub>i</sub>.length, color<sub>i</sub>.length, name<sub>i</sub>.length, ruleValue.length &lt;= 10</code></li>
<li><code>ruleKey</code> is equal to either <code>"type"</code>, <code>"color"</code>, or <code>"name"</code>.</li>
<li>All strings consist only of lowercase letters.</li>
</ul>
</div></div><br><br></html> `;