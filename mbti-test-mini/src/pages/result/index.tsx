import {Image, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {AtButton} from "taro-ui";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import question_result from '../../data/question_results.json'
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from "../components/GlobalFooter";


export default () => {


  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{question_result[0].resultName}</View>
      <View className="at-article__h3 subTitle">{question_result[0].resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/index/index"
          })
        }}
      >返回首页</AtButton>
      <Image src={headerBg} className="headerBg"></Image>
      <GlobalFooter />
    </View>
  );


}
