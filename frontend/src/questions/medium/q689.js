module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***********************<div id="title">689. Random Flip Matrix</div>
***********************<div class="content__u3I1 question-content__JfgR"><div><p>There is an <code>m x n</code> binary grid <code>matrix</code> with all the values set <code>0</code> initially. Design an algorithm to randomly pick an index <code>(i, j)</code> where <code>matrix[i][j] == 0</code> and flips it to <code>1</code>. All the indices <code>(i, j)</code> where <code>matrix[i][j] == 0</code> should be equally likely to be returned.</p>
<p>Optimize your algorithm to minimize the number of calls made to the <strong>built-in</strong> random function of your language and optimize the time and space complexity.</p>
<p>Implement the <code>Solution</code> class:</p>
<ul>
<li><code>Solution(int m, int n)</code> Initializes the object with the size of the binary matrix <code>m</code> and <code>n</code>.</li>
<li><code>int[] flip()</code> Returns a random index <code>[i, j]</code> of the matrix where <code>matrix[i][j] == 0</code> and flips it to <code>1</code>.</li>
<li><code>void reset()</code> Resets all the values of the matrix to be <code>0</code>.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["Solution", "flip", "flip", "flip", "reset", "flip"]
[[3, 1], [], [], [], [], []]
<strong>Output</strong>
[null, [1, 0], [2, 0], [0, 0], null, [2, 0]]

<strong>Explanation</strong>
Solution solution = new Solution(3, 1);
solution.flip();  // return [1, 0], [0,0], [1,0], and [2,0] should be equally likely to be returned.
solution.flip();  // return [2, 0], Since [1,0] was returned, [2,0] and [0,0]
solution.flip();  // return [0, 0], Based on the previously returned indices, only [0,0] can be returned.
solution.reset(); // All the values are reset to 0 and can be returned.
solution.flip();  // return [2, 0], [0,0], [1,0], and [2,0] should be equally likely to be returned.
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
<li>There will be at least one free cell for each call to <code>flip</code>.</li>
<li>At most <code>1000</code> calls will be made to <code>flip</code> and <code>reset</code>.</li>
</ul>
</div></div><br><br></html> `;