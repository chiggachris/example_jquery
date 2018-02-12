/*
 * Simple example of a variety of ways to change something's color.
 *
 * @author Robert C. Duvall
 */

// for all ways, see https://www.sitepoint.com/types-document-ready/
// $(document).ready(function() {
$(function() {
    // functions that do the actual work
    function changeByColor(event) {
        $('#js-colored').css('background-color', event.target.value);
        return false;
    }

    function changeByText() {
        $('#js-colored').css('background-color', $(this).val());
        return false;
    }

    function changeByCSS() {
        $('#js-colored').toggleClass('duke unc');
        return false;
    }


    // add interactivity to HTML elements
    $('#js-colored').addClass('duke');
    $('#button').on('click', changeByCSS);
    $('#color').on('change', changeByColor);
    $('#text').on('change', changeByText);


    // change all at the same time
    $('#range').on('input', function (event) {
        $('p').each(function (index, element) {
            console.log(event.target.value);
            $(element).css('font-size', event.target.value + 'px');
        });
        return false;
    });
});
