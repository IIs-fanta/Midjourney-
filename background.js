chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadImage') {
        chrome.downloads.download({
            url: request.url,
            saveAs: false // 如果想弹出“另存为”对话框可设为 true
        }, (downloadId) => {
            if (chrome.runtime.lastError) {
                console.error('下载失败: ', chrome.runtime.lastError.message);
            } else {
                console.log('开始下载，ID: ', downloadId);
            }
        });
    }
}); 