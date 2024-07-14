import { useRouteError } from "react-router-dom"

export default function PageNotFound() {
    const err = useRouteError()
    return (
        <>
            <h1>Oops! Something went wrong 😶‍🌫️</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </>
    )
}