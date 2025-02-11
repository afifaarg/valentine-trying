import React, { useState, useEffect } from "react";

const ValentinePage = () => {
  const [response, setResponse] = useState(null);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  // Timer for 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (response === null) {
        setTimeoutReached(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [response]);

  // Move the "No" button randomly
  useEffect(() => {
    if (response === null) {
      const moveButton = setInterval(() => {
        const x = Math.random() * (window.innerWidth - 100); // Subtract button width
        const y = Math.random() * (window.innerHeight - 50); // Subtract button height
        setNoButtonPosition({ x, y });
      }, 500); // Move every 500ms

      return () => clearInterval(moveButton);
    }
  }, [response]);

  // Handle user response
  const handleResponse = (answer) => {
    setResponse(answer);
  };

  return (
    <div className="w-full flex align-center justify-center min-h-screen bg-[#ffc8dd]">
      <div className="mx-auto h-2/3 w-2/3 shadow-md bg-white  rounded-2xl  mt-20 flex flex-col align-center justify-center py-8">
        {!timeoutReached && response === null && (
          <>
            <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
              Will you be my Valentine? 💌
            </h1>
            <img
              src="https://www.gifcen.com/wp-content/uploads/2021/02/love-gif.gif"
              alt="Happy GIF"
              className="w-64 h-64 mx-auto "
            />
          </>
        )}
        {timeoutReached && response === null && (
          <div className="text-center">
            <img
              src="https://media.tenor.com/SudoYU894ugAAAAM/yelynn-chay-chay-yelynnn-chay-chay.gif"
              alt="Angry GIF"
              className="w-64 h-64 mx-auto"
            />
            <p className="text-2xl font-bold text-red-600 mt-4">
              ARE YOU TRYING TO SAY NO ??????
            </p>
            <br />
            <p className="text-lg font-bold text-red-600 mt-4">
              I AM GIVING YOU A LAST CHANCE ! WILL YOU BE MY VALENTINE ? 🔪🔪🔪
            </p>
          </div>
        )}
        {response !== "yes" && (
          <div className="space-x-4 mx-auto w-1/4">
            <button
              onClick={() => handleResponse("yes")}
              className="bg-[#ffafcc] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-400  hover:shadow-lg shadow-inner transition-all"
            >
              Yes
            </button>
            <button
              style={{
                position: "absolute",
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: "left 0.5s, top 0.5s",
              }}
              onClick={() => handleResponse("no")}
              className="bg-[#ffafcc] shadow-lg text-white px-6 py-2 rounded-lg transition-all"
            >
              No
            </button>
          </div>
        )}
        {response === "yes" && (
          <div className="text-center">
            <img
              src="https://media.tenor.com/d2nnuVMvPbcAAAAj/milk-and-mocha-milk-and-mocha-bear.gif"
              alt="Happy GIF"
              className=" h-96 mx-auto "
            />
            <p className="text-2xl font-bold text-pink-600 mt-4">
              Love youuuuuuuuuuuuuuuuuu 💖
            </p>
          </div>
        )}
        {response === "no" && (
          <div className="text-center">
            <img
              src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif"
              alt="Angry GIF"
              className="w-64 h-64 mx-auto"
            />
            <p className="text-2xl font-bold text-red-600 mt-4">
              ARE YOU TRYING TO SAY NO ??????
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentinePage;
