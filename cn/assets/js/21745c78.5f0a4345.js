"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4425],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),u=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,o=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(o,".").concat(f)]||s[f]||m[f]||c;return t?r.createElement(g,i(i({ref:e},p),{},{components:t})):r.createElement(g,i({ref:e},p))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,i=new Array(c);i[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5335:function(n,e,t){t.r(e),t.d(e,{default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),i=["components"],l={title:"\u4f7f\u7528go-zero\u5f00\u53d1\u4e00\u4e2a\u65c5\u6e38\u7cfb\u7edfgo-zero-looklook",authors:"kevwan"},o={unversionedId:"blog/concurrency/stream",id:"blog/concurrency/stream",isDocsHomePage:!1,title:"\u6d41\u6570\u636e\u5904\u7406\u5229\u5668",description:"\u6d41\u5904\u7406 (Stream processing) \u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u7f16\u7a0b\u8303\u5f0f\uff0c\u5176\u5141\u8bb8\u7ed9\u5b9a\u4e00\u4e2a\u6570\u636e\u5e8f\u5217 (\u6d41\u5904\u7406\u6570\u636e\u6e90)\uff0c\u4e00\u7cfb\u5217\u6570\u636e\u64cd\u4f5c (\u51fd\u6570) \u88ab\u5e94\u7528\u5230\u6d41\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u3002\u540c\u65f6\u6d41\u5904\u7406\u5de5\u5177\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u7a0b\u5e8f\u5458\u7684\u5f00\u53d1\u6548\u7387\uff0c\u5141\u8bb8\u4ed6\u4eec\u7f16\u5199\u6709\u6548\u3001\u5e72\u51c0\u548c\u7b80\u6d01\u7684\u4ee3\u7801\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/stream.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/stream",permalink:"/cn/docs/blog/concurrency/stream",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/stream.md",version:"current",lastUpdatedAt:1655049913,formattedLastUpdatedAt:"6/12/2022",frontMatter:{title:"\u4f7f\u7528go-zero\u5f00\u53d1\u4e00\u4e2a\u65c5\u6e38\u7cfb\u7edfgo-zero-looklook",authors:"kevwan"},sidebar:"blog",previous:{title:"\u901a\u8fc7MapReduce\u964d\u4f4e\u670d\u52a1\u54cd\u5e94\u65f6\u95f4",permalink:"/cn/docs/blog/concurrency/mapreduce"},next:{title:"redis lock",permalink:"/cn/docs/blog/concurrency/redis-lock"}},u=[{value:"\u6d41\u5904\u7406\u5de5\u5177fx",id:"\u6d41\u5904\u7406\u5de5\u5177fx",children:[]},{value:"\u6d41\u6570\u636e\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c",id:"\u6d41\u6570\u636e\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c",children:[]},{value:"\u7528\u6cd5\u4e0e\u539f\u7406\u5206\u6790",id:"\u7528\u6cd5\u4e0e\u539f\u7406\u5206\u6790",children:[]},{value:"\u5e76\u53d1\u5904\u7406",id:"\u5e76\u53d1\u5904\u7406",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:u};function m(n){var e=n.components,l=(0,a.Z)(n,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u6d41\u5904\u7406 (Stream processing) \u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u7f16\u7a0b\u8303\u5f0f\uff0c\u5176\u5141\u8bb8\u7ed9\u5b9a\u4e00\u4e2a\u6570\u636e\u5e8f\u5217 (\u6d41\u5904\u7406\u6570\u636e\u6e90)\uff0c\u4e00\u7cfb\u5217\u6570\u636e\u64cd\u4f5c (\u51fd\u6570) \u88ab\u5e94\u7528\u5230\u6d41\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u3002\u540c\u65f6\u6d41\u5904\u7406\u5de5\u5177\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u7a0b\u5e8f\u5458\u7684\u5f00\u53d1\u6548\u7387\uff0c\u5141\u8bb8\u4ed6\u4eec\u7f16\u5199\u6709\u6548\u3001\u5e72\u51c0\u548c\u7b80\u6d01\u7684\u4ee3\u7801\u3002"),(0,c.kt)("p",null,"\u6d41\u6570\u636e\u5904\u7406\u5728\u6211\u4eec\u7684\u65e5\u5e38\u5de5\u4f5c\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5728\u4e1a\u52a1\u5f00\u53d1\u4e2d\u5f80\u5f80\u4f1a\u8bb0\u5f55\u8bb8\u591a\u4e1a\u52a1\u65e5\u5fd7\uff0c\u8fd9\u4e9b\u65e5\u5fd7\u4e00\u822c\u662f\u5148\u53d1\u9001\u5230 Kafka\uff0c\u7136\u540e\u518d\u7531 Job \u6d88\u8d39 Kafaka \u5199\u5230 elasticsearch\uff0c\u5728\u8fdb\u884c\u65e5\u5fd7\u6d41\u5904\u7406\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f80\u5f80\u8fd8\u4f1a\u5bf9\u65e5\u5fd7\u505a\u4e00\u4e9b\u5904\u7406\uff0c\u6bd4\u5982\u8fc7\u6ee4\u65e0\u6548\u7684\u65e5\u5fd7\uff0c\u505a\u4e00\u4e9b\u8ba1\u7b97\u4ee5\u53ca\u91cd\u65b0\u7ec4\u5408\u65e5\u5fd7\u7b49\u7b49\uff0c\u793a\u610f\u56fe\u5982\u4e0b:\n",(0,c.kt)("img",{alt:"fx_log.png",src:t(8284).Z})),(0,c.kt)("h3",{id:"\u6d41\u5904\u7406\u5de5\u5177fx"},"\u6d41\u5904\u7406\u5de5\u5177fx"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero"},"go-zero")," \u662f\u4e00\u4e2a\u529f\u80fd\u5b8c\u5907\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u6846\u67b6\u4e2d\u5185\u7f6e\u4e86\u5f88\u591a\u975e\u5e38\u5b9e\u7528\u7684\u5de5\u5177\uff0c\u5176\u4e2d\u5c31\u5305\u542b\u6d41\u6570\u636e\u5904\u7406\u5de5\u5177",(0,c.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/tree/master/core/fx"},"fx")," \uff0c\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6765\u8ba4\u8bc6\u4e0b\u8be5\u5de5\u5177\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "os"\n    "os/signal"\n    "syscall"\n    "time"\n\n    "github.com/zeromicro/go-zero/core/fx"\n)\n\nfunc main() {\n    ch := make(chan int)\n\n    go inputStream(ch)\n    go outputStream(ch)\n\n    c := make(chan os.Signal, 1)\n    signal.Notify(c, syscall.SIGTERM, syscall.SIGINT)\n    <-c\n}\n\nfunc inputStream(ch chan int) {\n    count := 0\n    for {\n        ch <- count\n        time.Sleep(time.Millisecond * 500)\n        count++\n    }\n}\n\nfunc outputStream(ch chan int) {\n    fx.From(func(source chan<- interface{}) {\n        for c := range ch {\n            source <- c\n        }\n    }).Walk(func(item interface{}, pipe chan<- interface{}) {\n        count := item.(int)\n        pipe <- count\n    }).Filter(func(item interface{}) bool {\n        itemInt := item.(int)\n        if itemInt%2 == 0 {\n            return true\n        }\n        return false\n    }).ForEach(func(item interface{}) {\n        fmt.Println(item)\n    })\n}\n')),(0,c.kt)("p",null,"inputStream\u51fd\u6570\u6a21\u62df\u4e86\u6d41\u6570\u636e\u7684\u4ea7\u751f\uff0coutputStream\u51fd\u6570\u6a21\u62df\u4e86\u6d41\u6570\u636e\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u5176\u4e2dFrom\u51fd\u6570\u4e3a\u6d41\u7684\u8f93\u5165\uff0cWalk\u51fd\u6570\u5e76\u53d1\u7684\u4f5c\u7528\u5728\u6bcf\u4e00\u4e2aitem\u4e0a\uff0cFilter\u51fd\u6570\u5bf9item\u8fdb\u884c\u8fc7\u6ee4\u4e3atrue\u4fdd\u7559\u4e3afalse\u4e0d\u4fdd\u7559\uff0cForEach\u51fd\u6570\u904d\u5386\u8f93\u51fa\u6bcf\u4e00\u4e2aitem\u5143\u7d20\u3002"),(0,c.kt)("h3",{id:"\u6d41\u6570\u636e\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c"},"\u6d41\u6570\u636e\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c"),(0,c.kt)("p",null,"\u4e00\u4e2a\u6d41\u7684\u6570\u636e\u5904\u7406\u53ef\u80fd\u5b58\u5728\u8bb8\u591a\u7684\u4e2d\u95f4\u64cd\u4f5c\uff0c\u6bcf\u4e2a\u4e2d\u95f4\u64cd\u4f5c\u90fd\u53ef\u4ee5\u4f5c\u7528\u5728\u6d41\u4e0a\u3002\u5c31\u50cf\u6d41\u6c34\u7ebf\u4e0a\u7684\u5de5\u4eba\u4e00\u6837\uff0c\u6bcf\u4e2a\u5de5\u4eba\u64cd\u4f5c\u5b8c\u96f6\u4ef6\u540e\u90fd\u4f1a\u8fd4\u56de\u5904\u7406\u5b8c\u6210\u7684\u65b0\u96f6\u4ef6\uff0c\u540c\u7406\u6d41\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c\u5b8c\u6210\u540e\u4e5f\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6d41\u3002\n",(0,c.kt)("img",{alt:"7715f4b6-8739-41ac-8c8c-04d187172e9d.png",src:t(8416).Z}),"\nfx\u7684\u6d41\u5904\u7406\u4e2d\u95f4\u64cd\u4f5c:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u51fd\u6570"),(0,c.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,c.kt)("th",{parentName:"tr",align:null},"\u8f93\u5165"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Distinct"),(0,c.kt)("td",{parentName:"tr",align:null},"\u53bb\u9664\u91cd\u590d\u7684item"),(0,c.kt)("td",{parentName:"tr",align:null},"KeyFunc\uff0c\u8fd4\u56de\u9700\u8981\u53bb\u91cd\u7684key")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Filter"),(0,c.kt)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684item"),(0,c.kt)("td",{parentName:"tr",align:null},"FilterFunc\uff0cOption\u63a7\u5236\u5e76\u53d1\u91cf")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Group"),(0,c.kt)("td",{parentName:"tr",align:null},"\u5bf9item\u8fdb\u884c\u5206\u7ec4"),(0,c.kt)("td",{parentName:"tr",align:null},"KeyFunc\uff0c\u4ee5key\u8fdb\u884c\u5206\u7ec4")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Head"),(0,c.kt)("td",{parentName:"tr",align:null},"\u53d6\u51fa\u524dn\u4e2aitem\uff0c\u8fd4\u56de\u65b0stream"),(0,c.kt)("td",{parentName:"tr",align:null},"int64\u4fdd\u7559\u6570\u91cf")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Map"),(0,c.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u8f6c\u6362"),(0,c.kt)("td",{parentName:"tr",align:null},"MapFunc\uff0cOption\u63a7\u5236\u5e76\u53d1\u91cf")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Merge"),(0,c.kt)("td",{parentName:"tr",align:null},"\u5408\u5e76item\u5230slice\u5e76\u751f\u6210\u65b0stream"),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Reverse"),(0,c.kt)("td",{parentName:"tr",align:null},"\u53cd\u8f6citem"),(0,c.kt)("td",{parentName:"tr",align:null})),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Sort"),(0,c.kt)("td",{parentName:"tr",align:null},"\u5bf9item\u8fdb\u884c\u6392\u5e8f"),(0,c.kt)("td",{parentName:"tr",align:null},"LessFunc\u5b9e\u73b0\u6392\u5e8f\u7b97\u6cd5")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Tail"),(0,c.kt)("td",{parentName:"tr",align:null},"\u4e0eHead\u529f\u80fd\u7c7b\u4f3c\uff0c\u53d6\u51fa\u540en\u4e2aitem\u7ec4\u6210\u65b0stream"),(0,c.kt)("td",{parentName:"tr",align:null},"int64\u4fdd\u7559\u6570\u91cf")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"Walk"),(0,c.kt)("td",{parentName:"tr",align:null},"\u4f5c\u7528\u5728\u6bcf\u4e2aitem\u4e0a"),(0,c.kt)("td",{parentName:"tr",align:null},"WalkFunc\uff0cOption\u63a7\u5236\u5e76\u53d1\u91cf")))),(0,c.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u6bcf\u4e2a\u6b65\u9aa4\u548c\u6bcf\u4e2a\u6b65\u9aa4\u7684\u7ed3\u679c:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"3aefec98-56eb-45a6-a4b2-9adbdf4d63c0.png",src:t(7560).Z})),(0,c.kt)("h3",{id:"\u7528\u6cd5\u4e0e\u539f\u7406\u5206\u6790"},"\u7528\u6cd5\u4e0e\u539f\u7406\u5206\u6790"),(0,c.kt)("h4",{id:"from"},"From"),(0,c.kt)("p",null,"\u901a\u8fc7From\u51fd\u6570\u6784\u5efa\u6d41\u5e76\u8fd4\u56deStream\uff0c\u6d41\u6570\u636e\u901a\u8fc7channel\u8fdb\u884c\u5b58\u50a8\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f8b\u5b50\ns := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}\nfx.From(func(source chan<- interface{}) {\n  for _, v := range s {\n    source <- v\n  }\n})\n\n// \u6e90\u7801\nfunc From(generate GenerateFunc) Stream {\n    source := make(chan interface{})\n\n    threading.GoSafe(func() {\n        defer close(source)\n        // \u6784\u9020\u6d41\u6570\u636e\u5199\u5165channel\n        generate(source)\n    })\n\n    return Range(source)\n}\n")),(0,c.kt)("h4",{id:"filter"},"Filter"),(0,c.kt)("p",null,"Filter\u51fd\u6570\u63d0\u4f9b\u8fc7\u6ee4item\u7684\u529f\u80fd\uff0cFilterFunc\u5b9a\u4e49\u8fc7\u6ee4\u903b\u8f91true\u4fdd\u7559item\uff0cfalse\u5219\u4e0d\u4fdd\u7559:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f8b\u5b50 \u4fdd\u7559\u5076\u6570\ns := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}\nfx.From(func(source chan<- interface{}) {\n  for _, v := range s {\n    source <- v\n  }\n}).Filter(func(item interface{}) bool {\n  if item.(int)%2 == 0 {\n    return true\n  }\n  return false\n})\n\n// \u6e90\u7801\nfunc (p Stream) Filter(fn FilterFunc, opts ...Option) Stream {\n    return p.Walk(func(item interface{}, pipe chan<- interface{}) {\n    // \u6267\u884c\u8fc7\u6ee4\u51fd\u6570true\u4fdd\u7559\uff0cfalse\u4e22\u5f03\n        if fn(item) {\n            pipe <- item\n        }\n    }, opts...)\n}\n")),(0,c.kt)("h4",{id:"group"},"Group"),(0,c.kt)("p",null,"Group\u5bf9\u6d41\u6570\u636e\u8fdb\u884c\u5206\u7ec4\uff0c\u9700\u5b9a\u4e49\u5206\u7ec4\u7684key\uff0c\u6570\u636e\u5206\u7ec4\u540e\u4ee5slice\u5b58\u5165channel:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'// \u4f8b\u5b50 \u6309\u7167\u9996\u5b57\u7b26"g"\u6216\u8005"p"\u5206\u7ec4\uff0c\u6ca1\u6709\u5219\u5206\u5230\u53e6\u4e00\u7ec4\n    ss := []string{"golang", "google", "php", "python", "java", "c++"}\n    fx.From(func(source chan<- interface{}) {\n        for _, s := range ss {\n            source <- s\n        }\n    }).Group(func(item interface{}) interface{} {\n        if strings.HasPrefix(item.(string), "g") {\n            return "g"\n        } else if strings.HasPrefix(item.(string), "p") {\n            return "p"\n        }\n        return ""\n    }).ForEach(func(item interface{}) {\n        fmt.Println(item)\n    })\n}\n\n// \u6e90\u7801\nfunc (p Stream) Group(fn KeyFunc) Stream {\n  // \u5b9a\u4e49\u5206\u7ec4\u5b58\u50a8map\n    groups := make(map[interface{}][]interface{})\n    for item := range p.source {\n    // \u7528\u6237\u81ea\u5b9a\u4e49\u5206\u7ec4key\n        key := fn(item)\n    // key\u76f8\u540c\u5206\u5230\u4e00\u7ec4\n        groups[key] = append(groups[key], item)\n    }\n\n    source := make(chan interface{})\n    go func() {\n        for _, group := range groups {\n      // \u76f8\u540ckey\u7684\u4e00\u7ec4\u6570\u636e\u5199\u5165\u5230channel\n            source <- group\n        }\n        close(source)\n    }()\n\n    return Range(source)\n}\n')),(0,c.kt)("h4",{id:"reverse"},"Reverse"),(0,c.kt)("p",null,"reverse\u53ef\u4ee5\u5bf9\u6d41\u4e2d\u5143\u7d20\u8fdb\u884c\u53cd\u8f6c\u5904\u7406:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"7e0fd2b8-d4c1-4130-a216-a7d3d4301116.png",src:t(5539).Z})),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f8b\u5b50\nfx.Just(1, 2, 3, 4, 5).Reverse().ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n\n// \u6e90\u7801\nfunc (p Stream) Reverse() Stream {\n    var items []interface{}\n  // \u83b7\u53d6\u6d41\u4e2d\u6570\u636e\n    for item := range p.source {\n        items = append(items, item)\n    }\n    // \u53cd\u8f6c\u7b97\u6cd5\n    for i := len(items)/2 - 1; i >= 0; i-- {\n        opp := len(items) - 1 - i\n        items[i], items[opp] = items[opp], items[i]\n    }\n    \n  // \u5199\u5165\u6d41\n    return Just(items...)\n}\n")),(0,c.kt)("h4",{id:"distinct"},"Distinct"),(0,c.kt)("p",null,"distinct\u5bf9\u6d41\u4e2d\u5143\u7d20\u8fdb\u884c\u53bb\u91cd\uff0c\u53bb\u91cd\u5728\u4e1a\u52a1\u5f00\u53d1\u4e2d\u6bd4\u8f83\u5e38\u7528\uff0c\u7ecf\u5e38\u9700\u8981\u5bf9\u7528\u6237id\u7b49\u505a\u53bb\u91cd\u64cd\u4f5c:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f8b\u5b50\nfx.Just(1, 2, 2, 2, 3, 3, 4, 5, 6).Distinct(func(item interface{}) interface{} {\n  return item\n}).ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n// \u7ed3\u679c\u4e3a 1\uff0c2\uff0c3\uff0c4\uff0c5\uff0c6\n\n// \u6e90\u7801\nfunc (p Stream) Distinct(fn KeyFunc) Stream {\n    source := make(chan interface{})\n\n    threading.GoSafe(func() {\n        defer close(source)\n        // \u901a\u8fc7key\u8fdb\u884c\u53bb\u91cd\uff0c\u76f8\u540ckey\u53ea\u4fdd\u7559\u4e00\u4e2a\n        keys := make(map[interface{}]lang.PlaceholderType)\n        for item := range p.source {\n            key := fn(item)\n      // key\u5b58\u5728\u5219\u4e0d\u4fdd\u7559\n            if _, ok := keys[key]; !ok {\n                source <- item\n                keys[key] = lang.Placeholder\n            }\n        }\n    })\n\n    return Range(source)\n}\n")),(0,c.kt)("h4",{id:"walk"},"Walk"),(0,c.kt)("p",null,"Walk\u51fd\u6570\u5e76\u53d1\u7684\u4f5c\u7528\u5728\u6d41\u4e2d\u6bcf\u4e00\u4e2aitem\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7WithWorkers\u8bbe\u7f6e\u5e76\u53d1\u6570\uff0c\u9ed8\u8ba4\u5e76\u53d1\u6570\u4e3a16\uff0c\u6700\u5c0f\u5e76\u53d1\u6570\u4e3a1\uff0c\u5982\u8bbe\u7f6eunlimitedWorkers\u4e3atrue\u5219\u5e76\u53d1\u6570\u65e0\u9650\u5236\uff0c\u4f46\u5e76\u53d1\u5199\u5165\u6d41\u4e2d\u7684\u6570\u636e\u7531defaultWorkers\u9650\u5236\uff0cWalkFunc\u4e2d\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u540e\u7eed\u5199\u5165\u6d41\u4e2d\u7684\u5143\u7d20\uff0c\u53ef\u4ee5\u4e0d\u5199\u5165\u4e5f\u53ef\u4ee5\u5199\u5165\u591a\u4e2a\u5143\u7d20:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'// \u4f8b\u5b50\nfx.Just("aaa", "bbb", "ccc").Walk(func(item interface{}, pipe chan<- interface{}) {\n  newItem := strings.ToUpper(item.(string))\n  pipe <- newItem\n}).ForEach(func(item interface{}) {\n  fmt.Println(item)\n})\n\n// \u6e90\u7801\nfunc (p Stream) walkLimited(fn WalkFunc, option *rxOptions) Stream {\n    pipe := make(chan interface{}, option.workers)\n\n    go func() {\n        var wg sync.WaitGroup\n        pool := make(chan lang.PlaceholderType, option.workers)\n\n        for {\n      // \u63a7\u5236\u5e76\u53d1\u6570\u91cf\n            pool <- lang.Placeholder\n            item, ok := <-p.source\n            if !ok {\n                <-pool\n                break\n            }\n\n            wg.Add(1)\n            go func() {\n                defer func() {\n                    wg.Done()\n                    <-pool\n                }()\n                // \u4f5c\u7528\u5728\u6bcf\u4e2a\u5143\u7d20\u4e0a\n                fn(item, pipe)\n            }()\n        }\n\n    // \u7b49\u5f85\u5904\u7406\u5b8c\u6210\n        wg.Wait()\n        close(pipe)\n    }()\n\n    return Range(pipe)\n}\n')),(0,c.kt)("h3",{id:"\u5e76\u53d1\u5904\u7406"},"\u5e76\u53d1\u5904\u7406"),(0,c.kt)("p",null,"fx\u5de5\u5177\u9664\u4e86\u8fdb\u884c\u6d41\u6570\u636e\u5904\u7406\u4ee5\u5916\u8fd8\u63d0\u4f9b\u4e86\u51fd\u6570\u5e76\u53d1\u529f\u80fd\uff0c\u5728\u5fae\u670d\u52a1\u4e2d\u5b9e\u73b0\u67d0\u4e2a\u529f\u80fd\u5f80\u5f80\u9700\u8981\u4f9d\u8d56\u591a\u4e2a\u670d\u52a1\uff0c\u5e76\u53d1\u7684\u5904\u7406\u4f9d\u8d56\u53ef\u4ee5\u6709\u6548\u7684\u964d\u4f4e\u4f9d\u8d56\u8017\u65f6\uff0c\u63d0\u5347\u670d\u52a1\u7684\u6027\u80fd\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"b97bf7df-1781-436e-bf04-f1dd90c60537.png",src:t(6847).Z})),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"fx.Parallel(func() {\n  userRPC() // \u4f9d\u8d561\n}, func() {\n  accountRPC() // \u4f9d\u8d562\n}, func() {\n  orderRPC() // \u4f9d\u8d563\n})\n")),(0,c.kt)("p",null,"\u6ce8\u610ffx.Parallel\u8fdb\u884c\u4f9d\u8d56\u5e76\u884c\u5904\u7406\u7684\u65f6\u5019\u4e0d\u4f1a\u6709error\u8fd4\u56de\uff0c\u5982\u9700\u6709error\u8fd4\u56de\u6216\u8005\u6709\u4e00\u4e2a\u4f9d\u8d56\u62a5\u9519\u9700\u8981\u7acb\u9a6c\u7ed3\u675f\u4f9d\u8d56\u8bf7\u6c42\u8bf7\u4f7f\u7528",(0,c.kt)("a",{parentName:"p",href:"https://gocn.vip/topics/10941"},"MapReduce")," \u5de5\u5177\u8fdb\u884c\u5904\u7406\u3002"),(0,c.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,c.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u6d41\u5904\u7406\u7684\u57fa\u672c\u6982\u5ff5\u548cgo-zero\u4e2d\u7684\u6d41\u5904\u7406\u5de5\u5177fx\uff0c\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u4e2d\u6d41\u5904\u7406\u573a\u666f\u5e94\u7528\u4e5f\u975e\u5e38\u591a\uff0c\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u5b9a\u7684\u542f\u53d1\uff0c\u66f4\u597d\u7684\u5e94\u5bf9\u5de5\u4f5c\u4e2d\u7684\u6d41\u5904\u7406\u573a\u666f\u3002"))}m.isMDXComponent=!0},7560:function(n,e,t){e.Z=t.p+"assets/images/3aefec98-56eb-45a6-a4b2-9adbdf4d63c0-c34c2084d7bd7afcd7af99091d253e9f.png"},8416:function(n,e,t){e.Z=t.p+"assets/images/7715f4b6-8739-41ac-8c8c-04d187172e9d-a8ea18bb42eb39c127b90fac0f221572.png"},5539:function(n,e,t){e.Z=t.p+"assets/images/7e0fd2b8-d4c1-4130-a216-a7d3d4301116-e3b9f82cd085ec8fee6838fb5c76bd67.png"},6847:function(n,e,t){e.Z=t.p+"assets/images/b97bf7df-1781-436e-bf04-f1dd90c60537-9eb292a48d1c49c88610ce733919a670.png"},8284:function(n,e,t){e.Z=t.p+"assets/images/fx_log-57de6d72cdd7d0f5fdbbf70145e67576.png"}}]);