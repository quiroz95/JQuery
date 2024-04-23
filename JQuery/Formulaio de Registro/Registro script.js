$(document).ready(function(){
    var estudiantes = []; // Array para almacenar los estudiantes

    $('#registrarEstudiante').click(function(){
        // Tu código para registrar un estudiante aquí...

        // Llamada a la función para mostrar los estudiantes actualizados
        mostrarEstudiantes();
    });

    // Función para actualizar la tabla de estudiantes
    $('#exportarJSON').click(function(){
        // Tu código para exportar a JSON aquí...

        // Llamada a la función para mostrar los estudiantes actualizados
        mostrarEstudiantes();
    });

    // Función para exportar a Excel
    $('#exportarExcel').click(function(){
        // Tu código para exportar a Excel aquí...

        // Llamada a la función para mostrar los estudiantes actualizados
        mostrarEstudiantes();
    });

    // Función para mostrar estudiantes
    function mostrarEstudiantes() {
        $('#listaEstudiantes').empty();
        estudiantes.forEach(function(estudiante, index){
            var claseRegistro = index % 2 === 0 ? 'registro-par' : 'registro-impar';
            var fila = '<tr class="' + claseRegistro + '">';
            fila += '<td>' + estudiante.ci + '</td>';
            fila += '<td>' + estudiante.nombre + '</td>';
            fila += '<td>' + estudiante.fecha + '</td>';
            fila += '<td>' + estudiante.direccion + '</td>';
            fila += '</tr>';
            $('#listaEstudiantes').append(fila);
        });
    }
});
