module.exports.question = `<!DOCTYPE html> <html><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px; margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>********************<div id="title">795. Champagne Tower</div>
********************<div class="content__u3I1 question-content__JfgR"><div><p>We stack glasses in a pyramid, where the <strong>first</strong> row has <code>1</code> glass, the <strong>second</strong> row has <code>2</code> glasses, and so on until the 100<sup>th</sup> row.  Each glass holds one cup of champagne.</p>
<p>Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)</p>
<p>For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.</p>
<p><img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png" style="height: 241px; width: 350px;"/></p>
<p>Now after pouring some non-negative integer cups of champagne, return how full the <code>j<sup>th</sup></code> glass in the <code>i<sup>th</sup></code> row is (both <code>i</code> and <code>j</code> are 0-indexed.)</p>
<p> </p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> poured = 1, query_row = 1, query_glass = 1
<strong>Output:</strong> 0.00000
<strong>Explanation:</strong> We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.
</pre>
<p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> poured = 2, query_row = 1, query_glass = 1
<strong>Output:</strong> 0.50000
<strong>Explanation:</strong> We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.
</pre>
<p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> poured = 100000009, query_row = 33, query_glass = 17
<strong>Output:</strong> 1.00000
</pre>
<p> </p>
<p><strong>Constraints:</strong></p>
<ul>
<li><code>0 &lt;= poured &lt;= 10<sup>9</sup></code></li>
<li><code>0 &lt;= query_glass &lt;= query_row &lt; 100</code></li>
</ul></div></div><br><br></html> `;