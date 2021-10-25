import { handle, innerSignal } from './index';
import { createEffect } from 'revejs';

export const inputInner = (input: HTMLInputElement, element: Element) => {
  const [text] = handle.onChange(input);
  const [, setText] = innerSignal(element);

  createEffect(() => setText(text()), [text])();
}