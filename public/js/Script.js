document.addEventListener('DOMContentLoaded', (event) => {
    let deleteButtons = document.querySelectorAll('.delete-button');
    let deleteModal = document.getElementById('deleteModal');
    let confirmDeleteButton = document.getElementById('confirmDelete');
    let cancelDeleteButton = document.getElementById('cancelDelete');
    let deleteUrl = '';

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            deleteUrl = button.getAttribute('href');
            deleteModal.classList.remove('hidden');
        });
    });

    cancelDeleteButton.addEventListener('click', () => {
        deleteModal.classList.add('hidden');
    });

    confirmDeleteButton.addEventListener('click', () => {
        window.location.href = deleteUrl;
    });
});