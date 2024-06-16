const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs')
require('dotenv').config({ path: '../.env' });
// const hosturl   = process.env.ROOT_HTTP_PROTOTOL + '://' + process.env.ROOT_HOSTNAME;

const dev = 'local';

// const serverUrl = hosturl;
const springport = dev === 'local' ? process.env.SPRING_PORT : process.env.SOCKET_PORT_EXT;

// 개발환경 - 아래 프록시를 로컬환경에서 실행 했을 경우 사용
const springbootUrl = `${process.env.ROOT_HTTP_PROTOTOL_LOCAL}://${process.env.SPRING_HOSTNAME}`


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
      // 프록시 요청을 보낼 api의 시작 부분 
      '/v1': {
        target: `${springbootUrl}:${springport}/api`, // 프록시할 대상 서버의 주소
        changeOrigin: true,
      },
      '/login': {
        target: `${springbootUrl}:${springport}`, // 프록시할 대상 서버의 주소
        changeOrigin: true,
      }
    }
  }
});
