const root = document.getElementById('root');

const style = document.createElement('style');
style.textContent = `
  :root { color: #172033; background: #f4f7fb; font-family: system-ui, -apple-system, sans-serif; }
  * { box-sizing: border-box; }
  body { margin: 0; }
  .shell { min-height: 100vh; display: grid; grid-template-columns: 220px 1fr; }
  aside { background: #12334d; color: #e7f5ff; padding: 28px 20px; }
  aside h1 { margin: 0 0 28px; font-size: 20px; }
  aside button { display: block; width: 100%; border: 0; border-radius: 6px; margin: 6px 0; padding: 10px 12px; color: #d6e8f4; background: transparent; text-align: left; cursor: pointer; }
  aside button.active, aside button:hover { background: #1d5878; color: #fff; }
  main { padding: 36px; max-width: 1100px; width: 100%; }
  h2 { margin: 0 0 8px; font-size: 28px; }
  .muted { color: #5c6b7a; }
  .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
  .card { background: #fff; border: 1px solid #dbe5ec; border-radius: 8px; padding: 20px; }
  .value { display: block; margin-top: 12px; font-size: 26px; font-weight: 700; color: #12334d; }
  @media (max-width: 720px) { .shell { grid-template-columns: 1fr; } aside { padding: 18px; } aside nav { display: flex; gap: 4px; overflow-x: auto; } aside button { min-width: 92px; } main { padding: 22px; } .cards { grid-template-columns: 1fr; } }
`;
document.head.append(style);

const sections = {
  '仪表盘': ['今日经营概览', '待处理更正 3 条', '本月出塘 128.4 吨'],
  '塘口管理': ['塘口状态', '在养塘口 12 个', '需要巡检 2 个'],
  '批次管理': ['养殖批次', '进行中 18 批', '最近更新 10 分钟前'],
  '出塘销售': ['出塘销售', '待核对金额 2 笔', '本月销售额 ¥286,400'],
};

function render(name = '仪表盘') {
  const data = sections[name] || sections['仪表盘'];
  root.innerHTML = `
    <div class="shell">
      <aside><h1>水产养殖管理系统</h1><nav>${Object.keys(sections).map((item) => `<button class="${item === name ? 'active' : ''}" data-section="${item}">${item}</button>`).join('')}</nav></aside>
      <main><div><h2>${data[0]}</h2><div class="muted">记录清晰，经营决策更及时</div></div>
        <section class="cards">${data.slice(1).map((item) => `<article class="card"><span class="muted">${item.split(' ')[0]}</span><span class="value">${item.slice(item.indexOf(' ') + 1)}</span></article>`).join('')}</section>
      </main>
    </div>`;
  root.querySelectorAll('[data-section]').forEach((button) => button.addEventListener('click', () => render(button.dataset.section)));
}

render();
