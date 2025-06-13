import { UploadedFileApi } from '../api/uploaded-file.api';
import { UploadedFile } from '../model/types';

export const mapUploadedFileFromApi = (file: UploadedFileApi): UploadedFile =>
    `${import.meta.env.VITE_IMAGES_API_URL}/${file.url}`;
