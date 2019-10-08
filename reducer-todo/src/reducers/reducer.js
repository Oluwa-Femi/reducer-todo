export const initialState = [{
    item: 'Wake up',
    completed: false,
    id: 0
},
{  
    item: 'Pray',
    completed: false,
    id: 1
},
{  
    item: 'Eat',
    completed: false,
    id: 2
},
]

export function reducer(state, action) {
    switch (action.type) {
        case "addItem":
            return [ ...state,
                {
                    item: action.payload, 
                    completed: false,
                    id: new Date()
                }
            ]
        default:
            return state
    }
  }