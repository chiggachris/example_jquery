/*
 * List your favorite URLs.
 *
 * @author Robert C. Duvall
 */

$(function() {
    // define data to use to build list automatically
    var dukeLinks = [
        { name:'Duke University', url:'http://www.duke.edu/' },
        { name:'Duke Computer Science', url:'http://www.cs.duke.edu/' },
        { name:'Duke Basketball', url:'http://www.goduke.com/SportSelect.dbml?SPID=1846' },
        { name:'Duke Lemur Center', url:'http://lemur.duke.edu/' },
        { name:'Duke Marine Lab', url:'https://nicholas.duke.edu/marinelab' },
        { name:'Events at Duke', url:'http://calendar.duke.edu/events/' },
        { name:'Duke Chronicle', url:'http://www.dukechronicle.com/' },
        { name:'Duke Chapel', url:'https://chapel.duke.edu/' }
    ];

    // add links dynamically to the document to be displayed on the page
    function addLinks(links) {
        var domElement = $('#js-linklist');
        // remove any existing links before adding the new ones
        domElement.empty();
        // create a list element for every value in the given list
        links.forEach(function (l) {
            $('<li>').html('<a href="' + l.url + '">' + l.name + '</a>')
                     .addClass('link')
                     .appendTo(domElement);
        });
    }

    // load links dynamically from a separate URL in the background without reloading the page
    function loadLinks(url) {
        // load the URL directly as data and when it loaded, add the data as links on the page
        // the complete way to do it
//        $.ajax({
//            type: 'GET',
//            url: url,
//            dataType: 'json',
//            success: function (data) {
//                addLinks(data);
//            },
//            error: function (req, status, err) {
//                console.log('ERROR loading data: ', err);
//            }
//        });
        // expands to the exact same thing but fills in some of the fields to be more readable
        $.getJSON(url, function (data) {
            addLinks(data);
        });
    }

    // switch between the two different sets of links
    function toggleLinks () {
        // check text displayed on the page of the first link to a known value
        if ($('li').first().text() === dukeLinks[0].name) {
            loadLinks('data/compsci_links.json');
        }
        else {
            addLinks(dukeLinks);
        }
    }

    // load links as soon as the script loads
    addLinks(dukeLinks);
    // allow user to switch between two separate lists of links
    $('#button').on('click', toggleLinks);
});
