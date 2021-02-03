import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    return (
    <div className="p-3 flex justify-between">
        <button type="button" className="text-2xl text-gray-800 hover:text-gray-900 focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
        </button>
    </div>)
}

export default Header