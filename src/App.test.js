import { App } from './App';

describe('App tests', () => {
  const app = new App();

  it ('Test 1: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2000);
    expect(response).toBe('Leap year')
  })
  
})