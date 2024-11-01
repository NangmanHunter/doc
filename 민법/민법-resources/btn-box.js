$(document).on('click', '.horizontal', function() {
        
    $(this).style(`filter: invert(1);`);
    $('li:has(ul)').addClass(`pointer`);
    $(`ul li`).off(`click`);


    $(document).on('click.waitForSecond', 'ul li', function(e) {
       
        $(this).ff();
        $(this).children(`ul`).addClass(`hor-ul`);
        e.stopPropagation();

        $(document).off('click.waitForSecond'); 
        
        $('.horizontal').removeAttr("style");
        $('li:has(ul)').removeClass(`pointer`);
        toggleEvent();
        
    });

});


$(document).on('click', '.vertical', function() {
    
    $(this).style(`filter: invert(1);`);
    $('li:has(ul)').addClass(`pointer`);
    $(`ul li`).off(`click`);

    $(document).on('click.waitForSecond', 'ul li', function(e) {
       
        $(this).ff();
        $(this).children(`ul`).removeClass(`hor-ul`);
        e.stopPropagation();

        $(document).off('click.waitForSecond'); 
        
        $('.vertical').removeAttr("style");
        $('li:has(ul)').removeClass(`pointer`);
        toggleEvent();
        
    });

});

$(`.top-toggle`).click(function() { $(this).toggleText(`↓`, `→`); $(`.top`).toggleClass(`hor-ul`); })

$(`.spread`).click(function (e) { $(`ul li`).children(`ul`).slideDown(); });
$(`.fold`)  .click(function (e) { $(`ul li`).children(`ul`).slideUp();   });
$(`.reset`) .click(function (e) { $(`ul`)   .removeClass(`hor-ul`);      });

$(`.detail`).click(function() { $(this).toggleText(`▲`, `▼`); $(`.detail-divide`).toggle(); })



$(`.detail-spread`).click(function(){$(`details`).prop(`open`, true);})
$(`.detail-fold`).click(function(){$(`details`).prop(`open`, false);})

let count=0;
$(document).keyup( function(e){ 
    if(e.ctrlKey && e.shiftKey && (e.key=='F' || e.key=='f')){ 
        count++;
        count%2==1 
        ? $(`.detail-fold`).click()
        : $(`.detail-spread`).click() 
        ;
    }
})