$("#password").click(function() {
    password = $("#password").html();
    navigator.clipboard.writeText(password);
    $("#password").css("color", "#FF6E48");
});