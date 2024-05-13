import {Image, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {AtButton} from "taro-ui";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import question_result from '../../data/question_results.json'
import './index.scss'
import headerBg from '../../assets/headerBg.jpg'
import GlobalFooter from "../components/GlobalFooter";
import {getBestQuestionResult} from "../../utils/syUtils";
import questions from '../../data/questions.json'


export default () => {

  const answerList = Taro.getStorageSync("answerList")
  if(!answerList || answerList.length < 1){
    Taro.showToast({
      title:"答案为空",
      icon:"error",
      duration:3000
    })
  }
  //测试结果
  const result =  getBestQuestionResult(answerList,questions,question_result)

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index"
          })
        }}
      >返回首页</AtButton>
      <Image src={headerBg} className="headerBg"></Image>
      <GlobalFooter />
    </View>
  );


}
