import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  // This URL can be combined with a photo id to fetch a photo.
  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };
  // This URL can be used to get an array of objects that contain information about various photos.
  const PHOTO_LIST_URL = "https://picsum.photos/list";

  const fetchPhotos = () =>
    fetch(PHOTO_LIST_URL)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Photo Wall</h1>
        <p>
          Read the README and complete the numbered steps. Afterward, delete
          this paragraph.
        </p>
      </header>
      <div className="collage">
        {photos &&
          photos.map((photo) => (
            <img
              className="photo"
              alt={photo.fileName}
              key={photo.id}
              src={getPhotoFromId(photo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
