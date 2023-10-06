let outerDiv = document.querySelector("#outer");
let innerDiv = document.querySelector("#inner");
let colorButton = document.querySelector("#colorChange");
let shapeButton = document.querySelector("#shapeChange");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
//?random hex code of color
// const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// function getCharacter(index) {
// 	return hexCharacters[index]
// }

// function generateNewColor() {
// 	let hexColorRep = "#"

// 	for (let index = 0; index < 6; index++){
// 		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
//     	hexColorRep += getCharacter( randomPosition )
// 	}
	
// 	return hexColorRep
// }

//? random rgb color code
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
  }
colorButton.addEventListener("click", ()=>{
    audio.play();
    let newColor = randomRGB();
    // let bgNewColor = randomRGB();
    // document.body.style.backgroundColor = bgNewColor;
    outerDiv.style.backgroundColor = newColor;
    outerDiv.style.transition = "0.5s ease-in-out";

})

//change shape randomly
let shapes = ["inner", "diamond", "triangle", "circle", "rabbet", "rectangle", "cross", "frame", "leftArrow", "rightPoint"];
function shapeSelect() {
    const randomid = Math.floor ( Math.random() * shapes.length);
    return shapes[randomid];
}
shapeButton.addEventListener("click", ()=>{
    audio.play();
    let idname = shapeSelect();
    innerDiv.id = idname;
    innerDiv.style.transition = "1s ease-in-out";
})
