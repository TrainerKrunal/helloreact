import {useState} from 'react';

export default function FileUploadComp(){

   // const API_URL="https://grape1functionapp.azurewebsites.net/api/GeneratePdf?code=UglQY9tLnbMGvsWHB53IyTMlvLo7j2yKDCrk-9stOQlQAzFuG7f2nw==?name=krunal";

   const API_URL="http://localhost:7199/api/GeneratePdf?name=krunal";

 // State to store uploaded file
 const [currentfile, setFile] = useState("");
 

 function handleUpload(event) {
    setFile(event.target.files[0]);

   
  }

  const handleSubmission = async () => {
    const data = new FormData()
    data.append('file', currentfile)
    await fetch(API_URL, { method: 'post', body: data })
      .then(res => console.log(res))
      .catch(error => console.error(error))



  }

  return (
    <div id="upload-box">
      <input type="file"  onChange={handleUpload} />
      <p>Filename: {currentfile.name}</p>
      <p>File type: {currentfile.type}</p>
      <p>File size: {currentfile.size} bytes</p> 
      <button type="button" onClick={handleSubmission}>Submit File</button>
    </div>
  );

}