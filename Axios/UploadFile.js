/**
 * <form id="form">
    <input type="file" accept=".png, .jpg" id="file">
    <button type="submit">Upload file!</button>
</form>

<!-- Progress bar -->
<div>
    <label for="progress-bar">0%</label>
    <progress id="progress-bar" value="0" max="100"></progress>
</div>
 */



const form = document.getElementById('form');
const bar = document.getElementById('progress-bar');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData();
  const file = document.getElementById('file');
  const img = file.files[0];
  formData.append('image', img);

// Axios
const config = {
  onUploadProgress: function(progressEvent) {
    const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total)*100);
    bar.setAttribute('value', percentCompleted);
    bar.previousElementSibling.textContent = `${percentCompleted}%`
    if (percentCompleted === 100) {
      bar.previousElementSibling.textContent = `Upload complete!`
    }
  }
}

axios.post('https://httpbin.org/post', formData, config)
  .then(res => console.log(res))
  .catch(err => console.log(err))
})
