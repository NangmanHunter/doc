const url = window.location.href;

const str=url
const i1 = str.lastIndexOf(".");
const i3 = str.lastIndexOf("/");

const n= str.substring(i3+1,i1);
$(`.title`).text(`${n}`);
