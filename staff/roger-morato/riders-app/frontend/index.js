var body = document.body;

/* Función que añade multiples hijos */
function appendChildren(){
    var parent = arguments[0]
    for (var i = 1; i < arguments.length; i++){
        parent.appendChild(arguments[i])
    }
    return parent
}

/* Crear un elemento html que contiene texto */
function createTextContainer(tag, text, style){
    var element = document.createElement(tag);
    element.innerHTML = text;  // uso innerHTML para soportar etiquetas ¿arriesgado?
    element.className = style;
    return element;
}

/* Crear un botón */
function createButton(text, style, callback){
    var button = document.createElement('button');
    button.className = style;
    button.textContent = text;
    button.addEventListener('click', callback);
    return button;
}

/* Crear un contenedor para agrupar otros elementos */
function createContainer(tag, style){
    var container = document.createElement(tag);
    container.className = style;
    return container;
}

function createForm(inputsArray, submitButtonText){
    var formContainer = createContainer('form', ''); 
    for (var i = 0; i < inputsArray.length; i++){
        var input = inputsArray[i];
        var label = document.createElement('label');
        label.htmlFor = input.inputId;  
        label.textContent = input.label; 
        var inputElement = document.createElement('input');
        inputElement.type = input.inputType;
        inputElement.placeholder = input.placeholder;
        inputElement.id = input.inputId;

        appendChildren(formContainer, label, inputElement);
    }
    var SubmitButton = document.createElement('input');
    SubmitButton.type = 'submit';
    SubmitButton.value = submitButtonText;

    formContainer.appendChild(SubmitButton);

    formContainer.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var form = event.target; // .target para un evento submit es el formulario
        var formData = [];

        for (var i = 0; i < inputsArray; i++){
            var fieldName = inputsArray[i].inputId;
            var value = form[inputsArray[i].inputId].value;
            var inputData = {fieldName, value};
        } 
        alert('Registrado'); 
    })
    return formContainer;
} 


/* Crea la vista Register */
function createRegisterPage(){
    var registerContainer = createContainer('div','');
    var registerTitle = createTextContainer('h1', 'Register', 'title');
    var objectEmail = {label: 'Email', inputType: 'email', placeholder: 'my@email.com', inputId: 'email'};
    var objectPassword = {label: 'Password', inputType: 'password', placeholder: '*******', inputId: 'password'};
    
    var registerForm = createForm([objectEmail, objectPassword], 'Register');
    
    var toLoginButton = createButton('Go to login', 'button_main', function(){ navigateToLogin(view); });
    var view  = appendChildren(registerContainer, registerTitle, registerForm, toLoginButton);

    return view
}

/*Crea la nueva vista y limpia la vista anterior*/
function navigateToRegister(previousView){
   var registerView = createRegisterPage();   
   body.replaceChild(registerView, previousView);
}

/*Renderizar la página de login y limpia la vista anterior*/
function navigateToLogin(previousView){
    var loginContainer = createContainer('div','');
    var loginTitle = createTextContainer('h1', 'Login', 'title');
    var loginButton = createButton('Login', 'button_main', function(){ alert('Logueado!'); });
    var toRegisterButton = createButton('Go to Register', 'button_main', function(){ navigateToRegister(loginContainer); });
 
    loginContainer.appendChild(loginTitle);
    loginContainer.appendChild(loginButton);
    loginContainer.appendChild(toRegisterButton);
    body.replaceChild(loginContainer, previousView);
 
 }

/* Renderizar Landing */
function renderLanding(){
    var landingContainer = createContainer('div','');
    var landingTitle = createTextContainer('h1', 'The Riders <br>App', 'title');
    var joinButton = createButton('JOIN NOW!', 'button_main', function(){ navigateToRegister(landingContainer); });

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button_container'; 
    buttonContainer.appendChild(joinButton);

    body.appendChild(landingContainer);
    landingContainer.appendChild(landingTitle);
    landingContainer.appendChild(buttonContainer); 
}

renderLanding();