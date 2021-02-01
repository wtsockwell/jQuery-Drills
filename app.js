$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true)

    $("#alert-Text").keyup(function () {
        if ($(this) !== " ") {
            $("#btnSubmit").attr("disabled", false)
        }
    })
    $("<div></div>").appendTo("body")
    $("<ul></ul>").appendTo("body")

    $("form").on("submit", function (event) {
        event.preventDefault();
    })
    $("#btnSubmit").click(function () {
        let alertMessage = $("#alert-Text").val();
        // $("<h2 class = 'h2'>" + alertMessage + "</h2>").appendTo("div")
        // $("h2").mouseover(function () {
        //     $(".h2").css({
        //         "background-color": "blue",
        //         "border-radius" : "10px"
        //     })
        // })
        // $("h2").mouseout(function(){
        //     $(".h2").css({
        //         "background-color": "white",
        //         "border-radius" : "0"
        //     })
        // })


        $("<li>" + alertMessage + "</li>").appendTo("ul")
        for (let i = 0; i < $("li").length; i++) {
            $("li").click(function () {
                $(this).css("color", randomColor)
            })
            $("li").dblclick(function () {
                $(this).remove()
            })

        }
    })

    function randomColor() {
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return color;
    }

})
