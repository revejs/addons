import { Accessor, createEffect, createCarefulSignal, Update, createEmptySignal } from 'revejs';

export const onChange = (input: HTMLInputElement): [Accessor<string>, Update<string>]=> {
  const [text, setText] = createCarefulSignal(input.value);

  input.addEventListener('keyup', () => setText(input.value));
  input.addEventListener('keydown', () => setText(input.value));

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