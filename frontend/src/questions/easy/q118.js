module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**********************<div id="title">118. Can Place Flowers</div>
**********************<div class="content__u3I1 question-content__JfgR"><div><p>You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in <strong>adjacent</strong> plots.</p>
<p>Given an integer array <code>flowerbed</code> containing <code>0</code>'s and <code>1</code>'s, where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>, return <em>if</em> <code>n</code> new flowers can be planted in the <code>flowerbed</code> without violating the no-adjacent-flowers rule.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 1
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> flowerbed = [1,0,0,0,1], n = 2
<strong>Output:</strong> false
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= flowerbed.length &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>flowerbed[i]</code> is <code>0</code> or <code>1</code>.</li>
<li>There are no two adjacent flowers in <code>flowerbed</code>.</li>
<li><code>0 &lt;= n &lt;= flowerbed.length</code></li>
</ul>
</div></div><br><br></html> `;