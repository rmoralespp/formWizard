
var $form = $('#form-prueba').formWizard({
	 steps_number: 3,
         figure_visibility: true

});


var wizard = $form.data('formWizard');

console.log(wizard );

function anterior() {
   wizard.previousStep(); // Cambiar al paso anterior
   return false;
}

function siguiente() {
   wizard.nextStep(); // Cambiar al paso anterior
   return false;
}