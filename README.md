# Plugin formWizard

Plugin jQuery que divide formularios en varias vistas. La librería mantiene el estado hasta la presentación del formulario final. De esta manera solo serán visibles los campos del formulario pertenecientes a la vista que esté activa.

# Instalación
 Se necesita incluir en el html a utilizar los archivos **formWizard.js** y **formWizard.css** del plugin, ya sea de manera local o remota
 
 ``` 
<script src="./formWizard.js"></script> 
<link rel="stylesheet" href="./formWizard.css">
``` 

# Cómo funciona?
formWizard funciona para etiquetas de tipo **form**. Para ello es necesario envolver el contenido a particionar dentro de un **div** con class **"formWizard-content"**. También es necesario especificar cada campo del formulario a que vista va a pertenecer, para ello cada uno de estos debe envolverse dentro de un **div** con el atributo **data-step** y como valor del atributo se establecerá el número de la vista al que pertenecerá.

Para este HTML:
``` 
<form id="form_test">
        <div class="formWizard-content" >
            <div class="form-group" data-step="1">
                <label>..</label>
                <input type="text">         
            </div> 
            <div class="form-group" data-step="1">
                <label>..</label>
                <select name="" id=""></select>         
            </div> 
            <div class="form-group" data-step="2">
                <select name="" id=""></select>
            </div>
            <div class="form-group" data-step="3">
                <table></table>
            </div>
        </div>
</form>
``` 
    
# Inicialización por defecto
``` 
 var $form = $('#form_test').formWizard();
 var wizard = $form.data('formWizard');
 ``` 
 
# Inicialización personalizada.
Nota: Todas las propiedades definidas a continuación son opcionales
``` 
 var $form = $('#form_test').formWizard({
    // Propiedades configurables
    initial_step: 1, // Si desea establecer el valor de la vista inicial, por defecto es 1
    steps_number: 3, // Es necesario definir esta propiedad para particionar el form según el número establecido, por def. es 1
    speed_entry_effect: 1500 // Si desea redefinir el tiempo de entrada de los campos de cada vista
});
``` 
# Inicialización personalizada con representación gráfica del estado y vistas.
``` 
 var $form = $('#form_test').formWizard({
    figure_visibility: true, /* Si desea que se presente además una figura que represente cada una de los vistas y cuál de estas   se encuentra activa */
    // Si desea redefinir los nombres y las descripciones de la figura por defecto
    figure_steps:  [
        {name: "No1", description: "description 1"},
        {name: "No2", description: "description 2"},
        {name: "No3", description: "description 3"}
    ]
 });
 ``` 
 # Inicialización personalizada con manejo de devoluciones de llamada.
  ``` 
  var $form = $('#form_test').formWizard({  
    // Si desea redefinir el efecto de entrada de los campos del paso activo
    onEntryEffect: function () {
        var $wrappers  = this;
        $wrappers.slideDown(speed);
    },
    /* El callback se dispara cuando ocurre un cambio de paso, en él se obtiene todos los envoltorios de los campos
       visibles */
    onChange: function ($wrappers, step_number) { 
      var step = this; // Acceso al Paso en curso por contexto
      console.log(step.number);
      step.$wrappers.css('background-color', 'gray');
 
      console.log(step_number); // Número de la vista en curso por parámetros
      $wrappers.css('color','red'); // Manejo de los campos de la vista en curso por parámetros
    },
    // El callback se dispara cuando se presiona un click sobre los elementos de la figura, si se encuentra visible
    onClickFigureStep: function (speed) {
        console.log(this);
    }
});
``` 
# $form.data('formWizard');
Se utiliza para acceder al estado del asistente, así como a cada una de las funcionalidades disponibles
``` 
 var wizard = $form.data('formWizard');
 wizard.previousStep(); // Cambiar a la vista anterior
 wizard.nextStep(); // Cambiar a la vista siguiente
 wizard.changeStep(numero_paso); // Cambiar a  una vista específica
 wizard.getNumberStep(); // Acceso al número de la vista actua
``` 
 
