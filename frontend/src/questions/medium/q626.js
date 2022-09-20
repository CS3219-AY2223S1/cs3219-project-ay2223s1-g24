module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************<div id="title">626. Mini Parser</div>
****************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return <em>the deserialized</em> <code>NestedInteger</code>.</p>
<p>Each element is either an integer or a list whose elements may also be integers or other lists.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = "324"
<strong>Output:</strong> 324
<strong>Explanation:</strong> You should return a NestedInteger object which contains a single integer 324.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = "[123,[456,[789]]]"
<strong>Output:</strong> [123,[456,[789]]]
<strong>Explanation:</strong> Return a NestedInteger object containing a nested list with 2 elements:
1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
<li><code>s</code> consists of digits, square brackets <code>"[]"</code>, negative sign <code>'-'</code>, and commas <code>','</code>.</li>
<li><code>s</code> is the serialization of valid <code>NestedInteger</code>.</li>
<li>All the values in the input are in the range <code>[-10<sup>6</sup>, 10<sup>6</sup>]</code>.</li>
</ul>
</div></div><br><br></html> `;