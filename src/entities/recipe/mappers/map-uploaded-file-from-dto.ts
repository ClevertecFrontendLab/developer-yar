import { UploadedFileDto } from '../dto/uploaded-file.dto';
import { UploadedFile } from '../model/types';

export const mapUploadedFileFromDto = (file: UploadedFileDto): UploadedFile =>
    `${import.meta.env.VITE_IMAGES_API_URL}/${file.url}`;
