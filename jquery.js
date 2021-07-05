$(function() {
    var valMap = ["Не владею","Использую готовые решения", "Использую готовые решения и умею их переделывать", "", "Пишу сложный JS с нуля"];

    $("#slider").slider({
            max: valMap.length - 1,
            slide: function(event, ui) {
                $("#radiusAmount").val(valMap[ui.value]);
            }
        })
        .each(function() {

            var opt = $(this).data().uiSlider.options;
            var vals = opt.max - opt.min;
            var arrayLength = valMap.length;
            for (var i = 0; i < arrayLength; i++) {
                var el = $('<label>' + (valMap[i]) + '</label>').css('left', (i / vals * 100) + '%');

                $("#slider").append(el);

            }

        });
});