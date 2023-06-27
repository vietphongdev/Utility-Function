
const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the page from reloading
    e.preventDefault();
   
    // construct form data
    const formData = new FormData(e.currentTarget);
    const files = e.currentTarget.files;
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // make a POST request with Axios
    const res = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res);
};

<form onSubmit={handleFormSubmit} encType='multipart/form-data'>
    <input type='file' name='file' multiple />
    <button type='submit'>Submit</button>
</form>