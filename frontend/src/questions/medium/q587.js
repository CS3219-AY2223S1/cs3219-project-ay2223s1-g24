module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>***************<div id="title">587. H-Index II</div>
***************<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>citations</code> where <code>citations[i]</code> is the number of citations a researcher received for their <code>i<sup>th</sup></code> paper and <code>citations</code> is sorted in an <strong>ascending order</strong>, return compute the researcher's <code>h</code><strong>-index</strong>.</p>
<p>According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: A scientist has an index <code>h</code> if <code>h</code> of their <code>n</code> papers have at least <code>h</code> citations each, and the other <code>n − h</code> papers have no more than <code>h</code> citations each.</p>
<p>If there are several possible values for <code>h</code>, the maximum one is taken as the <code>h</code><strong>-index</strong>.</p>
<p>You must write an algorithm that runs in logarithmic time.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> citations = [0,1,3,5,6]
<strong>Output:</strong> 3
<strong>Explanation:</strong> [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> citations = [1,2,100]
<strong>Output:</strong> 2
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>n == citations.length</code></li>
<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
<li><code>0 &lt;= citations[i] &lt;= 1000</code></li>
<li><code>citations</code> is sorted in <strong>ascending order</strong>.</li>
</ul>
</div></div><br><br></html> `;