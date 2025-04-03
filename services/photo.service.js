import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";

export const addNewToGallery = async () => {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });
};
