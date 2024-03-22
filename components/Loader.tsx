"use client"

import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
    return (
      <div className="sweet-loading">
        <HashLoader
          color={"blue"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
}

export default Loader