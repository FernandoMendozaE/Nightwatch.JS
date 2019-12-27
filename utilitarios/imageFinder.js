function finder(dato = '') {
  let data = {}
  let separador = '\n' // un espacio en blanco
  let arregloDeSubCadenas = dato.split(separador)
  // console.log('arregloDeSubCadenas', arregloDeSubCadenas)
  let arrayAutorizacion = arregloDeSubCadenas[0].split(' ')
  console.log('arrayAutorizacion!!!!!!!!', arrayAutorizacion)
  let autorizacion = (arrayAutorizacion[9]) ? arrayAutorizacion[9] : arregloDeSubCadenas[6] 
  // console.log('autorizacion :', autorizacion)
  data['autorizacion'] = autorizacion

  let arrayDeuda = arregloDeSubCadenas[4].split(' ')
  let deuda = arrayDeuda[2]
  // console.log('deuda fecha :', deuda)
  data['deuda'] = deuda

  let sw
  let arrayCarteraDirecta = []
  for (const i in arregloDeSubCadenas) {
    if (arregloDeSubCadenas[i] === 'Cartera Directa:') {
      sw = true
    }
    // if (arregloDeSubCadenas[i] === 'Cartera Indirecta:') {
    //   sw = false
    // }
    if (sw && arregloDeSubCadenas[i] !== ' ') {
      arrayCarteraDirecta.push(arregloDeSubCadenas[i])
    }
  }

  // console.log('arrayCarteraDirecta', arrayCarteraDirecta)
  let obj = {}
  for (const i in arrayCarteraDirecta) {
    let arregloFila = arrayCarteraDirecta[i].split(' ')
    // console.log('arregloFila', arregloFila)
    obj[`${i}`] = arregloFila
  }

  // console.log('obj', obj)

  let arrayAlfabeto = []
  for (const key in obj) {
    const element = obj[key]
    // console.log('element', element)
    let tipoCartera = element[2]
    // console.log('tipoCartera', tipoCartera)
    switch (tipoCartera) {
      case 'A':
        arrayAlfabeto.push(1)
        break
      case 'B':
        arrayAlfabeto.push(2)
        break
      case 'C':
        arrayAlfabeto.push(3)
        break
      case 'D':
        arrayAlfabeto.push(4)
        break
      case 'E':
        arrayAlfabeto.push(5)
        break
      case 'F':
        arrayAlfabeto.push(6)
        break

      default:
        break
    }
  }

  // console.log('arrayAlfabeto', arrayAlfabeto)

  let may = 0
  for (const i in arrayAlfabeto) {
    if (arrayAlfabeto[i] > may) {
      may = arrayAlfabeto[i]
    }
  }

  let CarteraDIR = ''
  switch (may) {
    case 1:
      CarteraDIR = 'A'
      break
    case 2:
      CarteraDIR = 'B'
      break
    case 3:
      CarteraDIR = 'C'
      break
    case 4:
      CarteraDIR = 'D'
      break
    case 5:
      CarteraDIR = 'E'
      break
    case 6:
      CarteraDIR = 'F'
      break

    default:
      break
  }

  // console.log('CarteraDIR :', CarteraDIR)
  data['carteraDIR'] = CarteraDIR

  return data
}

module.exports = { finder }
