import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

  try {
    if (!filePath) return null;

    const absolutePath = path.resolve(filePath);
    const uploadResult = await cloudinary.uploader.upload(absolutePath);

    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
    }

    return uploadResult.secure_url;

  } catch (error) {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    throw error;
  }
};

export default uploadOnCloudinary;
