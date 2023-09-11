async function getUsuarioMateria() {

     var userMateria = {
        'id_usuario':document.getElementById("id_usuario").value
    };

      var formulario = [];
    for (var property in userMateria) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(userMateria[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    
    let response = await fetch('http://localhost:3636/api/userMateria', {
        method: 'GET',
    });

    let result = await response.json();
    return result;
}

async function getUsuarioMaterias() {
    let response = await fetch('http://localhost:3636/api/userMaterias', {
        method: 'GET',
    });
    let result = await response.json();
    return result;
}


async function createUserMateria() {

    var userMateria = {
        'id_usuario': document.getElementById("id_usuario").value,
        'id_materia': document.getElementById("id_materia").value,
        'notas': document.getElementById("notas").value
    };

    var formulario = [];
    for (var property in userMateria) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(userMateria[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/userMateria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
}





async function updateUserMateria() {
    console.log();
    var userMateria = {
        'id':document.getElementById("id").value,
        'id_usuario': document.getElementById("id_usuario").value,
        'id_materia': document.getElementById("id_materia").value,
        'notas': document.getElementById("notas").value
    };
    var formulario = [];
    for (var property in userMateria) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(userMateria[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/userMateria/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);

}
