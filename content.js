// 为带有draggable="true"属性的图片添加下载按钮
function addDownloadButton(imageElement) {
    // 防止重复添加
    if (imageElement.dataset.downloadButtonAdded) {
        return;
    }

    const downloadButton = document.createElement('button');
    downloadButton.innerText = '下载原图';
    downloadButton.style.position = 'absolute';
    downloadButton.style.bottom = '10px';
    downloadButton.style.right = '10px';
    downloadButton.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    downloadButton.style.color = 'white';
    downloadButton.style.border = 'none';
    downloadButton.style.padding = '8px 12px';
    downloadButton.style.borderRadius = '5px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.zIndex = '1000';
    downloadButton.style.fontSize = '14px';
    downloadButton.style.fontFamily = 'sans-serif';

    // 找到图片的父容器
    const parentContainer = imageElement.parentElement;
    if (parentContainer && getComputedStyle(parentContainer).position === 'static') {
        parentContainer.style.position = 'relative';
    }
    if (parentContainer) {
        parentContainer.appendChild(downloadButton);
    } else {
        document.body.appendChild(downloadButton);
    }

    downloadButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const originalImageUrl = imageElement.src;
        if (originalImageUrl) {
            chrome.runtime.sendMessage({
                action: 'downloadImage',
                url: originalImageUrl
            });
            console.log('Initiating download for:', originalImageUrl);
        } else {
            console.error('Could not find original image URL for download.');
            alert('无法找到原始图片URL进行下载。');
        }
    });
    imageElement.dataset.downloadButtonAdded = 'true';
}

// 只处理弹窗里的大图
function addButtonToPopupDraggableImage() {
    // 选择 class 含有 fixed 和 bg-white 的弹窗
    const popup = Array.from(document.querySelectorAll('div.fixed.bg-white')).find(div =>
        div.className.includes('fixed') && div.className.includes('bg-white')
    );
    if (!popup) return;
    // 只选弹窗里的第一个 draggable="true" 的img
    const img = popup.querySelector('img[draggable="true"]');
    if (img) addDownloadButton(img);
}

// 监听DOM变化
const observer = new MutationObserver(() => {
    addButtonToPopupDraggableImage();
});
observer.observe(document.body, { childList: true, subtree: true });

// 页面已存在弹窗大图
addButtonToPopupDraggableImage(); 