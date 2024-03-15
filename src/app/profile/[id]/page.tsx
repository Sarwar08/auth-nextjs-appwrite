export default function UserProfile({params}:any){
    return(
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1>Profile</h1>
                <p className="text-4xl">Profile Page <span className="p-2 bg-orange-400">{params.id}</span></p>
            </div>
        </>
    )
}