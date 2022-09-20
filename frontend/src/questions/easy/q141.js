module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">141. 1-bit and 2-bit Characters</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>We have two special characters:</p>
<ul>
<li>The first character can be represented by one bit <code>0</code>.</li>
<li>The second character can be represented by two bits (<code>10</code> or <code>11</code>).</li>
</ul>
<p>Given a binary array <code>bits</code> that ends with <code>0</code>, return <code>true</code> if the last character must be a one-bit character.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> bits = [1,0,0]
<strong>Output:</strong> true
<strong>Explanation:</strong> The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> bits = [1,1,1,0]
<strong>Output:</strong> false
<strong>Explanation:</strong> The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= bits.length &lt;= 1000</code></li>
<li><code>bits[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>
</div></div><br><br></html> `;