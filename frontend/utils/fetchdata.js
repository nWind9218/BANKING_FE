const fetchData = async () => {
  try {
    const res = await fetch("https://n8n.mydomain.com/webhook/get-user-data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};