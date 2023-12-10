import colors from './colors.js'
import{v4 as ui}from 'uuid'
/**
 * 
 * @param {*} num 
 * @returns array
 */
const createTr = (num,shuffleArr) => {

    let arr = []
    for (let index = 0; index < num; index++) {
        let obj = []
        for (let i = 0; i < num; i++) {
            const number = (index * num + i)
            let numberColor = Math.floor(number / 2)
            const color = colors[shuffleArr[number]]
            // let color= 'brown'
            const value = (index + 1) + "" + (i + 1)
            obj[i] = {
                keyIndex:ui(),
                color: color,
                number: number,
                allowClick:true,
                numberClicks: 0,
                isClicked:false
            }
        }

        arr.push({ keyIndex: ui(), trObj: obj })
    }
    return arr
}

export default createTr