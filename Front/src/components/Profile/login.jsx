
const LoginAccess = () => {
    return (
        <div className="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
            <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
                <div className="h-7 w-3 bg-gray-700"></div>
                <div className="w-3 text-center font-sans text-xl font-bold"><h1>Login</h1></div>
            </div>
            <div className="flex flex-col items-center">
                <input className="my-2 w-72 border p-2" type="email" placeholder="Username" />
                <input className="my-2 w-72 border p-2" type="password" placeholder="Password" />
            </div>
            <div className="my-2 flex justify-center">
                <button className="w-72 border bg-gray-700 p-2 font-sans text-white">Login</button>
            </div>
            {/* <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
                <div><h1>Forget Password</h1></div>
                <div><h1 className="underline underline-offset-2">Signup</h1></div>
            </div> */}
        </div>
    );
};

export default LoginAccess;



