/**check if two buttons are the same */
function checkMatch(arr, e) {
    let match = false
    // [
    //     {index:... , trObj:[{},{},{}]},
    //     {},
    //     {}
    // ]
    arr.forEach(element => {
        element.trObj.forEach((btn) => {
            if ((btn.isClicked && btn.color == e.color) && (btn.keyIndex != e.keyIndex)) {
                match = true
            }
        })
    });
    console.log(match);
    return match
}
export default checkMatch