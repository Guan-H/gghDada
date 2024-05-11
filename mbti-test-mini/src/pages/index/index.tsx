import {Image, View} from '@tarojs/components'
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import GlobalFooter from '../components/GlobalFooter/index'
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'

export default () => {

    return (
        <View className='indexPage'>
            <View className="at-article__h1 title">MBTI 测试</View>
            <View className="at-article__h3 subTitle">
                测出你是谁
            </View>
            <AtButton
              type="primary"
              size="normal"
              className="enterBtn"
              circle
              onClick={() =>{
                Taro.navigateTo({
                    url:"/pages/doQuestion/index"
                });
            }}
            >
                开始测试
            </AtButton>
            <Image src={headerBg} className="headerBg"></Image>
            <GlobalFooter />
        </View>
    );


}
