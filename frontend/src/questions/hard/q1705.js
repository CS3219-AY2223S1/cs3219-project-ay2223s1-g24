module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>*******************************<div id="title">1705. Kth Smallest Instructions</div>
*******************************<div class="content__u3I1 question-content__JfgR"><div><p>Bob is standing at cell <code>(0, 0)</code>, and he wants to reach <code>destination</code>: <code>(row, column)</code>. He can only travel <strong>right</strong> and <strong>down</strong>. You are going to help Bob by providing <strong>instructions</strong> for him to reach <code>destination</code>.</p>
<p>The <strong>instructions</strong> are represented as a string, where each character is either:</p>
<ul>
<li><code>'H'</code>, meaning move horizontally (go <strong>right</strong>), or</li>
<li><code>'V'</code>, meaning move vertically (go <strong>down</strong>).</li>
</ul>
<p>Multiple <strong>instructions</strong> will lead Bob to <code>destination</code>. For example, if <code>destination</code> is <code>(2, 3)</code>, both <code>"HHHVV"</code> and <code>"HVHVH"</code> are valid <strong>instructions</strong>.</p>
<p>However, Bob is very picky. Bob has a lucky number <code>k</code>, and he wants the <code>k<sup>th</sup></code> <strong>lexicographically smallest instructions</strong> that will lead him to <code>destination</code>. <code>k</code> is <strong>1-indexed</strong>.</p>
<p>Given an integer array <code>destination</code> and an integer <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> <strong>lexicographically smallest instructions</strong> that will take Bob to </em><code>destination</code>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex1.png" style="width: 300px; height: 229px;"/></p>
<pre><strong>Input:</strong> destination = [2,3], k = 1
<strong>Output:</strong> "HHHVV"
<strong>Explanation:</strong> All the instructions that reach (2, 3) in lexicographic order are as follows:
["HHHVV", "HHVHV", "HHVVH", "HVHHV", "HVHVH", "HVVHH", "VHHHV", "VHHVH", "VHVHH", "VVHHH"].
</pre>
<p><strong>Example 2:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex2.png" style="width: 300px; height: 229px;"/></strong></p>
<pre><strong>Input:</strong> destination = [2,3], k = 2
<strong>Output:</strong> "HHVHV"
</pre>
<p><strong>Example 3:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex3.png" style="width: 300px; height: 229px;"/></strong></p>
<pre><strong>Input:</strong> destination = [2,3], k = 3
<strong>Output:</strong> "HHVVH"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>destination.length == 2</code></li>
<li><code>1 &lt;= row, column &lt;= 15</code></li>
<li><code>1 &lt;= k &lt;= nCr(row + column, row)</code>, where <code>nCr(a, b)</code> denotes <code>a</code> choose <code>b</code>​​​​​.</li>
</ul>
</div></div><br><br></html> `;