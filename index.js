import { supabase } from './supabase.js';

async function loadTools() {
  const { data, error } = await supabase.from('tools').select('*');
  
  if (error) {
    console.error('Error loading tools:', error);
    return;
  }

  const list = document.getElementById('tool-list');
  list.innerHTML = data.map(tool => `
    <div style="margin-bottom: 20px;">
      <strong>${tool.name}</strong> by ${tool.maker}<br/>
      <em>${tool.quote}</em><br/>
      <a href="${tool.link}" target="_blank">${tool.link}</a>
    </div>
  `).join('');
}

loadTools();
