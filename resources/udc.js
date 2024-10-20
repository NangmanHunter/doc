//udc
//user-defined-class
//class정의형


//mouseover-hidden
//style공통
$(`head`).append(
    `<style>
        .mt   { flex-shrink: 0;}
        .mt li{ background-color: white; font-weight: bold; padding:10px; }
        .ht   { flex: 1;                                                  }
    </style>`);
        
        
//**select형
$(`.ht>li`)      .prop(`hidden`, true );
$($(`.ht>li`)[0]).prop(`hidden`, false);
$($(`.mt>li`)[0]).style(`filter: invert(1);`);
for(let i=0; i<$(`.mt>li`).length; i++){
    $(`.mt>li`).eq(i).mouseover(function(){
        $(`.mt>li`).ms();
        $(`.ht>li`).prop(`hidden`, true);

        $(this).style(`filter: invert(1);`);
        $(`.ht>li`).eq(i).removeAttr(`hidden`);
    })
}

//**none형
$(`.ht-none>li`)      .prop(`hidden`, true );
for(let i=0; i<$(`.mt-none>li`).length; i++){
    $(`.mt-none>li`).eq(i).mouseover(function(){
        $(`.mt-none>li`).ms();
        $(`.ht-none>li`).prop(`hidden`, true);

        $(this).style(`filter: invert(1);`);
        $(`.ht-none>li`).eq(i).removeAttr(`hidden`);
    })
}
// select형 : class="mt"       class="ht"
// none  형 : class="mt-none"  class="ht-none"




//reference-a
for(let i=0; i<$(`.rf-a>li:nth-child(2n)`).length; i++){
    const a=$($(`.rf-a>li:nth-child(2n)`)[i]);
    a.html(`<a href="${a.text()}">${a.text()}</a>`);
}
    
    
        