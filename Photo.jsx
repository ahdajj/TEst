
  // other version 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ImageUploader() {
//   const [selectedFile, setSelectedFile] = useState(null);



//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!selectedFile) return alert('Please select a file first');

//     const formData = new FormData();
//     formData.append('avatar', selectedFile);

//     try {
//       await axios.post('/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setSelectedFile(null);
//     } catch (err) {
//       console.error('Upload failed', err);
//     }
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <form onSubmit={handleUpload}>
//         <input type="file" name="avatar" onChange={handleFileChange} accept="image/*" />
//         <button type="submit">Upload</button>
//       </form>

      
//     </div>
//   );
// }

// // display images
// return (
// <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem' }}>
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={`data:${img.img.contentType};base64,${arrayBufferToBase64(img.img.data.data)}`}
//             alt="uploaded"
//             style={{ width: '200px', margin: '10px' }}
//           />
//         ))}
//       </div>
// )
// // Convert Buffer to base64
// function arrayBufferToBase64(buffer) {
//   let binary = '';
//   const bytes = new Uint8Array(buffer);
//   for (let b of bytes) {
//     binary += String.fromCharCode(b);
//   }
//   return window.btoa(binary);
// }

// export default ImageUploader;
