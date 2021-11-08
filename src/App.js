import { useState } from "react";
import "./App.css";
import { data } from "./axios/data";
import { AiOutlineCloudUpload } from "react-icons/ai";
function App() {
  const [imageUrl, setImage] = useState();
  const handleUpload = async (e) => {
    console.log(e);

    const formData = new FormData();
    formData.append("file", e);
    formData.append("type", "image/png");
    try {
      const data = await data.apiURL.post("{url}", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      if (data.data) {
        const response = data.data;
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <nav className="navbar navbar-dark bg-success fixed-top">
        <div className="justify-center">
          <span className="navbar-brand mb-0 h1 text-center">
            Krisihi Dibanishi
          </span>
        </div>
      </nav>
      <div className="container ">
        <form className="upload-div">
          <div class="form-group ">
            <label for="exampleFormControlFile1">
              <div className="justify-center ">
                <AiOutlineCloudUpload size={100} color="#fafafa" />
                <div>Upload your image</div>
              </div>
            </label>
            <div>{imageUrl && <image src={imageUrl} />}</div>
            <input
              type="file"
              className="form-control-file ghost"
              style={{ display: "none" }}
              id="exampleFormControlFile1"
              onChange={(e) => handleUpload(e.target.files[0])}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
