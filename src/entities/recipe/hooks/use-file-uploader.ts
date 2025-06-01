import { useEffect, useState } from 'react';

export const useFileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        if (!file) {
            setImagePreview(null);
            return;
        }
        const url = URL.createObjectURL(file);
        setImagePreview(url);

        return () => URL.revokeObjectURL(url);
    }, [file]);

    const clearImagePreview = () => {
        setImagePreview(null);
    };

    return { clearImagePreview, file, handleFileUpload: setFile, imagePreview };
};
