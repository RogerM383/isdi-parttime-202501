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

/*Renderizar la página de registro y limpia la vista anterior*/
function navigateToRegister(previousView){
   var registerContainer = createContainer('div','');
   var registerTitle = createTextContainer('h1', 'Register', 'title');
   var registerButton = createButton('Register', 'button_main', function(){ alert('Registrdo'); });
   var toLoginButton = createButton('Go to login', 'button_main', function(){ navigateToLogin(registerContainer); });

   var registerView  = appendChildren(registerContainer, registerTitle, registerButton, toLoginButton);
   body.replaceChild(registerContainer, previousView);

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