export default function multiplicationConsole() {
    console.log('                              九九乘法表                             ')
    console.log('— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —')
    const myBorder = '|'
    /* 乘法表输出 */
    for (let i = 1; i <= 9; i++) { // Y 轴
        let row = ''
        for (let j = 1; j <= i; j++) { // X 轴
            // 开头加 |
            if (j === 1) {
                row += myBorder + ' '
            }
            row += j + 'x' + i + '=' + i * j

            // 字符数
            let spaceParameter = 8

            /* 乘积为1位数或2位数时对齐 */
            if (j === i) { // 每行最后一次相乘时
                // 计算空缺的字符数
                for (let s = (9 - i) * spaceParameter; s >= 0; s--) {
                    row = row + ' '
                }
                if (i * j < 10) {
                    row = row + ' '
                }
                row = row + myBorder // 结尾加 |
            } else { // 每行不是最后一次相乘时
                if (i * j >= 10) {
                    row += '  ' // 双位数空2个字符
                } else {
                    row += '   ' // 单位数空3个字符
                }
            }
        }
        console.log(row)

    }
    console.log('— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —')


}
