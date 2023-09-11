async function getUsers() {
    let response = await fetch('http://localhost:3636/api/users', {
        method: 'GET',
    });
    let result = await response.json();
    return result;
}




async function login() {
    var usuario = {
        'correo': document.getElementById("correo").value,
        'clave': document.getElementById("clave").value
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    let result = await response.json();
    console.log(result);
    if (result.message == "Usuario y clave son correctos") {
        sessionStorage.setItem("user", JSON.stringify(result.result));
        window.location.href = "html/homeCalendario.html";
    } else {
        alert("El usuario o la contraseña es incorrecta")
    }
}
//Funcion encargada de tomar los datos de los usuarios para ser mostrada

async function adicionarUsuariosEnTabla() {
    let result = await getUsers();
    let tabla = "";
    for (let i = 0; i < result.users.length; i++) {
        tabla += `
            <tr>
                <td>${result.users[i].nombres}</td>
                <td>${result.users[i].apellidos}</td>
                <td>${result.users[i].correo}</td>
            </tr>
        `;
    }
    document.getElementById("tabla-usuarios").innerHTML = tabla;
}

function logout() {
    sessionStorage.setItem("user", null);
    window.location.href = "../index.html";
}




async function createUser() {
    // Obtener los valores de los campos
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var cedula = document.getElementById("cedula").value;
    var clave = document.getElementById("clave").value;

    // Verificar si los campos obligatorios están vacíos
    if (nombres.trim() === '' || apellidos.trim() === '' || correo.trim() === '' || cedula.trim() === '' || clave.trim() === '') {
        alert("Los campos de nombres, apellidos, correo, cédula y clave son requeridos.");
        return;
    }

    var usuario = {
        'cedula': cedula,
        'nombres': nombres,
        'apellidos': apellidos,
        'correo': correo,
        'clave': clave
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    if (response.ok) {
        let result = await response.json();
        sessionStorage.setItem("user", JSON.stringify(usuario));
        console.log(result);
        window.location.href = "../index.html";
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    } else {
        alert("Error al registrar el usuario");
    }
}




async function updateUser(id) {
    // Prevenir el envío automático del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    // Verificar si los campos obligatorios están vacíos
    if (nombres.trim() === '' || apellidos.trim() === '' || correo.trim() === '' || clave.trim() === '') {
        alert("Los campos de nombres, apellidos, correo y clave son requeridos.");
        return;
    }

    // Crear un objeto 'usuario' con los valores de los campos
    var usuario = {
        'nombres': nombres,
        'apellidos': apellidos,
        'correo': correo,
        'clave': clave
    };

    var formulario = [];
    for (var property in usuario) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(usuario[property]);
        formulario.push(encodedKey + "=" + encodedValue);
    }
    formulario = formulario.join("&");

    let response = await fetch('http://localhost:3636/api/user/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formulario
    });

    if (response.ok) {
        let result = await response.json();
        console.log(result); // Asegúrate de que result contenga los nuevos datos actualizados

        // Actualiza los campos del formulario con los nuevos valores
        document.getElementById("nombres").value = result.nombres;
        document.getElementById("apellidos").value = result.apellidos;
        document.getElementById("correo").value = result.correo;
        document.getElementById("clave").value = result.clave;

        alert("Datos actualizados");
        window.location.href = "homeCalendario.html";
    } else {
        alert("Error al actualizar los datos");
    }
}
