import Link from "next/link";

const Signup = ()=>{
    return (
        <main className="bg-[url('/login_bg.jpg')] bg-center bg-cover w-full h-screen flex justify-center items-center flex-col">
            <div className="w-72 flex flex-col">
                <form className="flex flex-col [&>input]:px-4 [&>input]:py-2 [&>input]:mb-3 [&>input]:text-black">
                    <input type="username" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password" />
                    <button className="w-fit bg-navy-blue px-6 py-2 text-white rounded-2xl">Signup</button>
                </form>
                <span className="ml-auto text-white">Existing User? <Link className=" underline" href="/login"> login</Link></span>
            </div>
        </main>
    );
}

export default Signup;
