"use client"
import React from "react"
import styled, { keyframes } from "styled-components"

// 変数の定義
const baseColor = "#ddd"
const shineColor = "#e8e8e8"
const animationDuration = "1.6s"
const avatarOffset = "68px" // 52 + 16

// ミックスインの定義
const backgroundGradient = `
  background-image: linear-gradient(90deg, ${baseColor} 0px, ${shineColor} 40px, ${baseColor} 80px);
  background-size: 600px;
`

// キーフレームの定義
const shineLines = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
`

const shineAvatar = keyframes`
  0% {
    background-position: calc(-100px + ${avatarOffset});
  }
  40%, 100% {
    background-position: calc(140px + ${avatarOffset});
  }
`

// スタイルの適用
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Post = styled.div`
  width: 220px;
  height: 80px;
`

const Avatar = styled.div`
  float: left;
  width: 52px;
  height: 52px;
  background-color: #ccc;
  border-radius: 25%;
  margin: 8px;
  ${backgroundGradient}
  animation: ${shineAvatar} ${animationDuration} infinite linear;
`

const Line = styled.div`
  float: left;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  ${backgroundGradient}
  animation: ${shineLines} ${animationDuration} infinite linear;

  &:first-of-type {
    margin-top: 11px;
    width: 100px;
  }

  &:nth-of-type(n + 2) {
    background-color: #ddd;
  }
`

// コンポーネントのレンダリング
const SkeletonScreen = () => (
  <Container>
    <Post>
      <Avatar />
      <Line />
      <Line />
    </Post>
    <Post>
      <Avatar />
      <Line />
      <Line />
    </Post>
    <Post>
      <Avatar />
      <Line />
      <Line />
    </Post>
  </Container>
)

export default SkeletonScreen
