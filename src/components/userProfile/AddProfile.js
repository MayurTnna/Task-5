import React, { useRef, useState } from "react";
import "../../assets/scss/AddProfile.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdUpload } from "react-icons/md";

const AddProfile = () => {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleUploadClick = () => {
    fileInput.current.click();
  };
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      resizeImage(e.target.files[0], 500, 500);
    }
  };
  function resizeImage(file, maxWidth, maxHeight) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const resizedDataUrl = canvas.toDataURL(reader.result);

        setImage(resizedDataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    return reader;
  }

  const onImageLoaded = (img) => {
    img.setAttribute("crossOrigin", "anonymous");
    if (img.naturalWidth < crop.width || img.naturalHeight < crop.height) {
      setCrop({
        aspect: img.naturalWidth / img.naturalHeight.naturalHeight,
        unit: "px",
        width: 500,
        height: 100,
      });
    }
  };

  const onCropComplete = (crop) => {
    if (image) {
      const img = new Image();
      img.src = image;
      const canvas = document.createElement("canvas");

      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalWidth / img.height;
      const pixelRatio = window.devicePixelRatio;
      canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
      canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
      const ctx = canvas.getContext("2d");
      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingQuality = "high";
      const centerX = crop.width / 2;
      const centerY = crop.height / 2;

      const radius = Math.min(centerX, centerY);

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.clip();
      ctx.save();

      ctx.drawImage(
        img,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );
      ctx.restore();
      setCroppedImage(canvas.toDataURL());
      console.log(canvas.toDataURL());
    }
  };
  const onSave = () => {
    console.log(croppedImage);
    localStorage.setItem("image", JSON.stringify(croppedImage));
    navigate("/userprofile");
    toast.success("Profile image uploaded!");
  };

  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Helllo</strong> click on image first , drag and choose image
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="container main-main  ">
        <div className="main-container mx-auto" onClick={handleUploadClick}>
          <input
            type="file"
            id="file"
            accept="image/*"
            hidden
            ref={fileInput}
            onChange={onSelectFile}
          />
          <div>
            <AiOutlineCloudUpload className="img-area" />
            <h3>Upload Image</h3>
            <p>
              Image size must be less than <span>2MB</span>
            </p>
          </div>
        </div>
        <div className="mx-auto">
          {image && (
            <ReactCrop
              src={image}
              crop={crop}
              circularCrop={true}
              aspect={1 / 1}
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={(c) => setCrop(c)}
            >
              <img src={image} alt="Crop preview" />
            </ReactCrop>
          )}
          {croppedImage && (
            <div>
              <h2 className=" preview-text gradient-text ">Preview</h2>
              <img src={croppedImage} alt="Cropped" />
              <MdUpload onClick={onSave} className="text-danger fs-5 fw-4   " />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddProfile;
