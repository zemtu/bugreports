import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import LayoutApp from "../LayoutApp"
import BackButton from "../BackButton"
import ListView from "../ListView"

class App extends Component {
    render() {
        return (
            <Switch>
                <LayoutApp
                    modals={[
                        {
                            component: BackButton,
                            path: "/vehicle-reservation/:vehicleId",
                            direction: "RIGHT",
                        },
                    ]}
                >
                    {() => (
                        <Switch>
                            <Route component={ListView} path="/vehicles" />
                            <Redirect exact from="/" to="/vehicles" />
                        </Switch>
                    )}
                </LayoutApp>
            </Switch>
        )
    }
}

export default App
