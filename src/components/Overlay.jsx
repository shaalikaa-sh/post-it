export default function Overlay({ children }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center backdrop-blur-md" >
            {children}
        </div>
    )
}