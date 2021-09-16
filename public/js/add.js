const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const 
		data = new FormData(form),
		xhr = new XMLHttpRequest();

	xhr.addEventListener('load', function() {
		const { status, msg } = JSON.parse(xhr.response);


		if (status === 'ok') {
			form.reset();
			Swal.fire(
			  'Pelicula Guardada!',
			   msg,
			  'success'
			)
		} else {
			console.log(msg);
		}
	})

	xhr.open('POST', '/agregar');
	// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	xhr.send(data);

})