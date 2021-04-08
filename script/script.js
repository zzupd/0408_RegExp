$(function () {

    $("button").click(function () {

        var chkData = $("#insData").val(); // 비교할 내용
        chkData = chkData.trim(); // 앞뒤 공백제거

        // 비교 기준
        var pattern = "영어/숫자 유효성검사";
                     // (=영어와 숫자만 입력가능)
        var regExp =  /[^a-z|A-Z|0-9]/;
        var res = "";
        if (regExp.test(chkData)) {
            res = "영어/숫자만 입력가능";
        } else {
            res = "영어/숫자 OK";
        }

        $("#chkPattern").text("패턴(비교기준) : " + pattern);
        $("#res").text("패턴 비교결과 : " + res);


    });


});
