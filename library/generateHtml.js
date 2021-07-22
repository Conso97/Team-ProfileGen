const generateHtml = function (data) {

    var team_list = "";

    for (var i = 0; i < data.length; i++) {
        var employee = data[i];

        team_list += `
                <div class="column">
                    <div class="card has-background-danger">

                        <div class="card-content">
                            <h3 id="role" class="is-size-3"> ${employee.constructor.name} </h3>
                        </div>

                        <div class=content>  
                            <p id="text" class="is-size-5"> Name: ${employee.name} </p>

                            <p id="text" class="is-size-5"> Id: ${employee.id} </p>

                            <p id="text" class="is-size-5"> Email: ${employee.email} </p>
                        </div>

                    </div>
                </div>
`;
    }

    var template = `
<!DOCTYPE html>
<html lang="en-us">

    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="./style.css">
        <title>Team-Website</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    </head>

    <body>

        <div id="team" class="columns section is-vcentered">
            ${team_list}
        </div>
    </body>
</html>
`;

    return template;
}

module.exports = generateHtml;