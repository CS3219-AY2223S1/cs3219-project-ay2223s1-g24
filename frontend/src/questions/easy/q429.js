module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************************************<div id="title">429. Find Resultant Array After Removing Anagrams</div>
**************************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>0-indexed</strong> string array <code>words</code>, where <code>words[i]</code> consists of lowercase English letters.</p>
<p>In one operation, select any index <code>i</code> such that <code>0 &lt; i &lt; words.length</code> and <code>words[i - 1]</code> and <code>words[i]</code> are <strong>anagrams</strong>, and <strong>delete</strong> <code>words[i]</code> from <code>words</code>. Keep performing this operation as long as you can select an index that satisfies the conditions.</p>
<p>Return <code>words</code> <em>after performing all operations</em>. It can be shown that selecting the indices for each operation in <strong>any</strong> arbitrary order will lead to the same result.</p>
<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, <code>"dacb"</code> is an anagram of <code>"abdc"</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["abba","baba","bbaa","cd","cd"]
<strong>Output:</strong> ["abba","cd"]
<strong>Explanation:</strong>
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
  Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["a","b","c","d","e"]
<strong>Output:</strong> ["a","b","c","d","e"]
<strong>Explanation:</strong>
No two adjacent strings in words are anagrams of each other, so no operations are performed.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 100</code></li>
<li><code>1 &lt;= words[i].length &lt;= 10</code></li>
<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>
</div></div><br><br></html> `;