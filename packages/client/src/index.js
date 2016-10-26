import jss from 'jss'
import preset from 'jss-preset-default'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/HashRouter'

import Game from './game'

jss.setup(preset())

const el = document.getElementById('root')
ReactDOM.render(<Router><Game /></Router>, el)
