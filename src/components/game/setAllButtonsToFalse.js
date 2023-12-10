/**set all buttons to false */
function setAllButtonstoFalse(arr) {
    arr.forEach(e => {
        e.trObj.forEach(element => {
            element.isClicked = false
        })
    })


    return arr
}
export default setAllButtonstoFalse