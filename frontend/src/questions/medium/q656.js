module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">656. String Compression</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of characters <code>chars</code>, compress it using the following algorithm:</p>
<p>Begin with an empty string <code>s</code>. For each group of <strong>consecutive repeating characters</strong> in <code>chars</code>:</p>
<ul>
<li>If the group's length is <code>1</code>, append the character to <code>s</code>.</li>
<li>Otherwise, append the character followed by the group's length.</li>
</ul>
<p>The compressed string <code>s</code> <strong>should not be returned separately</strong>, but instead, be stored <strong>in the input character array <code>chars</code></strong>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.</p>
<p>After you are done <strong>modifying the input array,</strong> return <em>the new length of the array</em>.</p>
<p>You must write an algorithm that uses only constant extra space.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> chars = ["a","a","b","b","c","c","c"]
<strong>Output:</strong> Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
<strong>Explanation:</strong> The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> chars = ["a"]
<strong>Output:</strong> Return 1, and the first character of the input array should be: ["a"]
<strong>Explanation:</strong> The only group is "a", which remains uncompressed since it's a single character.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
<strong>Output:</strong> Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
<strong>Explanation:</strong> The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= chars.length &lt;= 2000</code></li>
<li><code>chars[i]</code> is a lowercase English letter, uppercase English letter, digit, or symbol.</li>
</ul>
</div></div><br><br></html> `;