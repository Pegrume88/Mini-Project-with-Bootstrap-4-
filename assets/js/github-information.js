function fetchGitHubInformation (event) {
    var username = $("#gh-username").val();
    if(!username){
        $("#gh-user-data").html(`<h2>Please enter a github username!</h2>`);
        return;
    }

    $("#gh-user-data").html(`<div id="loader">
    <img src="assets/css/loader.gif" alt="loading">
    </div>`);

    $.when(
        $.getJSON("`http://api.github.com/users/${username}`")
    ).then(
        function(response) {
            var userData = response;
            $("#hg-user-data").html(userInformationHtml(userData));
        },function(errorResponse) {
            if (errorResponse.status === 404){
                $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`)
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(`<h2>Error: ${errorResponse.response.JSON.message}</h2>`);
            }
        }
    )       

}