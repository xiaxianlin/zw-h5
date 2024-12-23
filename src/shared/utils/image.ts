const loadImage = (key: string, url: string): Promise<AssetMap> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ [key]: img });
    img.src = url;
  });
};

const loadBlobUrl = async (key: string, url: string): Promise<AssetBlobMap> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`图片加载失败: ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    return { [key]: blobUrl };
  } catch (error) {
    console.error("转换失败:", error);
    return {};
  }
};

export const ImageLoader = {
  async load(path: string, images: AssetUrlMap): Promise<AssetMap> {
    const res = await Promise.all(Object.keys(images).map((key) => loadImage(key, `${path}/${images[key]}`)));
    return res.reduce((prev, curr) => ({ ...prev, ...curr }), {});
  },

  async loadBlob(path: string, images: AssetUrlMap): Promise<AssetBlobMap> {
    const res = await Promise.all(Object.keys(images).map((key) => loadBlobUrl(key, `${path}/${images[key]}`)));
    return res.reduce((prev, curr) => ({ ...prev, ...curr }), {});
  },
};
