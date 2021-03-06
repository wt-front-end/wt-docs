---
title: 大屏 开发指南
---
# 大屏 开发指南

> 大屏开发过程中,需要遵循以下规范

```js
1. 大屏采用三块开发,分为左中右
2. 采用echarts,rem,flex,grid布局
3. 公3*7个1080*1920个屏幕 开发分辨率左1280*1080  中 1920*1080 右1280*1080
4. 在开发时需要在src/views/dataV 文件夹下建文件夹下面有index.vue文件,调试时访问/dataV/big/对应文件夹名称 ,最终在巨屏展示时需要访问/dataV/big/左屏文件夹名称/中屏文件夹名称/右屏文件夹名称  组成大屏页面,无需再新增路由,文件夹名称可变化
5. 图标,折线图,柱状图尽量封装,字体做自适应
6. 所涉及字体在小于等于1920*1080比例为100:1,当大于1920*1080算法为当前width / 44.8
7. 组件写样式必须添加`scoped`,避免污染其他相似文件
8. 图表字体混入`this.nowSize(12)`方法,横纵坐标图例均采用`12`号字
9. 把图表文件抽离,数据,图表配置在组件里做,外层只做数据接入,减少当前文件长度,提高可读性
10. 当数据接口没有或者调用失败需要,需要写入假数据,图标不能为空
11. 接口调用统一采用`this.$api`形式,单独请求,不要一个接口挂,所有图表展示不出来
```

> [废弃]监督结果跳转到监督对象详情

```html
<templateDetail ref="templateDetail" title="监督对象详情">
  <DonateDetail :id="id" :isDataV="true" :key="id" />
</templateDetail>
```

```js
// table里面跳转到监督对象详情,添加一列
{
  title: '预警关联监察对象',
  dataIndex: 'warningResult',
  customRender: (text, row, index) => {
    const arr = []
    const h = this.$createElement
    if (this.$strRegSupervisedObject(text) instanceof Array) {
      this.$strRegSupervisedObject(text).map((item) => {
        arr.push(
          h(
            'a',
            {
              on: {
                click: () => {
                  this.$emit('openDetail',item)
                }
              }
            },
            item.name + '-' + item.idCard
          )
        )
      })
    }
    return h('div', arr)
  }
}
```

```js
 // 通过姓名和身份证号查询id
    handleDetail (item) {
      this.$api.queryIdByCardAndNameApi({ name: item.name, sfz: item.idCard }).then((res) => {
        if (res.data && res.data.id) {
          this.id = res.data.id
          this.$refs.templateDetail.show(true)
        } else {
          this.$message.error('暂未查到当前人员')
        }
      })
    },
```

> 文字超长处理

```js
{
    title: '主要问题情节',
    dataIndex: 'zywtqj',
    hidden: true,
    ellipsis: true,
    customRender: (text, row, index) => {
      const h = props.$createElement
      return h('a-tooltip', {
        attrs: {
          title: text,
          placement: 'left'
        }
      }, text)
    }
  }
```


- 对应的`index`文件需要接收

```html
<punishTable :flag="flag" @openDetail="$emit('openDetail', $event)" />
```



#### 字体 Echarts 写法

> 全局引入

```js
fontSize: this.$nowSize(20)
```
