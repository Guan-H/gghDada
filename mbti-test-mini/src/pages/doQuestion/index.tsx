import {useEffect, useState} from "react";
import {View} from '@tarojs/components'
import Taro from "@tarojs/taro";
import {AtButton, AtRadio} from "taro-ui";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import questions from '../../data/questions.json'
import './index.scss'
import GlobalFooter from "../components/GlobalFooter";


export default () => {

  // 当前题目序号（从 1 开始）
  const [current, setCurrent] = useState<number>(1);
  //当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const radioOptions = currentQuestion.options.map((option) => {
    return {
      label: `${option.key}.${option.value}`,
      value: option.key
    }
  })

  //当前回答
  const [currenAnswer, setCurrentAnswer] = useState<String>();
  //回答列表
  const [answerList] = useState<String[]>([]);

  //序号变化时,切换当前题目和当前回答
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current])

  return (
    <View className='doQuestionPage'>
      <View className="at-article__h2 title">
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio value={currenAnswer} options={radioOptions} onClick={(value) => {
          setCurrentAnswer(value)
          //记录回答
          answerList[current - 1] = value;
        }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          size="normal"
          className="controlBtn"
          circle
          disabled={!currenAnswer}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          下一题
        </AtButton>
      )
      }
      {current == questions.length && (
        <AtButton
          size="normal"
          className="controlBtn"
          circle
          disabled={!currenAnswer}
          onClick={() => {
            //传递答案
            Taro.setStorageSync("answerList", answerList);
            Taro.navigateTo({
              url: "/pages/result/index"
            })
          }}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="upperBtn"
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );


}
