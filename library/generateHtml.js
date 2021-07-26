const generateHtml = function (data) {

    var team_list = "";

    for (var i = 0; i < data.length; i++) {
        var employee = data[i];
        var role = employee.constructor.name;
        var unique_entry = null;
        var icon = null;
        if (role == 'Manager') {
            unique_entry = `Office Number: ${employee.officeNumber}`;
            icon = `<i class="fa fa-coffee"></i>`;
        } else if (role == 'Engineer') {
            unique_entry = `GitHub: ${employee.github}`;
            icon = `<i class="fa fa-id-badge"></i>`;
        } else {
            unique_entry = `School: ${employee.school}`;
            icon = `<i class="fa fa-mortar-board"></i>`;
        }

        team_list += `
            <div class="column">
                <article class="message is-link">
                    <div class="message-header">
                        <p id="role" class="is-size-3"> ${employee.name} </br> ${icon} ${role} </p>
                    </div>
                    <div class="message-body">
                        <p id="text" class="is-size-5"> ID: ${employee.id} </p>

                        <p id="text" class="is-size-5"> Email: ${employee.email} </p>

                        <p id="text" class="is-size-5"> ${unique_entry} </p>
                    </div>
                </article>
            </div>
`;
    }

    var template = `
<!DOCTYPE html>
<html lang="en-us">

    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="./styles.css">
        <title>Team-Website</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>

        <section class="hero is-primary has-background-danger">
            <div class="hero-body has-text-centered">
            <p class="title">
                My Team
            </p>
            </div>
        </section>

        <div id="team" class="columns section is-vcentered">
            ${team_list}
        </div>
    </body>
</html>
`;

    return template;
}

module.exports = generateHtml;