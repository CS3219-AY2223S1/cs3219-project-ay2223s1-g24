module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************<div id="title">1628. Maximum Score Words Formed by Letters</div>
*******************************************<div class="content__u3I1 question-content__JfgR"><div><p>Given a list of <code>words</code>, list of  single <code>letters</code> (might be repeating) and <code>score</code> of every character.</p>
<p>Return the maximum score of <strong>any</strong> valid set of words formed by using the given letters (<code>words[i]</code> cannot be used two or more times).</p>
<p>It is not necessary to use all characters in <code>letters</code> and each letter can only be used once. Score of letters <code>'a'</code>, <code>'b'</code>, <code>'c'</code>, ... ,<code>'z'</code> is given by <code>score[0]</code>, <code>score[1]</code>, ... , <code>score[25]</code> respectively.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
<strong>Output:</strong> 23
<strong>Explanation:</strong>
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
<strong>Output:</strong> 27
<strong>Explanation:</strong>
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
Letter "e" can only be used once.</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 14</code></li>
<li><code>1 &lt;= words[i].length &lt;= 15</code></li>
<li><code>1 &lt;= letters.length &lt;= 100</code></li>
<li><code>letters[i].length == 1</code></li>
<li><code>score.length == 26</code></li>
<li><code>0 &lt;= score[i] &lt;= 10</code></li>
<li><code>words[i]</code>, <code>letters[i]</code> contains only lower case English letters.</li>
</ul>
</div></div><br><br></html> `;