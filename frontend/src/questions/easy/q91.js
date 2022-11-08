module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">91. Construct the Rectangle</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:</p>
<ol>
<li>The area of the rectangular web page you designed must equal to the given target area.</li>
<li>The width <code>W</code> should not be larger than the length <code>L</code>, which means <code>L &gt;= W</code>.</li>
<li>The difference between length <code>L</code> and width <code>W</code> should be as small as possible.</li>
</ol>
<p>Return <em>an array <code>[L, W]</code> where <code>L</code> and <code>W</code> are the length and width of the web page you designed in sequence.</em></p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> area = 4
<strong>Output:</strong> [2,2]
<strong>Explanation:</strong> The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. 
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> area = 37
<strong>Output:</strong> [37,1]
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> area = 122122
<strong>Output:</strong> [427,286]
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= area &lt;= 10<sup>7</sup></code></li>
</ul>
</div></div><br><br></html> `;