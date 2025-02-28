---
title: 华通云浙大先生 SDK
---

# Watone AI SDK


一个用于iframe通信的轻量级SDK，支持子页面与父页面之间的安全通信。

## ✨ 特性

- 🔒 安全可靠的iframe通信机制
- 🔑 支持获取登录信息
- 🧭 页面导航控制
- 📦 双向数据传输
- 📝 完整的TypeScript类型支持
- ⚡️ 轻量级，零依赖
- 🚦 完整的错误处理和超时控制
- 🔍 调试模式支持

## 📦 安装

```bash
npm install watone-ai-sdk
# 或者使用 yarn
yarn add watone-ai-sdk
# 或者使用 pnpm
pnpm add watone-ai-sdk
```
## 🚀 快速开始

### 子页面集成

在嵌入的iframe页面中使用WatoneSDK：

```typescript
import { WatoneSDK } from 'watone-ai-sdk';

// 初始化SDK
const sdk = new WatoneSDK({
  debug: true // 开启调试模式，方便开发调试
});

// 获取登录信息
try {
  const loginInfo = await sdk.getLoginInfo();
  console.log('登录信息:', loginInfo);
} catch (error) {
  console.error('获取登录信息失败:', error);
}

// 页面导航
sdk.navigate('/dashboard', { id: 123 });

// 发送数据到父页面
sdk.sendData({
  type: 'custom',
  data: { message: 'Hello from child' }
});

// 监听父页面消息
sdk.on('PARENT_DATA', (data) => {
  console.log('收到父页面数据:', data);
});

// 组件卸载时清理资源
sdk.destroy();
```

### 父页面集成

在父页面中使用ParentListener处理子页面的请求：

```typescript
import { ParentListener } from 'watone-ai-sdk';

// 初始化监听器
const listener = new ParentListener({
  debug: true // 开启调试模式
});

// 处理登录信息请求
listener.on('GET_LOGIN_INFO', (data, source) => {
  const loginInfo = {
    userId: 'user123',
    username: 'demo',
    token: 'token123'
  };
  source?.postMessage({
    type: 'LOGIN_INFO_RESPONSE',
    data: loginInfo
  }, '*');
});

// 处理导航请求
listener.on('NAVIGATE', (data) => {
  console.log('导航到:', data.url, '参数:', data.params);
  // 在这里实现你的导航逻辑
});

// 处理子页面数据
listener.on('SEND_DATA', (data) => {
  console.log('收到子页面数据:', data);
});

// 向子页面发送数据
listener.sendToChild('PARENT_DATA', {
  message: '来自父页面的数据'
});

// 组件卸载时清理资源
listener.destroy();
```

## 📖 API文档

### WatoneSDK

#### 构造函数

```typescript
new WatoneSDK(options?: WatoneSDKOptions)
```

##### 参数

- `options.debug`: boolean - 是否开启调试模式，默认为false

#### 方法

##### getLoginInfo

```typescript
getLoginInfo(timeout?: number): Promise<LoginInfo>
```

获取登录信息，支持超时控制。

- `timeout`: 超时时间（毫秒），默认5000ms
- 返回: `Promise<LoginInfo>`

##### navigate

```typescript
navigate(url: string, params?: Record<string, any>): void
```

发送页面导航请求。

- `url`: 目标页面URL
- `params`: 导航参数（可选）

##### sendData

```typescript
sendData<T>(data: T): void
```

发送自定义数据到父页面。

- `data`: 要发送的数据

##### on

```typescript
on(type: string, handler: (data: any) => void): void
```

监听父页面消息。

- `type`: 消息类型
- `handler`: 消息处理函数

##### destroy

```typescript
destroy(): void
```

清理资源，移除事件监听。

### ParentListener

#### 构造函数

```typescript
new ParentListener(options?: ParentListenerOptions)
```

##### 参数

- `options.debug`: boolean - 是否开启调试模式，默认为false

#### 方法

##### on

```typescript
on(type: MessageType, handler: MessageHandler): ParentListener
```

注册消息处理器。

- `type`: 消息类型
- `handler`: 处理函数
- 返回: this（支持链式调用）

##### off

```typescript
off(type: MessageType): ParentListener
```

移除消息处理器。

- `type`: 消息类型
- 返回: this（支持链式调用）

##### sendToChild

```typescript
sendToChild(type: string, data: any): void
```

发送数据到子页面。

- `type`: 消息类型
- `data`: 要发送的数据

##### destroy

```typescript
destroy(): void
```

清理资源，移除事件监听。

## 📨 消息类型

### 内置消息类型

- `GET_LOGIN_INFO`: 获取登录信息
- `LOGIN_INFO_RESPONSE`: 登录信息响应
- `NAVIGATE`: 页面导航
- `SEND_DATA`: 数据传输
- `PARENT_DATA`: 父页面数据

## 🎮 运行示例

项目提供了完整的示例代码，展示了SDK的主要功能：

```bash
# 克隆仓库
git clone https://github.com/xkloveme/watone-ai-sdk.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

示例代码位于 `src/demo` 目录：
- `parent.html`: 父页面示例
- `child.html`: 子页面示例
- `App.vue`: Vue版本的父页面示例

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test
```

## 📄 许可证

MIT