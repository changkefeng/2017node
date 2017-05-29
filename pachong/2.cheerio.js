/**
 * Created by haoxiao on 2017-05-29.
 */
let html =`
<div class="hd">
	        <h2 data="26" class="title"><a href="./buzz?b=26&amp;c=1">全部电影</a></h2>
		<a class="more" href="./buzz?b=26&amp;c=1">更多 &gt;</a>
	    </div>
	    <div class="hd">
	        <h2 data="661" class="title title-blue"><a href="./buzz?b=661&amp;c=1">热映电影</a></h2>
		<a class="more" href="./buzz?b=661&amp;c=1">更多 &gt;</a>
	    </div>
`;
let cheerio = require('cheerio');
let $ = cheerio.load(html);
$('.hd .title a').each(function (index,item) {
     let $this = $(item);
     let category = {name:$this.text(),uri:$this.attr('href')}
     console.log(category)
});