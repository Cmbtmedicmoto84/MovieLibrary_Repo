function processForm( e ){
    var dict = {
        Title : this["title"].value,
        Director: this["director"].value,
        Genre: this["genre"].value
    };

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr){
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });

    e.preventDefault();
}

$('#my-form').submit(processForm);


function getAllMovies(){
    $("displayAllMovies").html("");
    $.ajax({
        url: "https://localhost:44325/api/movie",
        contentType: 'application/json',
        success: function( data, textStatus, jQxhr ){
            console.log(data);
            for(let i = 0; i < data.length; i++){
                $("displayAllMovies").append(`<p>Title: ${data[0]["title"]}, Director: ${data[0]["director"]}, Genre: ${data[0]["genre"]} </p>`);
            }
            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log(errorThrown);
        }
    });
}


function getMovieById(){
    $("getMovieById").html("");
    $.ajax({
        url: "https://localhost:44325/api/movie",
        contentType: 'application/json',
        success: function( data, textStatus, jQxhr ){
            console.log(data);
            for(let i = 0; i < data.length; i++){
                $("getMovieById").append(`<p>Title: ${data[0]["title"]}, Director: ${data[0]["director"]}, Genre: ${data[0]["genre"]} </p>`);
            }
            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log(errorThrown);
        }
    });
}

function jqMovieInput() {
    let valueofInput = $("#Input").val();

    console.log(valueOfInput);

    $("#Input").val("")
} 


function postMovie(){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.append(dict),
        success: function( data, textStatus, jQxhr){
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });

    e.preventDefault();
}

$('#my-form').submit(processForm);



function putMovie(){
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.replaceWith(dict),
        success: function( data, textStatus, jQxhr){
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });

    e.preventDefault();
}

$('#my-form').submit(processForm);


function deleteMovie(){
    var dict = {
        Title : this["title"].value,
        Director: this["director"].value,
        Genre: this["genre"].value
    };

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr){
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'delete',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr){
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });

    e.preventDefault();
}

$('#my-form').submit(deleteMovie);


