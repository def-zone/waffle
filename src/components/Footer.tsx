import { faBaseballBall } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="bg-gray-200 px-2 md:px-4 py-4">
            Copyright 2020 <b>Crispy</b>
            <div className="flex justify-end">
                <FontAwesomeIcon icon={faBaseballBall} />
            </div>
        </div>
    )
}

export default Footer