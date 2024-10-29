function toggleEvent(){
    $(`.ul li`).click(function(e){
        $(this).toggleClass(`toggle`);
        $(this).children(`ul`).slideToggle();
        e.stopPropagation();
    })
}

toggleEvent();