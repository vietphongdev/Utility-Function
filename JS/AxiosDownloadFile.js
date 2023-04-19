axios.get('https://picsum.photos/400/400', {
  responseType: 'blob',
  onDownloadProgress: function(progressEvent) {
    if(progressEvent.event.lengthComputable){
      console.log(((progressEvent.loaded / progressEvent.total)*100).toFixed() + "%")
    } else {
      console.log("Download in progress, please wait ...")
    }
    
  }
})
.then(obj => {
  const url = URL.createObjectURL(obj.data);
  const a = document.createElement("a");
  a.href = url;
  a.download = "random-image.png";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url)
})
.catch(err => console.log(err))