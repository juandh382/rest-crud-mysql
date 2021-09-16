// Selectores
const botonesEditar = document.querySelectorAll('.editar');
const botonesEliminar = document.querySelectorAll('.eliminar');
// Event Listeners

botonesEditar.forEach(btn => btn.addEventListener('click', editarRegistro));
botonesEliminar.forEach(btn => btn.addEventListener('click', eliminarRegistro));

// Funciones

function editarRegistro(e) {
    const id = e.target.getAttribute('data-id');
    window.location.href = `/editar/${id}`;
}

function eliminarRegistro(e) {
    const id = e.target.getAttribute('data-id');
    try {
        fetch(`/${id}`, { method: 'delete' })
            .then(eliminarHTML(e.target));

    } catch (error) {
        console.log(error);
    }
}

function eliminarHTML(btn) {
    // console.log(btn.parentElement.parentElement);
    const
        td = btn.parentElement,
        tr = td.parentElement;
    tr.remove();
}