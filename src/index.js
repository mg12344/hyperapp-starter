import { app } from 'hyperapp'
import { main, h1, div, button,ul,li,input } from '@hyperapp/html'

app({
  state: {
    input:'',
list:['Tom','Will','Madalina']
  },
  actions: {
    reset: () => ({ count: 0 }),
    updateInput:(state, actions, character)=>({input:state.input + character}),
    addItem:(state)=>({list:state.list.concat ([state.input]) }),
  },
  view: (state, actions) =>
    main([
      div([
      button({ onclick: actions.reset }, 'Reset'),
      button ({onclick:actions.addItem}, 'Add'),
      ]),
      input({ oninput: (character) => (actions.updateInput(character.data)) }),
      ul([
        state.list.map((item) =>li([item]))
      ])
    ]),
})
