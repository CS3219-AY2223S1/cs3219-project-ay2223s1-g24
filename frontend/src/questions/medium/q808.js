module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************<div id="title">808. Friends Of Appropriate Ages</div>
********************************<div class="content__u3I1 question-content__JfgR"><div><p>There are <code>n</code> persons on a social media website. You are given an integer array <code>ages</code> where <code>ages[i]</code> is the age of the <code>i<sup>th</sup></code> person.</p>
<p>A Person <code>x</code> will not send a friend request to a person <code>y</code> (<code>x != y</code>) if any of the following conditions is true:</p>
<ul>
<li><code>age[y] &lt;= 0.5 * age[x] + 7</code></li>
<li><code>age[y] &gt; age[x]</code></li>
<li><code>age[y] &gt; 100 &amp;&amp; age[x] &lt; 100</code></li>
</ul>
<p>Otherwise, <code>x</code> will send a friend request to <code>y</code>.</p>
<p>Note that if <code>x</code> sends a request to <code>y</code>, <code>y</code> will not necessarily send a request to <code>x</code>. Also, a person will not send a friend request to themself.</p>
<p>Return <em>the total number of friend requests made</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> ages = [16,16]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 2 people friend request each other.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> ages = [16,17,18]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Friend requests are made 17 -&gt; 16, 18 -&gt; 17.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> ages = [20,30,100,110,120]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Friend requests are made 110 -&gt; 100, 120 -&gt; 110, 120 -&gt; 100.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == ages.length</code></li>
<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
<li><code>1 &lt;= ages[i] &lt;= 120</code></li>
</ul>
</div></div><br><br></html> `;