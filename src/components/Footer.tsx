import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="bg-gray-800 text-gray-100 p-4 md:px-20 md:py-10 mt-10">
            <div className="md:flex items-center">
                <div className="md:w-3/4">
                    <div className="mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                        <div className="text-2xl font-bold ml-4">Waffle</div>
                    </div>
                    <div className="py-5">
                        <a href="/term" className="text-gray-400 hover:text-gray-300 mr-10">Term & Conditions</a>
                        <a href="/privacy" className="text-gray-400 hover:text-gray-300 mr-10">Privacy Policy</a>
                        <a href="/access" className="text-gray-400 hover:text-gray-300 mr-10">Accessbility</a>
                        <a href="/legal" className="text-gray-400 hover:text-gray-300">Legal</a>
                    </div>
                </div>
                <div className="md:w-1/4">
                    <div className="mb-2 font-medium">Get the freshest news from us</div>
                    <div className="flex">
                        <input type="text" placeholder="Enter your email" className="mr-2 px-4 rounded text-gray-900" />
                        <button type="button" className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-600 rounded font-medium">Subcribe</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-10 border-t border-gray-600 pt-5">
                <div className="">Copyright 2021 DefZone.Net</div>
                <div>
                    <a href="https://fb.me/tan.dct" target="_blank" rel="noreferrer" className="hover:text-blue-200"><FontAwesomeIcon icon={faFacebook} size="lg" className="mr-4"/></a>
                    <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-4"/>
                    <FontAwesomeIcon icon={faYoutube} size="lg" className="mr-4"/>
                    <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-4"/>
                    <a href="https://www.linkedin.com/company/defzone" target="_blank" rel="noreferrer" className="hover:text-blue-200">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer