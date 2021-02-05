import Header from "./components/Header"
import { HappyNews, Mention, MobileLogin } from "./svg/UnDraw"
import designer from './svg/designer.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
    return (
        <div className="px-4 md:px-4 overflow-hidden relative text-gray-900" style={{ background: `url(${designer}) no-repeat`, backgroundPositionX: '100%' }}>
            <div className="items-center">
                <Header />
                <div className="flex items-center justify-center mb-4 h-screen">
                    <div>
                        <div className="text-center text-5xl font-bold">The Ultimate Company</div>
                        <div className="text-5xl mb-6 font-bold text-center">
                            Business Management Solution
                            </div>
                        <div className="text-gray-500 text-xl mb-9">
                            <div className="text-center">
                                Manage your growing business even better using Human Resource
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="py-3 px-4 text-xl bg-gray-800 text-white rounded mr-3 font-bold hover:bg-gray-900 shadow mb-3">
                                Get Started Now <FontAwesomeIcon icon={faLongArrowAltRight} />
                            </button>
                            <button className="py-3 px-4 text-xl bg-white text-gray-800 rounded font-bold hover:bg-gray-900 hover:text-white shadow">
                                Try Demo <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:p-20">
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
        </div>
    )
}
export default Home