$(document).ready(function () {
    $('#country_code').on('change', function () {
        $('#state_code option').removeClass("display-none").removeAttr("disabled");
        $('#state-container').addClass("display-none");
        $('#state_code').prop('selectedIndex', 0);
        $("#state-warning").css("display", "none");

        if (this.value && (this.value == "CA" || this.value == "US")) {
            $("#state_code").attr('disabled', false);
            var val = this.value.toString().toLowerCase();
            $('#state_code option').not('.' + val).addClass("display-none").attr('disabled', true);
            $('#state-container').removeClass("display-none");
        }
        else {
            $("#state_code").attr('disabled', true);
            $("#state_code").prop("selectedIndex", 0).val();
        }
    });

    $('#state_code').on('change', function () {
        if (this.value) {
            $("#state-warning").css("display", "none");
        }
        else {
            $("#state-warning").css("display", "block");
        }
    });
});