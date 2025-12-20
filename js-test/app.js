"use strict";
$(document).ready(function () {



    

    $('.btn').click(function (e) {
        e.preventDefault();
        let a = (a) => {
            for (let i = 1; i <= a; i++)

                $('.box').append(`<h1>${'salam'}</h1>`);
        }
        a($('input').val())
        a($('input').val(''))
        
    });



});