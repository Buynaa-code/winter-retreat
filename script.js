document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const reasonsList = document.getElementById('reasons-list');
    const reasons = document.querySelectorAll('.reason');
    
    loveButton.addEventListener('click', () => {
        loveButton.classList.add('floating');
        reasonsList.classList.remove('hidden');
        setTimeout(() => {
            reasonsList.classList.add('visible');
            showReasonsSequentially();
        }, 100);
    });

    function showReasonsSequentially() {
        reasons.forEach((reason, index) => {
            setTimeout(() => {
                reason.classList.add('visible');
            }, index * 200);
        });
    }
});
