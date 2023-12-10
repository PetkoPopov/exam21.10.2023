function shuffleArr(num){
let arr =[]
for(let i=0 ; i<num;i++){
arr.push(i)
}
let shuffleArr=[]
    
    for (let i = 0; i < num; i++) {
        let element = arr.splice(Math.floor(Math.random() * (num - i)), 1)

        shuffleArr.push(element[0])

    }
    for (let i = 0; i < num ; i++) {
        arr.push(i)
    }
    for (let i = 0; i < num; i++) {
        let element = arr.splice(Math.floor(Math.random() * (num - i)), 1)

        shuffleArr.push(element[0])

    }

return shuffleArr
}
// console.log(shuffleArr(20))
export default shuffleArr