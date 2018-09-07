/* 
    Created on : 2018/09/02
    Author     : kuroda All rights reserved.
    tkoo.xxxxxx@gmail.com
 */
$(function() {
    $.ajaxSetup({cache:false});
    $("header").load("source/header.html");
    var doc = window.location.href.split('/').pop();
    $("main").load("source/_"+doc);    
});