import React, { createElement } from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, Route, matchPath } from "react-router-dom"
import style from "./LayoutApp.module.scss"

const propTypes = {
    children: PropTypes.func.isRequired,
    modals: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            component: PropTypes.func.isRequired,
        }),
    ),
}

const LayoutApp = ({ children, modals }) => (
    <Route
        render={({ location }) => {
            const key =
                modals
                    .map(
                        modal =>
                            matchPath(location.pathname, {
                                path: modal.path,
                            }) && modal.path,
                    )
                    .find(path => path) || "NON_MODAL_CONTENT"

            return (
                <TransitionGroup component={null}>
                    <CSSTransition key={key} classNames="fade" timeout={500}>
                        <Switch location={location}>
                            {modals.map(modal => (
                                <Route
                                    key={modal.path}
                                    path={modal.path}
                                    render={params => (
                                        <div className={cn(style.modal)}>
                                            {createElement(
                                                modal.component,
                                                params,
                                            )}
                                        </div>
                                    )}
                                />
                            ))}

                            <Route component={children} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )
        }}
    />
)

LayoutApp.propTypes = propTypes
export default LayoutApp
