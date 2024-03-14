const str = 'cats and rats'
const chars = str.split('')
let reversed = ''

for (let i = chars.length - 1; i >= 0; i--) {
	reversed += chars[i]
}

console.log(reversed)
