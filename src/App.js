export class App {

  arabicToRomanNumberConversor (number) {

    const numberLength = number.toString().length;
    const stringNumber = number.toString()

    const numbersFrom1To9 = (n) => {

      switch (n) {
        case 1:
          return 'I'
          break;
        case 2:
          return'II'
          break;
        case 3:
          return 'III'
          break;
        case 4:
          return 'IV'
          break;
        case 5:
          return 'V'
          break;
        case 6:
          return 'VI'
          break;
        case 7:
          return 'VII'
          break;
        case 8:
          return 'VIII'
          break;
        case 9:
          return 'IX'
          break;
        case 0:
          return ''
          break;
        default:
          console.log('')
          break;
      }
  }
  const numbersFrom10To99 = (n2) => {

    switch (n2) {
      case 1:
        return 'X'
        break;
      case 2:
        return'XX'
        break;
      case 3:
        return 'XXX'
        break;
      case 4:
        return 'XL'
        break;
      case 5:
        return 'L'
        break;
      case 6:
        return 'LX'
        break;
      case 7:
        return 'LXX'
        break;
      case 8:
        return 'LXXX'
        break;
      case 9:
        return 'XC'
        break;
      case 0:
        return ''
        break;
      default:
        console.log('')
        break;
    }
  }

  const numberFrom100To999 = (n3) => {

    switch (n3) {
      case 1:
        return 'C'
        break;
      case 2:
        return'CC'
        break;
      case 3:
        return 'CCC'
        break;
      case 4:
        return 'CD'
        break;
      case 5:
        return 'D'
        break;
      case 6:
        return 'DC'
        break;
      case 7:
        return 'DCC'
        break;
      case 8:
        return 'DCCC'
        break;
      case 9:
        return 'CM'
        break;
      case 0:
        return ''
        break;
      default:
        console.log('')
        break;
    }
  }

  const numberFrom1000to3999 = (n4) => {

    switch (n4) {
      case 1:
        return 'M'
        break;
      case 2:
        return'MM'
        break;
      case 3:
        return 'MMM'
        break;
      default:
        console.log('')
        break;
    }
  }

    let lastNumber = numbersFrom1To9(Number(stringNumber.charAt(stringNumber.length-1)))
    let penultimateNumber = numbersFrom10To99(Number(stringNumber.charAt(stringNumber.length-2)))

    if (numberLength === 1) {
      return lastNumber
    } else if (numberLength === 2) {

      return penultimateNumber += lastNumber

      // let firstNumber = numbersFrom10To99(Number(stringNumber.charAt(0)));
      // let secondNumber = numbersFrom1To9(Number(stringNumber.charAt(1)));
      // let finalNumber = firstNumber += secondNumber
      
      // return finalNumber;      
    } else if(numberLength === 3) {
      let firstNumber = numberFrom100To999(Number(stringNumber.charAt(0)))
      // let secondNumber = numbersFrom10To99(Number(stringNumber.charAt(1)))
      // let thirdNumber = numbersFrom1To9(Number(stringNumber.charAt(2)))

      // let finalNumber = firstNumber += secondNumber += thirdNumber

      return firstNumber += penultimateNumber += lastNumber

    } else if (numberLength === 4) {
      let firstNumber = numberFrom1000to3999(Number(stringNumber.charAt(0)))
      let secondNumber = numberFrom100To999(Number(stringNumber.charAt(1)))
      // let thirdNumber = numbersFrom10To99(Number(stringNumber.charAt(2)))
      // let fourthNumber = numbersFrom1To9(Number(stringNumber.charAt(3)))

      // let finalNumber = firstNumber += secondNumber += thirdNumber += fourthNumber

      // return finalNumber
      return firstNumber += secondNumber += penultimateNumber += lastNumber
    }

  }
}