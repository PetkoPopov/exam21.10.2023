import colors from './colors.js'
const createTr=(num)=>{

let arr =[]
for (let index = 0; index < num; index++) {
    let obj=[]
    for(let i =0 ;i<num ;i++){
       const number =(index*num+i)
       let numberColor = Math.floor(number/2)
        const color = colors[numberColor]
        // let color= 'brown'
        const value = (index + 1) + "" + (i + 1)
        obj[i]={val:value , color:color ,number:number,numberColor:numberColor}
    }
    arr.push(obj)
}
return arr
}
export default createTr