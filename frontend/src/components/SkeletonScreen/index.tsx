"use client"
import React from "react"
import styled, { keyframes } from "styled-components"

// スケルトンアニメーション
const skeletonAnimation = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

// スケルトンラッパー
const SkeletonWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;

  .p-skeleton:nth-child(2) {
    margin-top: 29px;
  }
`;

// スケルトン本体
const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  background: #ffffff;
  width: 100%;
  height: 530px;
  border: 1px solid #e6e6e6;
  border-radius: 8px 8px 16px 16px;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent);
    pointer-events: none;
    opacity: 0.8;
    animation: ${skeletonAnimation} 2s infinite;
    z-index: 1;
  }
`;

// ヘッダー
const SkeletonHeader = styled.div`
  height: 109px;
  border-bottom: 1px dashed #bdbdbd;
  position: relative;
`;

const SkeletonHeaderCircle = styled.div`
  background: #c4c4c4;
  height: 44px;
  position: absolute;
  width: 44px;
  top: 29px;
  border-radius: 50%;
  left: 27px;
`;

// 省略されていたTMPL_HELPERコンポーネントの代わり
const SkeletonHeaderDots = styled.div`
  top: 45px;
  position: absolute;
  right: 37px;
`;

// ボディ
const SkeletonBody = styled.div`
  padding: 0 27px;
`;

const SkeletonBodyTags = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 29px;
`;

const SkeletonBodyTagsOuter = styled.div`
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-right: 14px;
  position: relative;
  border-radius: 2px;

  &:nth-child(1) {
    width: 126px;
  }

  &:nth-child(2) {
    width: 177px;
  }
`;

const SkeletonBodyTagsInner = styled.div`
  border: 1px solid #bdbdbd;
  background: #e6e6e6;
  height: 21px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 10px;
  right: 0;
`;

const SkeletonBodyTitle = styled.div`
  max-width: 420px;
  height: 36px;
  background: #bdbdbd;
  margin-top: 23px;
`;

const SkeletonBodyText = styled.div`
  & > div {
    margin-top: 14px;
    background: #e6e6e6;
    height: 21px;
  }

  & > .p-skeleton__body--r-s {
    width: 181px;
  }

  & > .p-skeleton__body--r-full {
    width: 100%;
  }

  & > .p-skeleton__body--r-m {
    width: 212px;
  }
`;

const SkeletonSeparator = styled.div`
  border-bottom: 1px dashed #e6e6e6;
  margin: 45px 16px 16px 16px;
`;

const SkeletonFooter = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  height: 65px;
`;

// コンポーネントのレンダリング
const SkeletonScreen = () => (
  <SkeletonWrapper>
    <Skeleton>
      <SkeletonHeader>
        <SkeletonHeaderCircle />
        <SkeletonHeaderDots />
      </SkeletonHeader>
      <SkeletonBody>
        <SkeletonBodyTags>
          <SkeletonBodyTagsOuter>
            <SkeletonBodyTagsInner />
          </SkeletonBodyTagsOuter>
          <SkeletonBodyTagsOuter>
            <SkeletonBodyTagsInner />
          </SkeletonBodyTagsOuter>
        </SkeletonBodyTags>
        <SkeletonBodyTitle />
        <SkeletonBodyText>
          <div className="p-skeleton__body--r-s p-skeleton__spacer-top"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-s"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-m"></div>
        </SkeletonBodyText>
      </SkeletonBody>
      <SkeletonSeparator />
      <SkeletonBody>
        <SkeletonFooter />
      </SkeletonBody>
    </Skeleton>
    <Skeleton>
      <SkeletonHeader>
        <SkeletonHeaderCircle />
        <SkeletonHeaderDots />
      </SkeletonHeader>
      <SkeletonBody>
        <SkeletonBodyText>
          <div className="p-skeleton__body--r-s p-skeleton__spacer-top"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-s"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-full"></div>
          <div className="p-skeleton__body--r-m"></div>
        </SkeletonBodyText>
      </SkeletonBody>
      <SkeletonSeparator />
      <SkeletonBody>
        <SkeletonFooter />
      </SkeletonBody>
    </Skeleton>
  </SkeletonWrapper>
);

export default SkeletonScreen;
