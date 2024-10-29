const url = window.location.href;

const str=url
const i1 = str.lastIndexOf(".");
const i2 = str.lastIndexOf("-");

const t_  = str.substring(i2+1,i1);
const t  = decodeURIComponent(t_);

$(`title`).text(`${t}`);
$(`body`).prepend(`<h1 class="title">${t}</h1>`);