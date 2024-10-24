const url = window.location.href;

const str=url
const i1 = str.lastIndexOf(".");
const i2 = str.lastIndexOf("-");
const i3 = str.lastIndexOf("/");

const n2_= str.substring(i3+1,i2);
const n2 = decodeURIComponent(n2_);
const n  = str.substring(i2+1,i1);

$(`.title`).text(`${n2} ${n}번`);