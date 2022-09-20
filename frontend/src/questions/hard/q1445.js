module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">1445. Text Justification</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of strings <code>words</code> and a width <code>maxWidth</code>, format the text such that each line has exactly <code>maxWidth</code> characters and is fully (left and right) justified.</p>
<p>You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>' '</code> when necessary so that each line has exactly <code>maxWidth</code> characters.</p>
<p>Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.</p>
<p>For the last line of text, it should be left-justified, and no extra space is inserted between words.</p>
<p><strong>Note:</strong></p>
<ul>
<li>A word is defined as a character sequence consisting of non-space characters only.</li>
<li>Each word's length is guaranteed to be greater than <code>0</code> and not exceed <code>maxWidth</code>.</li>
<li>The input array <code>words</code> contains at least one word.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
<strong>Output:</strong>
[
   "This    is    an",
   "example  of text",
   "justification.  "
]</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
<strong>Output:</strong>
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
<strong>Explanation:</strong> Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
<strong>Output:</strong>
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 300</code></li>
<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
<li><code>words[i]</code> consists of only English letters and symbols.</li>
<li><code>1 &lt;= maxWidth &lt;= 100</code></li>
<li><code>words[i].length &lt;= maxWidth</code></li>
</ul>
</div></div><br><br></html> `;