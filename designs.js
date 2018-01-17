$(function () {

    //Define variables

    const colorPicker = $('#colorPicker');
    const tableCanvas = $('#pixel_canvas');
    const createButton = $('#create_grid');
    const clearButton = $('#clear_grid');
    const gridHeight = $('#input_height');
    const gridWidth = $('#input_width');

    let color = "#000";

    // Select color input

    colorPicker.change(function() {
        color = colorPicker.val();
        colorPicker.attr("value",color);
    });

    // Select size input

    createButton.click(function(evt) {
        let N = gridHeight.val();
        gridHeight.attr('value',N);
        let M = gridWidth.val();
        gridWidth.attr('value',M);
        for(let i=1; i<=N; i++) {
            $('#pixel_canvas tr').remove();
        }
        makeGrid(N,M);
        evt.preventDefault();
    });

    // When size is submitted by the user, call makeGrid()

    function makeGrid(N,M) {
        for(let i=1; i<=N; i=i+1) {
            tableCanvas.append('<tr></tr>');
            for(let j=1; j<=M; j=j+1) {
                $('table tr:last-child').append('<td></td>');
            }
        }
    }

    // Draw the pixel art, by clicking on the desire square.

    tableCanvas.click(function(evt) {
        $(evt.target).toggleClass('color_changed');
        let colorBg = $(evt.target).hasClass('color_changed') ? color : 'white';
        $(evt.target).css('background-color',colorBg);
    });

    /*function fillin2(evt) {
        let color = $('#colorPicker').val();
        $(evt.target).attr('style', 'background-color: color');
    }
    let pixel = $('#pixel_canvas').find('td');
    pixel.on('click',fillin2);*/

    // Clear grid pressing button

    clearButton.click(function(evt) {
        evt.preventDefault();
        $('td').css('background-color','white');
    });

});