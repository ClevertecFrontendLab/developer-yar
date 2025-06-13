import { Center, CenterProps, Input } from '@chakra-ui/react';
import React, { FC, useRef, useState } from 'react';

import { PictureIcon } from '../icons';
import { imageUploaderStyles as styles } from './image-uploader.styles';

type ImageUploaderProps = {
    onFileUpload: (file: File) => void;
    id?: string;
} & CenterProps;

export const ImageUploader: FC<ImageUploaderProps> = ({ id, onFileUpload, ...props }) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDragEnter = () => {
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleBrowse = () => {
        inputRef.current?.click();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file) onFileUpload(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onFileUpload(file);
    };

    return (
        <Center
            as='label'
            htmlFor='file-drop-input'
            role='button'
            tabIndex={0}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBrowse()}
            {...styles.container(isDragging)}
            {...props}
        >
            <Input
                accept='image/*'
                data-test-id={id}
                id='file-drop-input'
                ref={inputRef}
                type='file'
                onChange={handleFileChange}
                {...styles.fileInput}
            />
            <PictureIcon {...styles.pictureIcon} />
        </Center>
    );
};
