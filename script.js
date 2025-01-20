//your JS code here. If required.
const openModalBtn = document.getElementById('openModal');
        const modal = document.getElementById('myModal');
        const closeModalBtn = document.querySelector('.close-modal');

        // Open modal
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking on close button
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });