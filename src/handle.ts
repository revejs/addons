import { Accessor, createEffect, createCarefulSignal, Update } from 'revejs';

export const onChange = (input: HTMLInputElement): [Accessor<string>, Update<string>]=> {
  const [text, setText] = createCarefulSignal(input.value);

  input.addEventListener('keyup', () => setText(input.value));
  input.addEventListener('keydown', () => setText(input.value));

  createEffect(() => {
    input.value = text();
  }, [text])

  return [text, setText]
}