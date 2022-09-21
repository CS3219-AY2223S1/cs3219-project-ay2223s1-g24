module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>****************************<div id="title">1573. Maximum Frequency Stack</div>
****************************<div class="content__u3I1 question-content__JfgR"><div><p>Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.</p>
<p>Implement the <code>FreqStack</code> class:</p>
<ul>
<li><code>FreqStack()</code> constructs an empty frequency stack.</li>
<li><code>void push(int val)</code> pushes an integer <code>val</code> onto the top of the stack.</li>
<li><code>int pop()</code> removes and returns the most frequent element in the stack.
	<ul>
<li>If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.</li>
</ul>
</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
<strong>Output</strong>
[null, null, null, null, null, null, null, 5, 7, 5, 4]

<strong>Explanation</strong>
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= val &lt;= 10<sup>9</sup></code></li>
<li>At most <code>2 * 10<sup>4</sup></code> calls will be made to <code>push</code> and <code>pop</code>.</li>
<li>It is guaranteed that there will be at least one element in the stack before calling <code>pop</code>.</li>
</ul>
</div></div><br><br></html> `;