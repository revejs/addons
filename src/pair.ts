import { handle, innerSignal } from './index';
import { createEffect } from 'revejs';

export const inputInner = (input: HTMLInputElement, element: Element, filter: (pref: string) => string = (v => v), inputFilter = false) => {
  const [text] = handle.onChange(input, inputFilter ? filter : undefined);
  const [, setText] = innerSignal(element, filter);

  createEffect(() => setText(text()), [text])();
}