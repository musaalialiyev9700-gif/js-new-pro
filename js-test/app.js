"use strict";
$(document).ready(function () {





    $('.btn').click(function (e) {
        e.preventDefault();
        if (true)  { 
            let a = b => { 
                for (let i = 1; i <= b; i++) { $('.minibox').append(`<h2>${b}</h2>`); } 
            }

            let v = f => null ? b : $('.minibox').append(`<h2>${f}</h2>`);  
            v($('input').val());
        }

    });




});