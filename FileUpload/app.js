const fileInput = document.querySelector("#input");
const btnUpload = document.querySelector("#btnUpload");
const output = document.querySelector("#output");

btnUpload.addEventListener("click", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", async (event) => {
    const result = event.target.result;
    const CHUNK_SIZE = 10000;
    const totalChunks = Math.ceil(result.length / CHUNK_SIZE);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = start + CHUNK_SIZE;
      const chunk = result.slice(start, end);
      await fetch("http://localhost:8080/upload", {
        method: "POST",
        headers: {
          "content-type": "application/octet-stream",
          "content-length": chunk.length,
          "file-name": file.name,
        },
        body: chunk,
      });
      output.textContent = Math.round((i * 100) / chunkCount, 0) + "%";
    }
  });

  reader.readAsText(file);
});
