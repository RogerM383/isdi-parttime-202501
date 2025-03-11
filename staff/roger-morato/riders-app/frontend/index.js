var body = document.body;

function createTextContainer(tag, text, style){
    var element = document.createElement(tag)
    element.textContent = text;
    element.className = style;
    return element;
}

function createButton(text, style, callback){
    var button = document.createElement('button');
    button.className = style;
    button.textContent = text;
    button.addEventListener('click', callback);
    return button;
}

/* Renderizar Landing */

function renderLanding(){
    var body = document.body;
    var landingTitle = createTextContainer ('h1', 'The Riders <br>App', '');
    var joinButton = createButton ('JOIN NOW!', '',function(){console.log('click')})

    body.appendChild(landingTitle);
    body.appendChild(joinButton);
}

renderLanding();