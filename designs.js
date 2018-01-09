$(function () {
    // Select color input

    $("#colorPicker").change(function() {
        let colorPicked;
        colorPicked = $("#colorPicker").val();
        $("#colorPicker").attr("value",colorPicked);
    });

    // Select size input

    /*TODO: try another solution rather than removing and adding the button*/

    $('form input:last-child').click(function() {
        let N;let M;
        N = $('#input_height').val();
        $('#input_height').attr('value',N);
        M = $('#input_width').val();
        $('#input_width').attr('value',M);
        $(this).remove();
        $('form').append('<input type="submit" value="Submit">');
        makeGrid(N,M);
    });

    // When size is submitted by the user, call makeGrid()

     function makeGrid(N,M) {
         for(let i=1; i<=N; i=i+1) {
             $('#pixel_canvas').append('<tr></tr>');
             for(let j=1; j<=M; j=j+1) {
                 $('table tr:last-child').append('<td></td>');
             };
         };
     };

     // Draw the pixel art, by clicking on the desire square.

    $('table').click(function(evt) {
        $(evt.target).toggleClass('color_changed');
        let colorPicked = $(evt.target).hasClass('color_changed') ? $("#colorPicker").val() : 'white';
        $(evt.target).css('background-color',colorPicked);
    });


});