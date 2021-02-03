import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const CommingSoon = () => {
    return (
        <div className="bg-gray-900 h-screen flex items-center justify-center">
            <div>
                <div className="font-bold text-blue-400 text-3xl mb-2">
                    We comming soon.
        </div>
                <div className="text-gray-300 text-center">
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
        </div>
    )
}

export default CommingSoon