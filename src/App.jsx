import { useState } from "react";

import "./App.css";
import ValentinePage from "./page/ValentinePage";

function App() {
  const [showMainPage, setShowMainPage] = useState(false);
  return (
    <>
      {!showMainPage && (
        <div className="w-full flex align-center justify-center min-h-screen bg-[#ffc8dd]">
          <div className="mx-auto h-2/3 w-2/3 shadow-md bg-white rounded-2xl mt-20 flex flex-col align-center justify-center py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-center text-pink-600 mb-8 animate-blink">
                💌 Your baby has a message for you! 💌
              </h1>
              <button
                onClick={() => setShowMainPage(true)}
                className="bg-[#ffafcc] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition-all"
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tn2zC7KWxg7gVYcq7zwTFRJKBcGHpIKPaw&s" />
              </button>
            </div>
          </div>
        </div>
      )}
      {showMainPage && <ValentinePage />}
    </>
  );
}

export default App;
