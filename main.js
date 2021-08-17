const btn = document.querySelector('button')

const generateRandomHexColor = () => {
  const hexNumbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ]
  let hexColorString = ''
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hexNumbers.length)
    hexColorString += hexNumbers[randomNumber]
  }
  hexColorString = '#' + hexColorString

  return hexColorString
}

const changeBackgroundColor = () => {
  document.querySelector('body').style.backgroundColor =
    generateRandomHexColor()
}

btn.addEventListener('click', changeBackgroundColor)
