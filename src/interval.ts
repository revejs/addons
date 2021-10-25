import { createSignal } from 'revejs';

interface IntervalOptions {
  map: (times: number) => number,
  initValue: number,
  stopOn: number
}

export const interval = (ms: number, options: IntervalOptions) => {
  const { initValue = 0, map = v => v + 1, stopOn = Infinity } = options;

  const [num, setNum] = createSignal(initValue);

  const int = setInterval(() => {
    setNum(map)
    if (num() == stopOn) clearInterval(int);
  }, ms);

  return num
}