var string = "";

$("button").on("click", function (event) {
    if ((event.target.innerHTML) === "DE") {
        string = string.slice(0, -1)
        $("input").attr("value", string);
    }

    else if ((event.target.innerHTML) === "AC") {
        string = ""
        $("input").attr("value", string);
    }

    else if (event.target.innerHTML === "=") {
        string = eval(string);
        $("input").attr("value", string);
    }
    else {
        string = string + event.target.innerHTML
        $("input").attr("value", string);
    }

    console.log(string)


})