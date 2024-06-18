
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs')
require('dotenv').config({ path: '../.env' });
// const hosturl   = process.env.ROOT_HTTP_PROTOTOL + '://' + process.env.ROOT_HOSTNAME;

const dev = 'local';


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
        target: `http://13.214.220.207:8080/api`, // 프록시할 대상 서버의 주소
        changeOrigin: true,
      },
      '/login': {
        target: `http://13.214.220.207:8080`, // 프록시할 대상 서버의 주소
        changeOrigin: true,
      }
    }
  }
});