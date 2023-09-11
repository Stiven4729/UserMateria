async function getMaterias() {
    let response = await fetch('http://localhost:3636/api/materias', {
        method: 'GET',
    });
    let result = await response.json();
    return result;
}


async function createMateria() {

    var materia = {
        'nombre': document.getElementById("nombre").value,
        'descripcion': document.getElementById("descripcion").value,
        'h_inicio': document.getElementById("h_inicio").value,
        'h_fin': document.getElementById("h_fin").value,
        'dias': document.getElementById("dias").value,
        'grado': document.getElementById("grado").value
    };

    var formulario = [];
    for (var property in materia) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(materia[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/materia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
}





async function updateMateria() {
    console.log();
    var materia = {
        'id': document.getElementById("id").value,
        'nombre': document.getElementById("nombre").value,
        'descripcion': document.getElementById("descripcion").value,
        'h_inicio': document.getElementById("h_inicio").value,
        'h_fin': document.getElementById("h_fin").value,
        'dias': document.getElementById("dias").value,
        'grado': document.getElementById("grado").value
    };

    var formulario = [];
    for (var property in materia) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(materia[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/materia/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);

}



