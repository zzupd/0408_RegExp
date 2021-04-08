$(function(){

    $("button").click(function(){

        var chkData = $("#insData").val();  // 비교할 내용
        chkData = chkData.trim();  // 앞뒤 공백제거

        // 비교 기준
        var pattern = "버거킹";
        var regExp = new RegExp(pattern);
              ///버거킹/;   // 정규표현식 객체생성
        var res = regExp.test(chkData);

        $("#chkPattern").text("패턴(비교기준) : " + pattern);
        $("#res").text("패턴 비교결과 : " + res);
    });


});
