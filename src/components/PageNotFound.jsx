import { useRouteError } from "react-router-dom"

export default function PageNotFound() {
    const err = useRouteError()
    return (
        <div className="bg-black h-[100vh] text-white text-xl text-center pt-[10px]">
            <h1>Oops! Something went wrong 😶‍🌫️</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}