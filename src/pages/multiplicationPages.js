export default function multiplicationPages() {
    /* 乘法表输出 */
    for (let i = 1; i <= 9; i++) { // Y 轴
        let row = ''
        let rowDiv = document.createElement('div')
        for (let j = 1; j <= i; j++) { // X 轴
            row = j + 'x' + i + '=' + i * j
            const cell= document.createElement('div')
            cell.className= 'cell'
            if(i===9){
                cell.className= 'cell last'
            }
            cell.innerText=row
            rowDiv.appendChild(cell)
        }
        document.querySelector('main').appendChild(rowDiv)
    }
}
