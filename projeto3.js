const images = ["./src/imagem1.jpg",
    "./src/imagem2.jpeg",
    "./src/imagem3.jpg",
    "./src/imagem4.jpeg",
    "./src/imagem5.jpg"
];
const names = ["Susan Smith",
    "Doctor Who",
    "Sheldon Cooper",
    "Leonard Hoffstader",
    "Maria Maria"
];
const cargo =["WEB DEVELOPER",
    "DOCTOR",
    "FÍSICO TEÓRICO",
    "FÍSICO PRÁTICO",
    "CANTORA"
];
const review = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at pellentesque massa, et semper dui. Nulla ante purus, pellentesque a commodo nec, placerat ut lectus. Donec vitae scelerisque nunc. Nam.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper ante lorem, ac mollis erat molestie sit amet. Donec aliquet eu ex non blandit. Fusce et ultricies urna, ac tristique.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada tellus vel elit finibus congue. Nulla ante sem, venenatis mattis vulputate at, accumsan vitae ex. Maecenas a blandit mi, eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh justo, scelerisque non vestibulum quis, interdum tincidunt massa. Duis venenatis fringilla turpis, vel tristique elit condimentum vitae. In venenatis, enim.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at elit blandit, imperdiet magna ac, imperdiet justo. In fermentum urna facilisis nisi tincidunt cursus. Nulla enim tellus, imperdiet sit amet."
];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
const randomNumber = getRandomInt(0, 4);
let counter = 0;

window.onload = function() {
    document.write(`<img id="foto" src=${images[counter]} alt="imagem"/>`);
    document.write(`<h3 id="nome">${names[counter]}</h3>`);
    document.write(`<h4 id="cargo">${cargo[counter]}</h4>`);
    document.write(`<span id="descricao">${review[counter]}</span>`);
    document.write(`
        <div>
            <input id="botao1" type="button" onclick="previous()" value="Previous">
        </div>    
        `);
        document.write(`
        <div>
            <input id="botao2" type="button" onclick="next()" value="next">
        </div>
        `);
    }
    
    function previous() {
        function replace() {
            let element = ["foto", "nome", "cargo", "descricao", "botao1", "botao2"];
            let child = "";
            counter--;
            for (i = 0; i <= 5; i++) {
                child = document.getElementById(element[i]);
                child.remove()
                //child.parentNode.removeChild(child);
                //replacedNode = parentNode.replaceChild(`<img id="foto" src=${images[counter]} alt="imagem"/>`, child)
            }
            //let foto = document.getElementById("foto");
            //foto.parentNode.removeChild(foto);
            document.write(`<img id="foto" src=${images[counter]} alt="imagem"/>`);
            document.write(`<h3 id="nome">${names[counter]}</h3>`);
            document.write(`<h4 id="cargo">${cargo[counter]}</h4>`);
            document.write(`<span id="descricao">${review[counter]}</span>`);
            document.write(`
            <div>
                <input id="botao1" type="button" onclick="previous()" value="Previous">
            </div>    
            `);
            document.write(`
            <div>
                <input id="botao2" type="button" onclick="next()" value="next">
            </div>    
            `);
        }
        
        if (counter > 0) {
            replace();
            console.log("Entrou no if "+counter)
        } else {
            counter = 5;
            replace();
            console.log("entrou no else")
        }
    }
    
    function next() {
        function replace() {
            let element = ["foto", "nome", "cargo", "descricao", "botao1", "botao2"];
            let child = "";
            counter++;
            for (i = 0; i <= 5; i++) {
                child = document.getElementById(element[i]);
                child.remove()
                //child.parentNode.removeChild(child);
                //replacedNode = parentNode.replaceChild(`<img id="foto" src=${images[counter]} alt="imagem"/>`, child)
            }
            //let foto = document.getElementById("foto");
            //foto.parentNode.removeChild(foto);
            document.write(`<img id="foto" src=${images[counter]} alt="imagem"/>`);
            document.write(`<h3 id="nome">${names[counter]}</h3>`);
            document.write(`<h4 id="cargo">${cargo[counter]}</h4>`);
            document.write(`<span id="descricao">${review[counter]}</span>`);
            document.write(`
                <div>
                    <input id="botao1" type="button" onclick="previous()" value="Previous">
                </div>    
                `);
            document.write(`
            <div>
                <input id="botao2" type="button" onclick="next()" value="next">
            </div>    
            `);
    }

    if (counter < 4) {
        replace();
    } else {
        counter = -1;
        replace();
    }
}