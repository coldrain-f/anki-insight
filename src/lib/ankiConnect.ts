export async function invokeAnkiConnect(
    action: string,
    version: 6,
    params: {}
) {
    const response = await fetch("http://localhost:8765", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, version, params }),
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }

    return data.result;
}