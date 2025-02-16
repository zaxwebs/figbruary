'use client'
import styled from "styled-components";
import { Container, TypeTag } from "./ReusableStyles";
import { promptData2023 } from "@/lib/data/PromptsData";

const checkIsToday = (d) => {
  let today = new Date();
  today.setHours(0, 0, 0, 0); //reset time before comparing
  return today.valueOf() === d.valueOf();
}

const getTagClass = (t) => {
  switch (t) {
    case 'illustration':
      return 'red'
      break;
    case 'prototype':
      return 'blue'
      break;
    case 'UI':
      return 'green'
      break;
    default:
      return 'orange'
      break;
  }
}



const PromptList = (props) => {
  let prompts = promptData2023.filter(f => f.hidden === false);


  return (
    <PromptSection>
      <Container>
        <PromptWrapper>
          <h4>2023 Prompts</h4>
          {
            prompts.map((p, i) => {
              let promptDate = new Date(p.date);
              return (
                <PromptBox key={p.day + i} className={`${getTagClass(p.tag[0])} ${checkIsToday(promptDate) ? 'today' : ''}`} id={`day-${p.day}`}>
                  <h2>
                    {p.date.split(',').shift()}, 23
                    {/* To get date only using split */}
                    {
                      checkIsToday(promptDate) ? <TodayTag>That&apos;s today</TodayTag> : ''
                    }
                  </h2>
                  <Title>
                    <h3>
                      {p.name}
                    </h3>
                    <Tags>
                      {
                        p.tag.map((m) => {
                          return (
                            <TypeTag className={getTagClass(m)} key={m}>{m}</TypeTag>
                          )
                        })
                      }
                    </Tags>

                  </Title>
                  <p className="desc">
                    {p.description}
                  </p>
                  <PCredit>
                    <p>Credit: <a href=""> {p.credit}</a></p>
                  </PCredit>
                </PromptBox>
              )
            })
          }

          <h3>✦ ✦ ✦</h3>
        </PromptWrapper>
      </Container>
    </PromptSection>
  )
}

export default PromptList;

const PromptSection = styled.div`
  padding: 16px 0;
  margin-top: 40px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      margin-top: 16px;
  }
`
const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h3{
    text-align: center;
  }
  h4{
    text-align: center;
    font-size: 22px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
`

const PromptBox = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.05);
  /* box-shadow: inset 0px 0px 30px -2px rgba(255, 203, 203, 0.25); */
  border-radius: 20px;
  margin: 0 auto;
  width: 480px;
  transition: all ease 300ms;
  position: relative;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      width: 100%;
  }
  &.today{
    background-color: var(--white);
    border: 1px solid #7F52FF;
  }
  .desc{
    font-weight: 500;
    opacity: .8;
  }
  &.green{
    box-shadow: inset 0px 0px 30px -2px rgba(29, 162, 114, 0.09);
    &:hover{
      box-shadow: inset 0px 0px 30px -2px rgba(29, 162, 114, 0.12);
    }
  }
  &.orange{
    box-shadow: inset 0px 0px 30px -2px rgba(140, 0, 126, 0.08);
    &:hover{
      box-shadow: inset 0px 0px 30px -2px rgba(140, 0, 126, 0.2);
    }
  }
  &.red{
    box-shadow: inset 0px 0px 30px -2px rgba(211,0,0, .07);
    
    &:hover{
      box-shadow: inset 0px 0px 30px -2px rgba(211,0,0, .16);
    }
  }
  &.pink{
    box-shadow: inset 0px 0px 30px -2px rgba(216, 44, 106, 0.1);
    &:hover{
      box-shadow: inset 0px 0px 30px -2px rgba(216, 44, 106, 0.2);
    }
  }
  &.blue{
    box-shadow: inset 0px 0px 30px -2px rgba(7,4,138, .08);
    &:hover{
      box-shadow: inset 0px 0px 30px -2px rgba(7,4,138, .1);
    }
  }
  h2{
    font-size: 22px;
    display: flex;
    font-weight: 800;
    align-items: center;
  }
`

const TodayTag = styled.div`
  font-size: 14px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(127, 82, 255, 0.08);
  color: #7F52FF;
  border-left: 3px solid #7F52FF;
  padding: 2px 8px 2px 6px;
`

const Title = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 8px 0;
  h3{
    font-size: 18px;
  }
`
const Tags = styled.div`
  display: flex;
  margin-left: 17px;
`


const PCredit = styled.div`
  margin-top: 12px;
  p{
    color: var(--black);
    font-size: 14px;
    line-height: 20px;
  }
  a{
    color: var(--black);
    font-weight: 700;
  }
`