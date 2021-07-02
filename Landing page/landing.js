axios.get('http://localhost:3000/api/v1/projects')
    .then(function(response) {
        console.log(response.data.data);
        let projectComponents = response.data.data.map(e => `<li>
        <a href="#" style="background-image: url(${e.projectImage});"></a>
        <div class="details">
            <h3><a href="#">${e.projectName}</a></h3>
            <p class="image-author">${e.projectOwner}</p>
            <button class="project-btn">Design</button>
            <button class="project-btn">Mobile</button>
        </div>
       </li>`)
        document.getElementById('listr').innerHTML = projectComponents
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {});