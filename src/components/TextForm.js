import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = (event) => {
    // console.log("Uppercase was clicked: "+text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Upper Case','success')
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lower Case','success')
  }
  const handleClearClick=()=>{
    setText('')
  }
  const handleCopy = ()=>{
    let text = document.getElementById('myBox')
    text.select()
    // document.execCommand('copy');
    // or
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copied to clipboard!','success')
  }
  const handleExtraSpaces=()=>{
    // let newText = text.split("  ")
    let newText = text.split(/[  ]+/)
    setText(newText.join(' '))
    props.showAlert('Removed Extra spaces','success')
  }
  const handleReverseClick=()=>{
    let arr = text.split(" ").reverse("")
    let joinedWords = arr.join()
    setText(joinedWords)
    // let arr_len = arr.length
    // console.log(arr)
    // console.log(arr.length)
    // console.log(text.split(" "))
    // setText(arr_len)
    // let new_arr = []
    // new_arr.length() = arr.length()
    // arr.forEach(element => {
      // new_arr[arr_len-1] = element
    // });
    // setText(new_arr)
  }
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  // const [text, setText] = useState("Enter the text here")
  // text = "new Text"   // wrong way to change the state
  // setText("new Text") // correct way to change the state

  return (
    <>
      <div className='container'>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleReverseClick}>Revese of the text</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} and {text.length} words</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the textbox above to preview it here"}</p>

      </div>
    </>
  )
}
