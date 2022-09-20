module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************<div id="title">549. Min Stack</div>
**************<div class="content__u3I1 question-content__JfgR"><div><p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>
<p>Implement the <code>MinStack</code> class:</p>
<ul>
<li><code>MinStack()</code> initializes the stack object.</li>
<li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.</li>
<li><code>void pop()</code> removes the element on the top of the stack.</li>
<li><code>int top()</code> gets the top element of the stack.</li>
<li><code>int getMin()</code> retrieves the minimum element in the stack.</li>
</ul>
<p>You must implement a solution with <code>O(1)</code> time complexity for each function.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>Output</strong>
[null,null,null,null,-3,null,0,-2]

<strong>Explanation</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code></li>
<li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on <strong>non-empty</strong> stacks.</li>
<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code>.</li>
</ul>
</div></div><br><br></html> `;