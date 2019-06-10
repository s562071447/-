  $.ajax({url: "http://bbh.com/index.php/manage/qiniu/gettoken", success: function(res){
    var token = res.uptoken;
    var domain = res.domain;
    var config = {
      useCdnDomain: true,
      disableStatisticsReport: false,
      retryCount: 6,
      region: qiniu.region.z0
    };
    var putExtra = {
      fname: "",
      params: {},
      mimeType: null
    };
    
    imageControl(domain);
    uploadWithSDK(token, putExtra, config, domain);
  }})
