import axios from "axios";

declare var wx: any;

export const sleep = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const setShareInfo = async () => {
  const shareUrl = window.location.href;
  const sharePic = "https://zw.ixxl.me/textures/modal/x01.png";
  const res = await axios({
    method: "post",
    url: "https://dgs.cztv.com/apix/khsv/cbk/jkt",
    data: { shareUrl, sharePic },
  });
  if (wx && !res?.data?.data) return;
  wx.config({ ...res.data.data });
  wx.ready(() => {
    console.log(">>>>> wx.ready", res);
    wx.updateAppMessageShareData({
      title: "宋韵祥纹",
      desc: "快来一起定制你的专属祥纹吧",
      link: shareUrl,
      imgUrl: sharePic,
      success: function () {
        console.log("updateAppMessageShareData success");
      },
    });
  });
};
