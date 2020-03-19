import { render } from 'react-dom'
import React from 'react'
import App from './App'
import Planaria from '@planaria/react-planaria'
const conf = {
  query: {
    q: {
      find: { 
        "out.s2": "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut", 
        "$or": [ 
          { "out.s4": "video/mp4" }, 
          { "out.s4": "video/mp3" }, 
          { "out.s4": "video/ogg" }, 
          { "out.s4": "video/mpeg" },
        ], 
      },
      sort: { "blk.i": -1 },
    },
  },
  limit: 30,
  crawl: true, 
}
render(<Planaria {...conf} app={App} />, document.getElementById('entry'))