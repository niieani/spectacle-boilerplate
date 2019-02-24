import React from 'react'
import ReactDOM from 'react-dom'
import Redbox from 'redbox-react'
import {setConfig} from 'react-hot-loader'
import {Presentation} from './presentation'

setConfig({errorReporter: ({error}) => <Redbox error={error} />})
ReactDOM.render(<Presentation />, document.getElementById('root'))
