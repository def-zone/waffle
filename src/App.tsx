import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
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
  );
}

export default App;
