function submit_(log, pas) {
    if (log == "test@test.com" && pas == 123) return true;
    else {
        alert('Incorrect E-mail or Password');
        return false
    }
}

$(function () {
    $(".button-1").click(function () {
        $(".block-1").fadeIn(100);
        $(".block-2").fadeOut(1);
        $(".block-3").fadeOut(1);
        $(".block-4").fadeOut(1);
        $(".block-5").fadeOut(1);
    });
    $(".button-2").click(function () {
        $(".block-1").fadeOut(1);
        $(".block-2").fadeIn(100);
        $(".block-3").fadeOut(1);
        $(".block-4").fadeOut(1);
        $(".block-5").fadeOut(1);
    });
    $(".button-3").click(function () {
        $(".block-1").fadeOut(1);
        $(".block-2").fadeOut(1);
        $(".block-3").fadeIn(100);
        $(".block-4").fadeOut(1);
        $(".block-5").fadeOut(1);
    });
    $(".button-4").click(function () {
        $(".block-1").fadeOut(1);
        $(".block-2").fadeOut(1);
        $(".block-3").fadeOut(1);
        $(".block-4").fadeIn(100);
        $(".block-5").fadeOut(1);
    });
    $(".button-5").click(function () {
        $(".block-1").fadeOut(1);
        $(".block-2").fadeOut(1);
        $(".block-3").fadeOut(1);
        $(".block-4").fadeOut(1);
        $(".block-5").fadeIn(100);
    });
});