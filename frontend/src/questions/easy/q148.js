module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*****************************<div id="title">148. Shortest Completing Word</div>
*****************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>licensePlate</code> and an array of strings <code>words</code>, find the <strong>shortest completing</strong> word in <code>words</code>.</p>
<p>A <strong>completing</strong> word is a word that <strong>contains all the letters</strong> in <code>licensePlate</code>. <strong>Ignore numbers and spaces</strong> in <code>licensePlate</code>, and treat letters as <strong>case insensitive</strong>. If a letter appears more than once in <code>licensePlate</code>, then it must appear in the word the same number of times or more.</p>
<p>For example, if <code>licensePlate</code><code> = "aBc 12c"</code>, then it contains letters <code>'a'</code>, <code>'b'</code> (ignoring case), and <code>'c'</code> twice. Possible <strong>completing</strong> words are <code>"abccdef"</code>, <code>"caaacab"</code>, and <code>"cbca"</code>.</p>
<p>Return <em>the shortest <strong>completing</strong> word in </em><code>words</code><em>.</em> It is guaranteed an answer exists. If there are multiple shortest <strong>completing</strong> words, return the <strong>first</strong> one that occurs in <code>words</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
<strong>Output:</strong> "steps"
<strong>Explanation:</strong> licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
"step" contains 't' and 'p', but only contains 1 's'.
"steps" contains 't', 'p', and both 's' characters.
"stripe" is missing an 's'.
"stepple" is missing an 's'.
Since "steps" is the only word containing all the letters, that is the answer.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
<strong>Output:</strong> "pest"
<strong>Explanation:</strong> licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= licensePlate.length &lt;= 7</code></li>
<li><code>licensePlate</code> contains digits, letters (uppercase or lowercase), or space <code>' '</code>.</li>
<li><code>1 &lt;= words.length &lt;= 1000</code></li>
<li><code>1 &lt;= words[i].length &lt;= 15</code></li>
<li><code>words[i]</code> consists of lower case English letters.</li>
</ul>
</div></div><br><br></html> `;