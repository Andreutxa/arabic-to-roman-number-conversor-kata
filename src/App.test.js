import { App } from './App';

describe('App tests', () => {
  const app = new App();

  it ('Test 1: Should print => I', () => {
    const response = app.arabicToRomanNumberConversor(1);
    expect(response).toBe('I')
  })
  it ('Test 1: Should print => II', () => {
    const response = app.arabicToRomanNumberConversor(2);
    expect(response).toBe('II')
  })
  it ('Test 1: Should print => III', () => {
    const response = app.arabicToRomanNumberConversor(3);
    expect(response).toBe('III')
  })
  it ('Test 1: Should print => IV', () => {
    const response = app.arabicToRomanNumberConversor(4);
    expect(response).toBe('IV')
  })
  it ('Test 1: Should print => V', () => {
    const response = app.arabicToRomanNumberConversor(5);
    expect(response).toBe('V')
  })
  it ('Test 1: Should print => XII', () => {
    const response = app.arabicToRomanNumberConversor(12);
    expect(response).toBe('XII')
  })
  it ('Test 1: Should print => XXVII', () => {
    const response = app.arabicToRomanNumberConversor(27);
    expect(response).toBe('XXVII')
  })
  it ('Test 1: Should print => XXXVI', () => {
    const response = app.arabicToRomanNumberConversor(36);
    expect(response).toBe('XXXVI')
  })
  it ('Test 1: Should print => LXIX', () => {
    const response = app.arabicToRomanNumberConversor(69);
    expect(response).toBe('LXIX')
  })
  it ('Test 1: Should print => LXXXVIII', () => {
    const response = app.arabicToRomanNumberConversor(88);
    expect(response).toBe('LXXXVIII')
  })
  it ('Test 1: Should print => XC', () => {
    const response = app.arabicToRomanNumberConversor(90);
    expect(response).toBe('XC')
  })
  it ('Test 1: Should print => CCLXXXVI', () => {
    const response = app.arabicToRomanNumberConversor(286);
    expect(response).toBe('CCLXXXVI')
  })
  it ('Test 1: Should print => CXXV', () => {
    const response = app.arabicToRomanNumberConversor(125);
    expect(response).toBe('CXXV')
  })
  it ('Test 1: Should print => CCCVI', () => {
    const response = app.arabicToRomanNumberConversor(306);
    expect(response).toBe('CCCVI')
  })
  it ('Test 1: Should print => MCCCLXVIII', () => {
    const response = app.arabicToRomanNumberConversor(1368);
    expect(response).toBe('MCCCLXVIII')
  })
  it ('Test 1: Should print => MMMDCXXVI', () => {
    const response = app.arabicToRomanNumberConversor(3626);
    expect(response).toBe('MMMDCXXVI')
  })
  it ('Test 1: Should print => MM', () => {
    const response = app.arabicToRomanNumberConversor(2000);
    expect(response).toBe('MM')
  })
  it ('Test 1: Should print => MMMCCXCII', () => {
    const response = app.arabicToRomanNumberConversor(3292);
    expect(response).toBe('MMMCCXCII')
  })
  it ('Test 1: Should print => MCMXCV', () => {
    const response = app.arabicToRomanNumberConversor(1995);
    expect(response).toBe('MCMXCV')
  })

})