/**  make clicked only this button to true  */
function setBtnClickedTrue(arr, index) {
    arr.forEach(element => {
        // console.log(element);
        element.trObj.forEach(e => {
            if (e.keyIndex == index) {
                e.isClicked = true
            }
        })
    });

    return arr
}
export default setBtnClickedTrue