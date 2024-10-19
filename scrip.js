const editButton = document.querySelector(".edit-btn");
const textf = document.querySelector(".textf");

editButton.addEventListener('click', ()=>{
    textf.readOnly = !textf.readOnly;
    console.log("Hello");
});


const save = document.querySelector(".save");

save.addEventListener('click', ()=>{
    saveFile();
});

function saveFile() {
    const blob = new Blob([textf.value], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'file.txt';
    link.click();
}

const load = document.querySelector(".load");

load.addEventListener('click', ()=>{
    loadFile();
});

function loadFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'text/plain';
    input.onchange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            textf.value = reader.result;
        };
        reader.readAsText(e.target.files[0]);
    };
    input.click();
}

const delet = document.querySelector(".delete");

delet.addEventListener('click', ()=>{
    deleteFile();
});

function deleteFile() {
    textf.value = '';
}

const ex = document.querySelector(".exit");

ex.addEventListener('click', ()=>{
    exit();
});

function exit() {
    window.close();
}

const undo = document.querySelector(".undo");
const redo = document.querySelector(".redo");
undo.addEventListener('click', ()=>{
    document.execCommand('undo');
});
redo.addEventListener('click', ()=>{
    document.execCommand('redo');
});

const file = document.querySelector(".file");
const panel = document.querySelector(".Bb");
file.addEventListener('click', ()=>{
    if(panel.style.display != "none"){
        panel.style.display = "none";
    }else{
        panel.style.display = "flex";
    }
});



