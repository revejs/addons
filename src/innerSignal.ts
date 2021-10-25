import { Accessor, createEffect, createSignal, Update } from 'revejs';

export const innerSignal = (el: Element, filter: (pref: string) => string = (v => v)): [Accessor<string>, Update<string>] => {
  const [text, setText] = createSignal(el.innerHTML);

  createEffect(() => {
    el.innerHTML = filter(text());
  }, [text])

  return [text, setText]
}