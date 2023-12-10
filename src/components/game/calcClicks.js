function setNumberClicks(arr) {
    //[
    // [],[],[]
    //     ]
    
    arr.forEach(element => {
        // console.log(element);
        element.trObj.forEach(e => {
            e.numberClicks = e.numberClicks + 1
            // console.log(e.numberClicks);
            })
    });
    // console.log(arr[0].trObj[0].numberClicks);
    return arr[0].trObj[0].numberClicks
}
export default setNumberClicks