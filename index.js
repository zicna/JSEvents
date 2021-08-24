// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted

 // select the Add Emoji Button 
 const addEmojiBtn = document.getElementById('add-button')
 const addEmojiArea = document.getElementById('add-emoji-area')
 const addEmojiBank = document.getElementById('emoji-bank')
 // Add an event listner to that button for when I click it 
//  addEmojiBtn.addEventListener('click', handleClick)

addEmojiArea.addEventListener('click', handleEvent)

function handleEvent(e){
    // debugger
    if(e.target.id === 'add-button'){
        handleClick(e)
    }else if(e.target.id === 'create-emoji'){
        handleSubmit(e)
    }
}

 function handleClick(){
    addEmojiArea.innerHTML = 
    `
    <form id='emoji-form'>
    <input type="text" name="emoji" id="new-emoji"></input>
    <input type="submit" id="create-emoji" value="Create Emoji"></input>
    </form>
    ` 

    // const form = document.getElementById('emoji-form')
    // form.addEventListener('submit', handleSubmit)
    
 }

 function handleSubmit(e){
    e.preventDefault() 
    
    let emoji = document.getElementById('new-emoji').value
    addEmojiBank.innerHTML += `<li class="emoji">${emoji}</li>`

    addEmojiArea.innerHTML = ""
    addEmojiArea.append(addEmojiBtn)
    
 }