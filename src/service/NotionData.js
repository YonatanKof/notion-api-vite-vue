export async function getNotionData() {

    const response = await fetch('/api/fetchNotion');
    return await response.json();
}

export async function createNotionCard(data) {
    const response = await fetch(`/api/fetchNotion`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}