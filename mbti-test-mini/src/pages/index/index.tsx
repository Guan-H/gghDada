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
            <View className="at-article__h2 subTitle">
              <View className='at-article__p'>请根据你实际做法选择选项，而非期望做法。选项之间并没有对错好坏的区分。</View>
              <View className='at-article__p'>MBTI人格类型是不存在好坏之分，每种类型都有他们自己同样宝贵的天赋、优势和贡献。</View>
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
