import { Accessor, createEffect, createCarefulSignal, Update, createEmptySignal } from 'revejs';

export const onChange = (input: HTMLInputElement, filter: (pref: string) => string = (v => v)): [Accessor<string>, Update<string>]=> {
  const [text, setText] = createCarefulSignal(input.value);

  const listener = () => setText(filter(input.value))

  input.addEventListener('keyup', listener);
  input.addEventListener('keydown', listener);

  createEffect(() => {
    input.value = text();
  }, [text])

  return [text, setText]
}

export const onClick = (element: Element) => {
  const click = createEmptySignal();

  element.addEventListener('click', click);

  return click;
}