// Add event listener to the form to submit data
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the data from the form
  const name = document.getElementById('name').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  const pesan = document.getElementById('pesan').value;
  // Send the data to the server (replace with your own logic)
  console.log(`Name: ${name}`);
  console.log(`Tanggal Lahir: ${tanggalLahir}`);
  console.log(`Jenis Kelamin: ${jenisKelamin}`);
  console.log(`Pesan: ${pesan}`);
  // Clear the form
  form.reset();
});