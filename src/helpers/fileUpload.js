

export const fileUpload = async (file) => {
    if (!file) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dtzghfypp/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-demo');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });


        if (!resp.ok) throw new Error('Could not upload file');
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        return null;
    }

}