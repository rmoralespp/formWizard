# Plugin formWizard
Plugin jQuery para particionar formularios web en pasos, y solo serán visibles los campos del paso que esté activo.

# Instalación
 Se necesita incluir en el html a utilizar los archivo formWizard.js y formWizard.css del plugin, ya sea de manera local o remota
<.script src="./formWizard.js"></script> 
<.link rel="stylesheet" href="./formWizard.css">

# Cómo funciona?
formWizard funciona para etiquetas de tipo form. Para ello es necesario envolver el contenido a utilizar dentro de un div
con clase "formWizard-content". También es necesario especificar en cada campo del form a que paso va a pertenecer, para ello 
cada uno de estos debe envolverse dentro de un div con el atributo data-step y como valor del atributo se establecerá el paso al 
que pertenecerá.

Para este HTML:
 <form id="form_test">
        <div class="formWizard-content" >
                <div class="form-group" data-step="1">
                        <label>..</label>
                        <input type="text">         
                </div>
                    
                <div class="form-group" data-step="2">
                        <select name="" id=""></select>
                </div>
                <div class="form-group" data-step="3">
                        <table></table>
                </div>
        </div>
        <button onclick="return anterior()">Anterior</button>
        <button onclick="return siguiente()">Siguiente</button>
    </form>
    
# Inicialización por defecto
 var $form = $('#form_test').formWizard();
 var wizard = $form.data('formWizard');
 
# Inicialización personalizada con algunos ejemplos de uso.
Nota: Todas las propiedades definidas a continuación son opcionales
 var $form = $('#form_test').formWizard({
    // Propiedades configurables
    initial_step: 1, // Si desea establecer el paso inicial en 1
    steps_number: 3, // Es necesario definir esta propiedad para particionar el form según el número establecido, por defecto es 1
    speed_entry_effect: 1500, // Si desea redefinir el tiempo de entrada de las etiquetas de cada paso
    
    figure_visibility: true, // Si desea que se presente además figura que represente cada uno de los pasos y cuál está activo
    // Si desea redefinir los nombres y las descripciones de la figura por defecto
    figure_steps:  [
        {name: "n1", description: "description 1"},
        {name: "n2"},
        {name: "n3", description: "description 3"}
    ],
    // Callbacks configurables
    
    onEntryEffect: function () {
        var $wrappers  = this;
        $wrappers.slideDown(speed);
    },
    onChange: function ($wrappers, step_number) {
        // El callback se dispara cuando ocurre un cambio de paso, en él se obtiene todos los envoltorios de los campos
           visibles
      
      // Acceso al Paso en curso por contexto
     var step = this;
     console.log(step.number);
     step.$wrappers.css('background-color', 'gray');
     
     // Acceso al Paso en curso por parámetros
     console.log(step_number);
     $wrappers.css('color','red');
}
    },
    onClickFigureStep: function (speed) {
        console.log(this);
    },
});

# var wizard = $form.data('formWizard');
Se utiliza cuando inicialices el $('#form_test').formWizard(), para acceder a cada una de las funcionalidades disponibles

# Funciones disponibles
  wizard.previousStep(); // Cambiar al paso anterior
  wizard.nextStep(); // Cambiar al paso anterior
  wizard.changeStep(numero_paso); // Cambiar a  un paso específico
 
