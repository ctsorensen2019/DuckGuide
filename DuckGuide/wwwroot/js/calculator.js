$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val()); // Convert to number
        let rate = parseFloat($("#rate").text()); // Convert to number

        if (!isNaN(hours) && hours > 0) { // Ensure hours is a valid positive number
            let total = hours * rate;
            $("#total").val("$" + total.toFixed(2));
            $("#error-message").hide();
        } else {
            $("#error-message").show();
            $("#total").val("");
        }
    });
});