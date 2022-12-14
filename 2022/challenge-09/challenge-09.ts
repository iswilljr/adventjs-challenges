// score: 300
export function countTime(leds: number[]) {
  const newLeds = leds.join('').split('1')
  newLeds[0] += newLeds.pop()

  return Math.max(...newLeds.map(led => led.length)) * 7
}

countTime([0, 0, 1, 0, 0])
