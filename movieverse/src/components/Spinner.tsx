
export const Spinner = () => {
    return (
        <div className="flex justify-center items-center fixed inset-0 bg-black/50 blur-sm">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 text-red-500"></div>
        </div>
    )
}