function htmlInner(a){
    $(a).append(`
        <div></div>
        <div></div>
        <div></div>    
    `)
}
htmlInner(`.정지조건`);
htmlInner(`.해제조건`);




$(`head`).append(`
<style>
    *{box-sizing: border-box;}
    .정지조건,
    .해제조건{
        display: flex;
        align-items: center;
    }
    .정지조건>div,
    .해제조건>div
    { width: 100px; height: 100px; }
    .정지조건>div:nth-child(1){ border-bottom: 10px solid; }
    .정지조건>div:nth-child(2){ width: 10px; background-color: black; }
    .정지조건>div:nth-child(3){  border-top: 10px solid; }

    .해제조건>div:nth-child(1){ border-top: 10px solid; }
    .해제조건>div:nth-child(2){ width: 10px; background-color: black; }
    .해제조건>div:nth-child(3){  border-bottom: 10px solid; }

</style>    
`)