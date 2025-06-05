
// slides

let currentIndex = 0;
    const slides = document.getElementById('slides');
    const navButtons = document.querySelectorAll('.nav-btn');
  
    function goToSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      navButtons.forEach(btn => btn.classList.remove('active'));
      navButtons[index].classList.add('active');
      currentIndex = index;
    }
  
    // Auto-play every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % 3;
      goToSlide(currentIndex);
    }, 5000);

     function previewPhoto(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function () {
        const preview = document.getElementById('preview');
        const label = document.getElementById('photo-label');
        const deleteBtn = document.getElementById('delete-button');
        preview.src = reader.result;
        preview.style.display = 'block';
        label.textContent = 'Replace Photo';
        deleteBtn.style.display = 'inline-block';
      }
      reader.readAsDataURL(file);
    }


     function previewPhoto(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function () {
        const preview = document.getElementById('preview');
        const options = document.getElementById('photo-options');
        const label = document.getElementById('photo-label');

        preview.src = reader.result;
        preview.style.display = 'block';
        options.style.display = 'block';
        label.style.display = 'none'; // Hide label after upload
      }
      reader.readAsDataURL(file);
    }

    function resetPreview() {
      const preview = document.getElementById('preview');
      const fileInput = document.getElementById('photo');
      const options = document.getElementById('photo-options');
      const label = document.getElementById('photo-label');

      preview.src = '#';
      preview.style.display = 'none';
      fileInput.value = "";
      options.style.display = 'none';
      label.style.display = 'inline-block'; // Show label again on reset
      closeDropdown();
    }

    function toggleDropdown() {
      document.getElementById('dropdown-content').classList.toggle('show');
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-button')) {
        closeDropdown();
      }
    };

    function closeDropdown() {
      const dropdown = document.getElementById('dropdown-content');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }

    function replacePhoto() {
      const fileInput = document.getElementById('photo');
      fileInput.click();
      closeDropdown();
    }

    function deletePhoto() {
      resetPreview();
      closeDropdown();
    }