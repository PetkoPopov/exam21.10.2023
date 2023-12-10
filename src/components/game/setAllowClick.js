/** forbid all buttuns to push */
function setAllowClick(arr, cond) {

    arr.forEach(element => {
        // console.log(element);
        element.trObj.forEach(e => {
            e.allowClick = cond
            // console.log(e.numberClicks);
        })
    });

    return arr
}
export default setAllowClick