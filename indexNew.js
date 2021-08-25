
// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
// console.log("hello")

const  addEmojiButton = document.getElementById('add-button')
const addEmojiArea = document.getElementById('add-emoji-area')
const emojiBank = document.getElementById('emoji-bank')

addEmojiArea.addEventListener('click', eventHandling)



let submitEmoji = (event) => {
    // debugger
    event.preventDefault()
    const newEmoji = document.getElementById('new-emoji')
    let newE = newEmoji.value
    if (newE !== "") {
        emojiBank.innerHTML +=
        `
        <li>${newE}</li>
        `
        addEmojiArea.innerHTML=""
        addEmojiArea.append(addEmojiButton)
    }

}
let addEmojiForm = () => {

    addEmojiArea.innerHTML = 
    `
    <form id="new-emoji-form">
        <input type="text" id="new-emoji" name="new-emoji">
        <input type="submit" id="submit-emoji" value="Submit Emoji">
    </form>
    `
//     const newEmojiForm = document.getElementById('new-emoji-form')
//     newEmojiForm.addEventListener('submit', submitEmoji)
}

// addEmojiButton.addEventListener('click', addEmojiForm)

function eventHandling(event){
    // debugger
    // console.log('h')
    if (event.target.id === "add-button"){
        addEmojiForm()
    } else if (event.target.id === "submit-emoji"){
        submitEmoji(event)
    }
}