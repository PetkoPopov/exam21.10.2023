const createTr=(num)=>{
let arr =[]
for (let index = 0; index < num; index++) {
    let obj=[]
    for(let i =0 ;i<num ;i++){
        obj[i]=(index+1)+""+(i+1)
    }
    arr.push(obj)
}
return arr
}
export default createTr