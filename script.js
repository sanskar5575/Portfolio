
function closeNav() { document.getElementById('navLinks').classList.remove('open'); }

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    formStatus.style.display = 'block';
    formStatus.style.color = 'var(--text-muted)';
    formStatus.textContent = '';

    try {
        const res = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            formStatus.style.color = 'var(--accent-2)';
            formStatus.textContent = '✓ Message sent — thanks for reaching out, I\'ll reply soon.';
            contactForm.reset();
        } else {
            throw new Error('Submit failed');
        }
    } catch (err) {
        formStatus.style.color = '#FF6B6B';
        formStatus.textContent = 'Something went wrong — please email me directly at ravigupta812705@gmail.com';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send message';
    }
});
