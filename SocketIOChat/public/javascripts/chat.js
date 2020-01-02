(function () {
    let socket = io();

    let output = document.querySelector("textarea");

    document.querySelector("form").onsubmit = function (e) {
        
        e.preventDefault();

        //console.log(this["input"].value);

        socket.emit("msg", this["input"].value);
        this["input"].value = "";
    }

    socket.on("msg", msg => {
       output.value += msg + "\n";
    });
})();