module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************<div id="title">159. Goat Latin</div>
***************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>sentence</code> that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.</p>
<p>We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:</p>
<ul>
<li>If a word begins with a vowel (<code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, or <code>'u'</code>), append <code>"ma"</code> to the end of the word.

	<ul>
<li>For example, the word <code>"apple"</code> becomes <code>"applema"</code>.</li>
</ul>
</li>
<li>If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add <code>"ma"</code>.
	<ul>
<li>For example, the word <code>"goat"</code> becomes <code>"oatgma"</code>.</li>
</ul>
</li>
<li>Add one letter <code>'a'</code> to the end of each word per its word index in the sentence, starting with <code>1</code>.
	<ul>
<li>For example, the first word gets <code>"a"</code> added to the end, the second word gets <code>"aa"</code> added to the end, and so on.</li>
</ul>
</li>
</ul>
<p>Return<em> the final sentence representing the conversion from sentence to Goat Latin</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> sentence = "I speak Goat Latin"
<strong>Output:</strong> "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> sentence = "The quick brown fox jumped over the lazy dog"
<strong>Output:</strong> "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= sentence.length &lt;= 150</code></li>
<li><code>sentence</code> consists of English letters and spaces.</li>
<li><code>sentence</code> has no leading or trailing spaces.</li>
<li>All the words in <code>sentence</code> are separated by a single space.</li>
</ul>
</div></div><br><br></html> `;