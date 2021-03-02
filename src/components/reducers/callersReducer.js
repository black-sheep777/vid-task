import React from 'react'

const initialState = {
  callers: [
    { id:1, name:'Alex Baxter', isMute: false, VideoOff:false, gridInfo:{ w: 4, h:9, x: 0, y: 0 } },
    { id:2, name:'Jane Doe', isMute: false, VideoOff:false, gridInfo:{ w: 4, h:9, x: 6, y: 0 } },

    { id:3, name:'John Doe', isMute: false, VideoOff:false, gridInfo:{ w: 3, h:10, x: 0, y: 8 } },
    { id:4, name:'Will Smith', isMute: false, VideoOff:false, gridInfo:{ w: 3, h:10, x: 6, y: 8 } }
  ],

  callee:{ id:4, name:'Will Smith', isMute: false, VideoOff:false },
  case:{ id:'911', subject:'Case Of Kenedy Murder', duration:2732 }
}

function reducer( state = initialState, action){
  return state

}
export default reducer