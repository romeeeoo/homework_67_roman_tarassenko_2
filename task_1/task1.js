const plusButton = document.getElementById('add-item-btn')
const container = document.getElementById('container')
const box = []

const addElement = function () {
    if (!document.getElementById('alert')) {
        const myDiv = document.createElement("div")
        myDiv.className = "alert"
        myDiv.id = "alert"
        myDiv.style.display = "table"
        myDiv.innerHTML = "<div style='background-color: yellow'>" +
            "<span>Very important alert! </span>" +
            "<button id='close-btn' type='button' onclick='removeElement()'>закрыть!</button>" +
            "</div>"
        box.push(myDiv)
        console.log(box)
        container.append(...box)
        setTimeout(removeElement, 5000)

    } else {
        console.log("try to display")
        document.getElementById('alert').style.display = "table"
        setTimeout(removeElement, 5000)
    }
}

function removeElement() {
    document.getElementById('alert').style.display = "none"
    console.log('close')
}

plusButton.addEventListener('click', addElement);
