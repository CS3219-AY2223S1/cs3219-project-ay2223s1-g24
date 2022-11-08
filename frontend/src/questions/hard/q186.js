module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************************<div id="title">1616. Number of Valid Words for Each Puzzle</div>
*******************************************<div class="content__u3I1 question-content__JfgR"><div>With respect to a given <code>puzzle</code> string, a <code>word</code> is <em>valid</em> if both the following conditions are satisfied:
<ul>
<li><code>word</code> contains the first letter of <code>puzzle</code>.</li>
<li>For each letter in <code>word</code>, that letter is in <code>puzzle</code>.
	<ul>
<li>For example, if the puzzle is <code>"abcdefg"</code>, then valid words are <code>"faced"</code>, <code>"cabbage"</code>, and <code>"baggage"</code>, while</li>
<li>invalid words are <code>"beefed"</code> (does not include <code>'a'</code>) and <code>"based"</code> (includes <code>'s'</code> which is not in the puzzle).</li>
</ul>
</li>
</ul>
Return <em>an array </em><code>answer</code><em>, where </em><code>answer[i]</code><em> is the number of words in the given word list </em><code>words</code><em> that is valid with respect to the puzzle </em><code>puzzles[i]</code>.
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["aaaa","asas","able","ability","actt","actor","access"], puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
<strong>Output:</strong> [1,1,3,2,4,0]
<strong>Explanation:</strong> 
1 valid word for "aboveyz" : "aaaa" 
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There are no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["apple","pleas","please"], puzzles = ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]
<strong>Output:</strong> [0,1,3,2,0]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= words.length &lt;= 10<sup>5</sup></code></li>
<li><code>4 &lt;= words[i].length &lt;= 50</code></li>
<li><code>1 &lt;= puzzles.length &lt;= 10<sup>4</sup></code></li>
<li><code>puzzles[i].length == 7</code></li>
<li><code>words[i]</code> and <code>puzzles[i]</code> consist of lowercase English letters.</li>
<li>Each <code>puzzles[i] </code>does not contain repeated characters.</li>
</ul>
</div></div><br><br></html> `;