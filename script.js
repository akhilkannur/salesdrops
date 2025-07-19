document.addEventListener("DOMContentLoaded", async () => {
  const toolsContainer = document.getElementById("tools");

  const res = await fetch("https://your-supabase-url.supabase.co/rest/v1/tools", {
    headers: {
      apikey: "your-public-anon-key",
      Authorization: "Bearer your-public-anon-key",
    },
  });

  const tools = await res.json();

  tools.forEach(tool => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = \`
      <div class="flex items-center space-x-4 mb-2">
        <img src="\${tool.logo_url}" class="logo" alt="logo">
        <div>
          <a href="\${tool.link}" target="_blank" class="text-lg font-semibold text-blue-600 hover:underline">\${tool.name}</a>
          <div class="text-sm text-gray-500">by \${tool.maker}</div>
        </div>
      </div>
      <p class="text-gray-700">"\${tool.quote}"</p>
    \`;
    toolsContainer.appendChild(div);
  });
});