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
    console.log("[LOG] >>>>>>>>>>  wx.ready", res);
    // wx.onMenuShareAppMessage({
    //   title: "宋韵祥纹", // 分享标题
    //   desc: "快来一起定制你的专属祥纹吧", // 分享描述
    //   link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: sharePic, // 分享图标
    //   success: function () {
    //     console.log("[LOG] >>>>>>>>>>  onMenuShareAppMessage success");
    //   },
    // });
    // wx.onMenuShareTimeline({
    //   title: "宋韵祥纹",
    //   link: shareUrl,
    //   imageUrl: sharePic,
    //   success: function () {
    //     console.log("[LOG] >>>>>>>>>>  onMenuShareTimeline success");
    //   },
    // });
    wx.updateAppMessageShareData({
      title: "宋韵祥纹",
      desc: "快来一起定制你的专属祥纹吧",
      link: shareUrl,
      imgUrl: sharePic,
      success: function () {
        console.log("[LOG] >>>>>>>>>>  updateAppMessageShareData success");
      },
    });
    wx.updateTimelineShareData({
      title: "宋韵祥纹",
      desc: "快来一起定制你的专属祥纹吧",
      link: shareUrl,
      imgUrl: sharePic,
      success: function () {
        console.log("[LOG] >>>>>>>>>> updateTimelineShareData success");
      },
    });
  });
};
