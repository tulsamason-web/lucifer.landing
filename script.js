const stacks =
document.querySelectorAll(".stack");


const archive =
document.getElementById("archive");


const desk =
document.getElementById("desk");


const title =
document.getElementById("title");


const content =
document.getElementById("content");


const sound =
document.getElementById("ambient");


const pageSound =
document.getElementById("pageSound");


let currentData = null;

let page = 0;



stacks.forEach(stack=>{


stack.onclick=()=>{


openArchive(stack.dataset.file);


};


});




async function openArchive(file){


desk.classList.add("hidden");

archive.classList.remove("hidden");


page=0;


let response =
await fetch(`data/${file}.json`);


currentData =
await response.json();



showPage();


}





function showPage(){


pageSound.play().catch(()=>{});


title.innerText =
currentData.title;



content.innerHTML =
`


<h3>
${currentData.entries[page].name}
</h3>


<p>
${currentData.entries[page].text}
</p>


`;

}



document.getElementById("next").onclick=()=>{


if(page < currentData.entries.length-1){

page++;

showPage();

}

}




document.getElementById("prev").onclick=()=>{


if(page>0){

page--;

showPage();

}

}




document.getElementById("close").onclick=()=>{


archive.classList.add("hidden");

desk.classList.remove("hidden");


}





let playing=false;


document.getElementById("soundToggle").onclick=()=>{


if(!playing){

sound.play();

playing=true;

event.target.innerText="🔊 Ambient";


}

else{


sound.pause();

playing=false;


event.target.innerText="🔇 Ambient";


}


};
