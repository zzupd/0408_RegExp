$(function () {

    $("button").click(function () {

        var chkData = $("#insData").val(); // 비교할 내용
        chkData = chkData.trim(); // 앞뒤 공백제거

        // 비교 기준
        var pattern = "한글 유효성 검사";
                               // (=한글만 입력가능)
        var regExp =  /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
               // new RegExp(pattern);
              ///버거킹/;   // 정규표현식 객체생성
        var res = "";
        if (regExp.test(chkData)) {
            res = "한글만 입력가능";
        } else {
            res = "올바른 입력입니다"
        }

        $("#chkPattern").text("패턴(비교기준) : " + pattern);
        $("#res").text("패턴 비교결과 : " + res);


    });


});
