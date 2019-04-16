import xs from 'xstream';
import { run } from '@cycle/run';
import { div, button, p, span, makeDOMDriver } from '@cycle/dom';

function main(sources) {
  const action$ = xs.merge(
    sources.DOM.select('.decrement').events('click').map(ev => -1),
    sources.DOM.select('.increment').events('click').map(ev => +1)
  );

  const count$ = action$.fold((acc, x) => acc + x, 0);

  const vdom$ = count$.map(count =>
    div([
      button('.decrement', 'Decrement'),
      button('.increment', 'Increment'),
      p(['Counter: ', span('.count', count)])
    ])
  );

  return {
    DOM: vdom$,
  };
}

run(main, {
  DOM: makeDOMDriver('#main')
});