// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")

// Add event listener
button.addEventListener("click", altaViata)
an.addEventListener("mouseover",displayAge)

const d= new Date()
var year = d.getFullYear()

// Define function
function displayAge()
{
	an.innerHTML = year - an.innerHTML
}
function altaViata()
{	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Google"
	
	educatie.innerHTML = "Experiente"
	educatie.style.fontSize = "50px"
	asteptari.innerHTML = "<ul><li>Workshops</li> <li>Intership</li></ul>"
	body.style.backgroundImage ="url('images/xp.jpg')"
	
	body.style.backgroundSize = "cover"
	body.style.backgroundRepeat = "no-repeat"
	body.style.backgroundPosition = "center"
	body.style.backgroundAttachment = "fixed"

	body.style.color = "yellow"
	body.style.fontFamily = "Montserrat"

	img.src ="images/lion.jpg"
	img.style.opacity = "70%"
	img.style.width = "500px"
	img.style.height = "400px"
	img.style.border = "5px solid black"

}