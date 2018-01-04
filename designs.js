$(function(){

    // Select color input

    $("#colorPicker").change(function() {
        let colorPicked;
        colorPicked= $("#colorPicker").val();
        $("#colorPicker").attr("value",colorPicked);
    });

    // Select size input


    /*$("#submit").submit(function() {
        let N = $("#input_height").val();
        return N;
        console.log(N);
        let M = $("#input_width").val();
        return M;
        console.log(M);
        makeGrid(N,M);
    });*/
    /*console.log(N);
    console.log(M);*/


    // When size is submitted by the user, call makeGrid()

   /* function makeGrid(N,M) {
        for(let i=1; i<=N; i=i+1) {
            $("#pixel_canvas").append("tr");
            for(let j=1; j<=M; j=j+1) {
                $("table tr:last-child").append("td");
            };
        };
    };*/

});


