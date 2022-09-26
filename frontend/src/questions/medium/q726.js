module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">726. Design Circular Deque</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>Design your implementation of the circular double-ended queue (deque).</p>
<p>Implement the <code>MyCircularDeque</code> class:</p>
<ul>
<li><code>MyCircularDeque(int k)</code> Initializes the deque with a maximum size of <code>k</code>.</li>
<li><code>boolean insertFront()</code> Adds an item at the front of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li>
<li><code>boolean insertLast()</code> Adds an item at the rear of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li>
<li><code>boolean deleteFront()</code> Deletes an item from the front of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li>
<li><code>boolean deleteLast()</code> Deletes an item from the rear of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li>
<li><code>int getFront()</code> Returns the front item from the Deque. Returns <code>-1</code> if the deque is empty.</li>
<li><code>int getRear()</code> Returns the last item from Deque. Returns <code>-1</code> if the deque is empty.</li>
<li><code>boolean isEmpty()</code> Returns <code>true</code> if the deque is empty, or <code>false</code> otherwise.</li>
<li><code>boolean isFull()</code> Returns <code>true</code> if the deque is full, or <code>false</code> otherwise.</li>
</ul>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
<strong>Output</strong>
[null, true, true, true, false, 2, true, true, true, 4]

<strong>Explanation</strong>
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= 1000</code></li>
<li><code>0 &lt;= value &lt;= 1000</code></li>
<li>At most <code>2000</code> calls will be made to <code>insertFront</code>, <code>insertLast</code>, <code>deleteFront</code>, <code>deleteLast</code>, <code>getFront</code>, <code>getRear</code>, <code>isEmpty</code>, <code>isFull</code>.</li>
</ul>
</div></div><br><br></html> `;