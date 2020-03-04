let xhr = new XMLHttpRequest(),
    url = "roster.json";

xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        var menuItems = JSON.parse( xhr.responseText );
        buildMenu( menuItems );
    }
};
xhr.open( "GET", url, true );
xhr.send();

function buildMenu( items ) {
    var output = "";
    items.forEach(function (item) {

        //creating variables for first name and last name
        let first = item.name.split(' ').slice(0, -1).join(' ');
        let last = item.name.split(' ').slice(-1).join(' ');

        output+='        <div class="card">\n' +
            '            <div class="front" style="background-image: url('+item.pic+".jpg"+')">\n' +
            '                <div class="title">\n' +
            '\n' +
            '                    <h2 class="name">'+ first +'<br />'+last+'</h2>\n' +

            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        <div class="back">\n' +
            '               <div class="ABOUT">Details</div>\n' +
            '                <br>\n' +
            '        \n' +
            '                <span>\n' +
            '                \n' +
            '                    <p> <strong>'+first + " " + last +'</strong> is a <strong>'+item.position+'</strong> who currently plays for <strong> '+item.team+'</strong> who has scored <strong>'+item.Goals+' </strong>goals this season and has an average rating of <strong>'+item.rating +'</strong>  </p>\n' +
            '                \n' +
            '                </span>\n' +
            '            </div>'+

            '        </div>';





    });



    document.getElementById( "container" ).innerHTML = output;
}

