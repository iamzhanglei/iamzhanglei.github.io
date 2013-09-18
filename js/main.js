//$(function () {
//    // Load dialog on page load
//    //$('#basic-modal-content').modal();
   
//    // Load dialog on click
//    $('.navbar li').eq(1).click(function (e) {
//        $('#basic-modal-content').modal();
        
//        return false;
//    });
//    //$(document)时,上面的return false不能阻止冒泡导致ie不能弹出
//    //$("#simplemodal-container").click(function () {
//    //    $.modal.close();
//    //})
//    //$("#simplemodal-overlay").click(function () {
//    //    $.modal.close();
//    //})
//    $("a").attr("target", "_blank");
//}());

jQuery(function ($) {
    if (!jQuery.support.leadingWhitespace) window.location.href = "sorry.html";
    // Load dialog on page load
    //$('#basic-modal-content').modal();

    // Load dialog on click
    $('.navbar li').eq(1).click(function (e) {
     
        $('#basic-modal-content').modal();

        return false;
    });
    $(document).click(function () {
        $.modal.close();
    });

    var cttHTML="";
    for (var i = DNTDEMOCOUNT; i > 0; i--)
    {
        cttHTML +=
        '<div class="span3" style="margin-left: 15px;">' +
               '<a href="http://htmlcssjs.duapp.com/demo'+i+'/index.html" class="thumbnail">' +
                   '<img  alt="coming" style="width: 260px; height: 180px;" src="img/demo' + i + 'pv.png">' +
               '</a>' +
               '<p style="margin-left: 8px;"><a class="btn" href="http://htmlcssjs.duapp.com/demo' + i + '/index.html">View details &raquo;</a></p>' +
           '</div>';
    }
    $("#mainCTT").html(cttHTML);
    $("a").attr("target", "_blank");
});