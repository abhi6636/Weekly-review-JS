var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
var heading = document.createElement('h1')

heading.innerHTML = 'Hello world'

but1.addEventListener('click', function() {
    document.body.appendChild(heading);

});

but2.addEventListener('click', function() {
    document.body.removeChild(heading);
});
