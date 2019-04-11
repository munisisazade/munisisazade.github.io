
$(document).ready(function(e) {
    $(".main").click(function(e) {
        var value = $(".text").val();
        value = value.split(" ").join("") + "|";
        var result = {};
        var latest_result = "";
        var operator = "";
        var reqem = "";
        var herf = "";
        for (var i= 0; i < value.length; i++) {
            if (value[i] === "+" || value[i] === "-") {
                // check operator
                if (value[i] === "+") {
                    if (!result[herf]) {
                        if (operator === "-") {
                            result[herf] = Number("-" + reqem);
                        }
                        else {
                            result[herf] = Number(reqem);
                        }
                    }
                    else {
                        if (operator === "-") {
                            result[herf] -= Number(reqem);
                        }
                        else {
                            result[herf] += Number(reqem);
                        }
                    }
                    operator = "+";
                }
                else {
                    if (!result[herf]) {
                        if (operator === "-") {
                            result[herf] = Number("-" + reqem);
                        }
                        else {
                            result[herf] = Number(reqem);
                        }
                    }
                    else {
                        if (operator === "-") {
                            result[herf] -= Number(reqem);
                        }
                        else {
                            result[herf] += Number(reqem);
                        }
                    }
                    operator = "-";
                }
                reqem = "";
                herf = "";
            }
            else if (value[i] === "|") {
                if (!result[herf]) {
                    if (operator === "-") {
                        result[herf] = Number("-" + reqem);
                    }
                    else {
                        result[herf] = Number(reqem);
                    }
                }
                else {
                    if (operator === "-") {
                        result[herf] -= Number(reqem);
                    }
                    else {
                        result[herf] += Number(reqem);
                    }
                }
                reqem = "";
                herf = "";
            }
            else if (isNaN(value[i])) {
                // herf
                herf += value[i];
            }
            
            else {
                // reqem
                reqem += value[i];
            }
        }
        for (var key in result) {
            if (latest_result == "") {
                latest_result += `${result[key]}${key}`;
            }
            else {
                if (result[key] < 0) {
                    latest_result += ` - ${Math.abs(result[key])}${key}`;
                }
                else {
                    latest_result += ` + ${result[key]}${key}`;
                }
            }
        }
        $(".netice").html(latest_result);
    });
});