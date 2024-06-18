const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs')
require('dotenv').config({ path: '../.env' });
// const hosturl   = process.env.ROOT_HTTP_PROTOTOL + '://' + process.env.ROOT_HOSTNAME;

const dev = 'local';

// const serverUrl = hosturl;
const springport = dev === 'local' ? process.env.SPRING_PORT : process.env.SOCKET_PORT_EXT;

// 개발환경 - 아래 프록시를 로컬환경에서 실행 했을 경우 사용

const springbootUrl = `http://13.214.220.207`

module.exports = defineConfig({
  // 기본 경로를 명시적으로 설정합니다.
  publicPath: '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  // 개발 서버 세팅
  devServer: {
    allowedHosts: ['all'],
    headers: { 'Access-Control-Allow-Origin': '*' },
    // 프록시 설정
    proxy: {
      '/api': {
        target: 'https://ek66mfbfpfa23yw5qfymhrh6ti0vnirc.lambda-url.ap-southeast-1.on.aws',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      // 프록시 요청을 보낼 api의 시작 부분 
      '/v1': {
        target: `http://47.129.11.199:8080`, // 프록시할 대상 서버의 주소
        changeOrigin: true,
        pathRewrite: { '^/v1': '/api/v1' },
      },
      '/login': {
        target: `http://47.129.11.199:8080`, // 프록시할 대상 서버의 주소

        changeOrigin: true,
      }
    }
  }
});