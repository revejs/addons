import { Accessor, createEffect, createSignal, Update } from 'revejs';

export const innerSignal = (el: Element): [Accessor<string>, Update<string>] => {
  const [text, setText] = createSignal(el.innerHTML);

  createEffect(() => {
    el.innerHTML = text();
  }, [text])

  return [text, setText]
}