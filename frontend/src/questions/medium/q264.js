module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>**************************<div id="title">720. Design Circular Queue</div>
**************************<div class="content__u3I1 question-content__JfgR"><div><p>Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".</p>
<p>One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.</p>
<p>Implementation the <code>MyCircularQueue</code> class:</p>
<ul>
<li><code>MyCircularQueue(k)</code> Initializes the object with the size of the queue to be <code>k</code>.</li>
<li><code>int Front()</code> Gets the front item from the queue. If the queue is empty, return <code>-1</code>.</li>
<li><code>int Rear()</code> Gets the last item from the queue. If the queue is empty, return <code>-1</code>.</li>
<li><code>boolean enQueue(int value)</code> Inserts an element into the circular queue. Return <code>true</code> if the operation is successful.</li>
<li><code>boolean deQueue()</code> Deletes an element from the circular queue. Return <code>true</code> if the operation is successful.</li>
<li><code>boolean isEmpty()</code> Checks whether the circular queue is empty or not.</li>
<li><code>boolean isFull()</code> Checks whether the circular queue is full or not.</li>
</ul>
<p>You must solve the problem without using the built-in queue data structure in your programming language.??</p>
<p>??</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input</strong>
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
<strong>Output</strong>
[null, true, true, true, false, 3, true, true, true, 4]

<strong>Explanation</strong>
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
</pre>
<p>??</p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>1 &lt;= k &lt;= 1000</code></li>
<li><code>0 &lt;= value &lt;= 1000</code></li>
<li>At most <code>3000</code> calls will be made to??<code>enQueue</code>, <code>deQueue</code>,??<code>Front</code>,??<code>Rear</code>,??<code>isEmpty</code>, and??<code>isFull</code>.</li>
</ul>
</div></div><br><br></html> `;