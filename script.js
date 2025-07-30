const categories = [
  {
    name: "ВСЕ КАТЕГОРИИ",
    sub: ["Смартфоны", "Планшеты", "Аксессуары"]
  },
  {
    name: "ТЕЛЕФОНЫ И ГАДЖЕТЫ",
    sub: ["iPhone", "Android", "Смарт-часы"]
  },
  {
    name: "БЫТОВАЯ ТЕХНИКА",
    sub: ["Холодильники", "Пылесосы", "Микроволновки"]
  },
  {
    name: "ТВ, АУДИО, ВИДЕО",
    sub: ["Телевизоры", "Наушники", "Колонки"]
  },
  {
    name: "КОМПЬЮТЕРЫ",
    sub: ["Ноутбуки", "Мониторы", "Периферия"]
  },
  {
    name: "МЕБЕЛЬ",
    sub: ["Диваны", "Кровати", "Шкафы"]
  },
  {
    name: "КРАСОТА, ЗДОРОВЬЕ",
    sub: ["Косметика", "Уход за кожей"]
  },
  {
    name: "ДЕТСКИЕ ТОВАРЫ",
    sub: ["Игрушки", "Одежда"]
  },
  {
    name: "АПТЕКА",
    sub: ["Лекарства", "Медтехника"]
  }
];

const bar = document.getElementById('categoriesBar');
const dropdown = document.getElementById('dropdown');

categories.forEach((category, index) => {
  const link = document.createElement('span');
  link.className = 'category-link';
  link.textContent = category.name;

  link.addEventListener('mouseenter', (e) => {
    const rect = link.getBoundingClientRect();
    showDropdown(category.sub, rect.left);
  });

  link.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdown.matches(':hover')) {
        hideDropdown();
      }
    }, 200);
  });

  bar.appendChild(link);

  if (index < categories.length - 1) {
    const sep = document.createElement('span');
    sep.textContent = '|';
    sep.className = 'separator';
    bar.appendChild(sep);
  }
});

dropdown.addEventListener('mouseleave', () => {
  hideDropdown();
});

function showDropdown(items, left) {
  dropdown.innerHTML = '';
  items.forEach(item => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item;
    dropdown.appendChild(a);
  });
  dropdown.style.left = `${left}px`;
  dropdown.classList.remove('hidden');
}

function hideDropdown() {
  dropdown.classList.add('hidden');
}


