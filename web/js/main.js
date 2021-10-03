async function generateButton() {
    var form = document.getElementById("form");
    formData = new FormData(form);

    length = formData.get("slider");

    if (formData.get("digits") == null) {
        allow_digits = false;
    } else {
        allow_digits = true;
    }

    if (formData.get("alphabets") == null) {
        allow_alphabets = false;
    } else {
        allow_alphabets = true;
    }

    if (formData.get("specialchars") == null) {
        allow_specialchars = false;
    } else {
        allow_specialchars = true;
    }

    if (allow_digits == false && allow_alphabets == false && allow_specialchars == false) {
        $("#checkbox-error").show();
        return
    } else {
        $("#checkbox-error").hide();
    }

    password = await eel.generatePassword(length, allow_digits, allow_alphabets, allow_specialchars)();
    $("#password").html(password);
    $("#password").css("color", "#cccccc");
    $("#pw-box").show();
}