document.getElementById("route-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const start = document.getElementById("start").value.trim().toUpperCase();
    const end = document.getElementById("end").value.trim().toUpperCase();
    const avoid = document.getElementById("avoid").value
      .split(",")
      .map(x => x.trim().toUpperCase())
      .filter(x => x);
  
    const res = await fetch("/api/path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start, end, avoid }),
    });
  
    const data = await res.json();
    document.getElementById("result").textContent = res.ok
      ? `Custo: ${data.cost}\nCaminho: ${data.path.join(" → ")}`
      : `Erro: ${data.error}`;
  });
  