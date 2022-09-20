module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************<div id="title">592. Bulls and Cows</div>
*******************<div class="content__u3I1 question-content__JfgR"><div><p>You are playing the <strong><a href="https://en.wikipedia.org/wiki/Bulls_and_Cows" target="_blank">Bulls and Cows</a></strong> game with your friend.</p>
<p>You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:</p>
<ul>
<li>The number of "bulls", which are digits in the guess that are in the correct position.</li>
<li>The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.</li>
</ul>
<p>Given the secret number <code>secret</code> and your friend's guess <code>guess</code>, return <em>the hint for your friend's guess</em>.</p>
<p>The hint should be formatted as <code>"xAyB"</code>, where <code>x</code> is the number of bulls and <code>y</code> is the number of cows. Note that both <code>secret</code> and <code>guess</code> may contain duplicate digits.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> secret = "1807", guess = "7810"
<strong>Output:</strong> "1A3B"
<strong>Explanation:</strong> Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"<u>7</u>8<u>10</u>"</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> secret = "1123", guess = "0111"
<strong>Output:</strong> "1A1B"
<strong>Explanation:</strong> Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"01<u>1</u>1"        "011<u>1</u>"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= secret.length, guess.length &lt;= 1000</code></li>
<li><code>secret.length == guess.length</code></li>
<li><code>secret</code> and <code>guess</code> consist of digits only.</li>
</ul>
</div></div><br><br></html> `;