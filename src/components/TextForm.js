import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    function handleUpperCase() {
        setText(text.toUpperCase());
    }
    function handleLowerCase() {
        setText(text.toLowerCase());
    }
    function handleProperCase() {
        if (text.length > 0) {
            let tempText = "";
            let tempFirstArr = text.toLocaleLowerCase().split("\n");
            tempFirstArr.forEach((element, index) => {
                let tempSecondArr = element.split(" ");
                tempSecondArr.forEach((elem, index) => {
                    if ((index + 1) === tempSecondArr.length) {
                        if (elem.length > 0) {
                            tempText += tempSecondArr[index].replace(elem[0], elem[0].toUpperCase())
                        }
                    }
                    else {
                        (elem.length > 0) ? tempText += tempSecondArr[index].replace(elem[0], elem[0].toUpperCase()) + " " : tempText += " ";
                    }
                });
                (index + 1) === tempFirstArr.length ? tempText += "" : tempText += "\n";
                setText(tempText);
            });
        }
    }
    function handleCopy(e) {
        navigator.clipboard.writeText(text).then(function () {
            e.target.classList.remove('btn-primary');
            e.target.classList.add('btn-success');
            e.target.textContent = 'Copied';
            document.getElementById('myBox').select();
            props.showAlert("text Copied to clipboard", "success");
            setTimeout(() => {
                e.target.classList.remove('btn-success');
                e.target.classList.add('btn-primary');
                e.target.textContent = 'Copy';
            }, 3000);
        });
    }
    function handleRemove() {
        if (text.length > 0) {
            let finalText = "";
            let initialText = text;
            initialText = initialText.replace(/\n\n+/g, "\n\n").replace(/\n$/, "");
            let tempFirstArr = initialText.split("\n");
            tempFirstArr.forEach((element, index) => {
                let tempText = element.replace(/^\s+/, "").replace(/\s\s+/g, " ").replace(/\s+$/, "");
                if ((index + 1) === tempFirstArr.length) {
                    finalText += tempText;
                }
                else {
                    finalText += tempText + "\n";
                }
            });
            setText(finalText);
        }
    }
    function handleRemoveEnter() {
        let initialText = text;
        initialText = initialText.replace(/\n\n+/g, "\n").replace(/\n$/, "");
        setText(initialText);
    }
    function handleClear() {
        setText("");
    }

    return (
        <>
            <div className='my-3'>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea type="text" name="myBox" className="form-control" onChange={handleChange} id="myBox" rows="10" value={text} style={{backgroundColor: props.mode === "light"?"white":"#212529", color: props.mode === "light"?"black":"white"}} placeholder="Enter your text here"></textarea>
                </div>
                <div style={{ margin: "-.25rem" }}>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleUpperCase}>Upper Case</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleLowerCase}>Lover Case</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleProperCase}>Proper Case</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleCopy}>Copy Text</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleRemove}>Remove extra spaces</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleRemoveEnter}>Remove Enter spaces</button>
                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleClear}>Clear Text</button>
                </div>
            </div>
            <div>
                <h1 className='mt-4'>Your text summary</h1>
                <ul>
                    <li>{text.length} characters</li>
                    <li>{text.match(/\n/g) != null ? text.match(/\n/g).length + 1 : text.length > 0 ? 1 : 0} lines</li>
                    <li>{text.split(/[\S+]?\w+/g).length - 1} words</li>
                    <li>{((text.split(/[\S+]?\w+/g).length - 1) * 0.008).toFixed(1)} minutes to read</li>
                </ul>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading: 'Enter your text to analyze'
};