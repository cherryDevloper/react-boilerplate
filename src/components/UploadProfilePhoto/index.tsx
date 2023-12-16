import { ChangeEvent, useRef, useState } from 'react';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.type.startsWith('image/') && file.size > 0) {
        // Read the selected file and set the preview URL
        const reader = new FileReader();
        reader.onloadend = () => setPreviewUrl(reader.result as string);
        reader.readAsDataURL(file);

        // Set the selected file
        setSelectedFile(file);
      } else {
        alert('Please select a valid image file.');
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="my-10 flex  justify-center h-[8rem]  rounded-full">
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <img
        src={selectedFile && previewUrl ? previewUrl : ''}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

export default PhotoUpload;
