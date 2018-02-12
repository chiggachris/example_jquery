/*
 * Simple example of an expandable list.
 *
 * @author Chris Converse
 * @author Robert C. Duvall
 */

$(function () {
    // add the same thing to all elements instead of duplicating them in the HTML
    $('.faq').each(function () {
        $(this).append('<div class="letter_q"></div><div class="letter_a"></div>');
    });

    // add animation to expand/contract current answer
    $('.faq').click(function () {
        if ($(this).is('.open')) {
            $(this).children('.faq_answer_container').animate({'height': '0'}, 500);
            $(this).children('.letter_a').fadeOut(500);
            $(this).children('.letter_q').animate({'left': '25px'});
            $(this).removeClass('open');
        } else {
            var newHeight = $(this).find('.faq_answer').height() + 'px';
            $(this).children('.faq_answer_container').animate({'height': newHeight}, 500);
            $(this).children('.letter_a').fadeIn(500);
            $(this).children('.letter_q').animate({'left': '10px'});
            $(this).addClass('open');
        }
        return false;
    });
});
