export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });

    if (tabs.length > 0) {
        return tabs[0];
    } else {
        throw new Error("No active tab found");
    }
}
