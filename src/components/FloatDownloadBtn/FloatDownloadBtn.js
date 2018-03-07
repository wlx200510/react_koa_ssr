import React, {Component} from 'react'
import './FloatDownloadBtn.scss'

class FloatDownloadBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floatBtnClass: 'float_btn'
        }
    }

    downloadApp = ()=>{
        // const { clickName, albumId } = this.props;
        var userAgent = navigator.userAgent;
        if(this.state.ckey === 'miWeather'){
            window.location.href = "mimarket://details?id=com.xiangkan.android&back=true&ref=xiangkan"
        } else if (/iphone/ig.test(userAgent)) { // iphone 跳转到app store
            window.location.href = 'https://lkme.cc/6DD/gIJkk8FTI/';
        } else if (/android/ig.test(userAgent)) { // 安卓 下载apk文件
            if (/MicroMessenger/ig.test(userAgent)) { // 微信
                window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.xiangkan.android&ckey=CK1359495491899';
            } else {
                let url = encodeURI('imiui://www.miui.com/xiangkan/home/page');
                // if(clickName == 'album_downloadApp') {
                //     url = encodeURI(`imiui://www.miui.com/xiangkan/feed/album?albumId=${albumId}`);
                // }else{
                //     url = encodeURI('imiui://www.miui.com/xiangkan/home/page');
                // }
                window.location.href = `imiui://www.miui.com/xiangkan/transition/page?dispatch_uri=${url}`;
                var t = Date.now();
                setTimeout(function(){
                    if (Date.now() - t < 1200) {
                        window.location.href = 'http://api.xk.miui.com/dispatch/index/homepage';
                    }
                }, 1000);
                return false;
            }
        }
        localStorage.ckey = this.state.ckey;
    }

    changeFloatBtnClass() {
        this.setState({
            floatBtnClass: 'float_btn is-shown'
        })
    }

    componentDidMount(){
        this.timer = setTimeout(() => this.changeFloatBtnClass(), 500);
    }
    componentWillUnmount() {
        this.timer = null;
    }

    render() {
        //var currentLocation = this.props.location.pathname;
        return (
            <div className={this.state.floatBtnClass} onClick={()=>{this.downloadApp()}}>
                打开想看，查看更多精彩视频
            </div>
        )
    }
}

export default FloatDownloadBtn