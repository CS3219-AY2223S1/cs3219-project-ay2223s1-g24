module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************************************<div id="title">323. Latest Time by Replacing Hidden Digits</div>
********************************************<div class="content__u3I1 question-content__JfgR"><div><p>You are given a string <code>time</code> in the form of <code> hh:mm</code>, where some of the digits in the string are hidden (represented by <code>?</code>).</p>
<p>The valid times are those inclusively between <code>00:00</code> and <code>23:59</code>.</p>
<p>Return <em>the latest valid time you can get from</em> <code>time</code><em> by replacing the hidden</em> <em>digits</em>.</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> time = "2?:?0"
<strong>Output:</strong> "23:50"
<strong>Explanation:</strong> The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> time = "0?:3?"
<strong>Output:</strong> "09:39"
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> time = "1?:22"
<strong>Output:</strong> "19:22"
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>time</code> is in the format <code>hh:mm</code>.</li>
<li>It is guaranteed that you can produce a valid time from the given string.</li>
</ul>
</div></div><br><br></html> `;