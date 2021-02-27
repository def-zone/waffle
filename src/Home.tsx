import { HappyNews, Mention, MobileLogin } from "./svg/UnDraw"

const Home = () => {
    return (
        
            <div className="p-4 md:p-20">
                <div className="md:flex mt-10 items-center mb-20">
                    <div className="md:w-1/2 flex justify-center">
                        <MobileLogin />
                    </div>
                    <div className="md:w-1/2">
                        <div className="text-3xl font-bold mb-4">Gain powerful with a single purchase</div>
                        <div className="text-gray-500">Use these premium extensions to supercharge your business</div>
                    </div>
                </div>
                <div className="md:flex mt-10 items-center mb-20">
                    <div className="md:w-1/2 md:pl-40">
                        <div className="text-3xl font-bold mb-4">Individual extensions</div>
                        <div className="text-gray-500">Only add those extensions which you need and save your money</div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <HappyNews />
                    </div>
                </div>
                <div className="md:flex mt-10 items-center mb-20">
                    <div className="md:w-1/2 flex justify-center">
                        <Mention />
                    </div>
                    <div className="md:w-1/2">
                        <div className="text-3xl font-bold mb-4">Priority support</div>
                        <div className="text-gray-500">Connecting you to our highly-qualified support team 24/7/365</div>
                    </div>
                </div>
            </div>
    )
}
export default Home