import React,{useEffect} from 'react';
import YouTube from 'react-youtube';

const Home=()=>{
    function YouTubeGetID (url) {
      let ID = ''
      url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
      if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i)
        ID = ID[0]
      } else {
        ID = url
      }
      return ID
    }

    const opts = {
      height: '665',
      width: '1182',
      playerVars: {
        enablejsapi: 0, //1 则可允许通过 iframe 或 JavaScript Player API 调用来控制播放器。默认值为 0，表示无法使用这些 API 控制播放器。
        autoplay: 1, //取值0和1，自动播放。默认为0。（我自己试了好像不生效，Stack Overflow 上有人说改了）
        cc_load_policy: 0,//值：1。默认根据用户偏好设置确定的。设为1会使系统在默认情况下显示字幕，即使在用户关闭字幕。
        rel: 0,//播放结束后显示相关视频。0 不显示，1 显示。（这个api已经修改为0推荐同频道，1推荐相关）
        showinfo: 0,//是否显示视频标题和上传者等信息。0 不显示，1 显示。
        color:'red',//进度条颜色，只有两种可选 red 和 white，设置成 white 时，modestbranding 无效。
        modestbranding: false,//是否显示 YouTube 徽标。
        controls: 1,//是否显示播放器控件 0 不显示，1 显示，默认 1。
        iv_load_policy: 1,//显示视频注释，而设置为3不会显示视频注释。默认值为1。
        showinfo : 0,//有助于确保在视频开始播放之前不在播放器中显示视频标题和上传者姓名等信息
        // mute:1//静音
      },
    }

    // 在播放器准备就绪后触发
    function _onReady (event) {
      // 這裡不能用pauseVideo()，pauseVideo()會導致一直在加載狀態  
      event.target.stopVideo()
    }
    // 	播放器中发生错误时触发
    function  _onError (event) { 
      console.log(event)    
    }
  return(
    <div>
      <p style={{textAlign:"center",fontSize:"20px"}}>簡介：可以觀看到按下按鈕後光在電纜中傳輸的狀況</p>
      <div style={{margin:"5px auto",width:"1182px",height:"665px",border:"1px solid black"}}>
      <YouTube videoId={YouTubeGetID('https://www.youtube.com/watch?v=Z0blPWAaaY8')} opts={opts} onReady={e => _onReady(e)} onError={e => _onError(e)} />
      </div>
    </div>    
  )
}

export default Home