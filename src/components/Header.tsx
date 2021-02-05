import { faBars, faExternalLinkAlt, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import designer from '../svg/designer.svg'

const Header = () => {
    return (
        <div className="px-4 md:px-4 overflow-hidden relative text-gray-800" style={{ background: `url(${designer}) no-repeat`, backgroundPositionX: '100%' }}>
            <div className="items-center">
                <div className="p-3 flex justify-between">
                    <button type="button" className="text-2xl text-gray-800 hover:text-gray-900 focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
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
                            <a href="https://www.messenger.com/t/tan.dct" target="_blank" rel="noreferrer" className="py-3 px-4 text-xl bg-gray-800 text-white rounded mr-3 font-bold hover:bg-gray-900 shadow mb-3">
                                Get Started Now <FontAwesomeIcon icon={faLongArrowAltRight} />
                            </a>
                            <button className="py-3 px-4 text-xl bg-white text-gray-800 rounded font-bold hover:bg-gray-900 hover:text-white shadow">
                                Try Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header