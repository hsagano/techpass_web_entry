/**
* register.js
*/

function generateDay(year, month, day, unknown_option) {

    var unknown_option = (unknown_option === undefined) ? '--' : unknown_option;

    var y = document.getElementById(year).options[document.getElementById(year).selectedIndex].text;
    var m = document.getElementById(month).options[document.getElementById(month).selectedIndex].text;

    // 閏年判定
    if (2 === m && (0 === y % 400 || (0 === y % 4 && 0 !== y % 100))) {
        var last = 29;
    } else {
        var last = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)[m - 1];
    }

    // 要素取得と初期化
    obj = document.getElementById(day);
    obj.length = 0;

    // 日を特定できない場合は「--」に設定
    if (last == null) {
        obj.options[obj.length++] = new Option(unknown_option, '');
    } else {
        // 日の要素生成
        for (var i = 0; i < last; i++) {
            obj.options[obj.length++] = new Option(i + 1, i + 1);
        }
    }
}
$(function() {
    // フォーム送信先の切り替え
    $(".form_action_switch").click(function() {
        var form_id = "#" + $(this).attr("data-form-id");
        var form_action = $(this).attr("data-form-action");
        $(form_id).attr("action", form_action);
        $(form_id).submit();
    });
});