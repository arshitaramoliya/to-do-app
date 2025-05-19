/**
 * Priority task management
 * Extends the base to-do with priority levels: high, medium, low
 */

const PRIORITY = { HIGH: 'high', MEDIUM: 'medium', LOW: 'low' };

const priorityColors = {
    high: '#e74c3c',
    medium: '#f39c12',
    low: '#27ae60',
};

function createPriorityTask(text, priority = PRIORITY.MEDIUM) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.priority = priority;

    const badge = document.createElement('span');
    badge.className = 'priority-badge';
    badge.textContent = priority.toUpperCase();
    badge.style.background = priorityColors[priority];
    badge.style.color = '#fff';
    badge.style.fontSize = '10px';
    badge.style.padding = '2px 7px';
    badge.style.borderRadius = '10px';
    badge.style.fontWeight = '600';

    const label = document.createElement('span');
    label.textContent = text;
    label.style.flex = '1';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.className = 'delete-btn';

    li.appendChild(badge);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    return li;
}

function sortByPriority(listEl) {
    const order = [PRIORITY.HIGH, PRIORITY.MEDIUM, PRIORITY.LOW];
    const items = [...listEl.querySelectorAll('li')];
    items.sort((a, b) => order.indexOf(a.dataset.priority) - order.indexOf(b.dataset.priority));
    items.forEach(item => listEl.appendChild(item));
}
