import React from "react"
import PropTypes from "prop-types"
import { ArrowBack } from "@material-ui/icons"
import { withRouter } from "react-router-dom"
import { ButtonBase } from "@material-ui/core"

const propTypes = {
    history: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

const defaultProps = {
    onClick: () => {},
}

function BackButton({ history, onClick }) {
    function onBackClick() {
        if (onClick) {
            onClick()
        }

        if (history) {
            if (history.length > 2) {
                history.goBack()
            } else {
                history.push("/")
            }
        } else {
            document.location.href = "/"
        }
    }

    // return <button onClick={onBackClick}>BACK</button>
    return (
        <ButtonBase onClick={onBackClick}>
            <ArrowBack />
        </ButtonBase>
    )
}

BackButton.propTypes = propTypes
BackButton.defaultProps = defaultProps
export default withRouter(BackButton)
