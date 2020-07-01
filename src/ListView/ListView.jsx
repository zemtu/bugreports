import React, { useEffect, useState } from "react"
import range from "lodash/range"
import { Link } from "react-router-dom"

function AsyncContent({ children, loading }) {
    if (loading) {
        return null
    }

    return children()
}

function ListView() {
    const vehicles = range(100)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 0)
    }, [])

    return (
        <AsyncContent loading={loading}>
            {() =>
                vehicles.map((vehicle, index) => (
                    <Link key={index} to="/vehicle-reservation/vehicle-id-1">
                        <div
                            style={{
                                height: 100,
                                width: 200,
                                backgroundColor: index === 10 ? "red" : "green",
                                margin: 10,
                            }}
                        />
                    </Link>
                ))
            }
        </AsyncContent>
    )
}

export default ListView
