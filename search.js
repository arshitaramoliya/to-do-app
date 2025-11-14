/**
 * Search and filter functionality for the task list
 */

function initSearch() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        filterTasks(query);
    });
}

function filterTasks(query) {
    const items = document.querySelectorAll('#task-list li');
    let visible = 0;

    items.forEach(li => {
        const text = li.textContent.toLowerCase();
        const matches = !query || text.includes(query);
        li.style.display = matches ? '' : 'none';
        if (matches) visible++;
    });

    const countEl = document.getElementById('result-count');
    if (countEl) countEl.textContent = query
        ? `${visible} task${visible !== 1 ? 's' : ''} found`
        : '';
}

function initPriorityFilter() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const priority = btn.dataset.filter;
            const items = document.querySelectorAll('#task-list li');
            items.forEach(li => {
                li.style.display = (priority === 'all' || li.dataset.priority === priority)
                    ? '' : 'none';
            });
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initPriorityFilter();
});
