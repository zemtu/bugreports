/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "App"

const RootApp = () => (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(<RootApp />, document.getElementById("root"))
