"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7004],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return s}});var t=n(7294);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,c=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=i(n),s=c,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||a;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function s(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:c,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1800:function(e,r,n){n.r(r),n.d(r,{default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return i}});var t=n(7462),c=n(3366),a=(n(7294),n(3905)),o=["components"],u={title:"\u901a\u8fc7MapReduce\u964d\u4f4e\u670d\u52a1\u54cd\u5e94\u65f6\u95f4",authors:"kevwan"},p={unversionedId:"blog/concurrency/mapreduce",id:"blog/concurrency/mapreduce",isDocsHomePage:!1,title:"\u901a\u8fc7MapReduce\u964d\u4f4e\u670d\u52a1\u54cd\u5e94\u65f6\u95f4",description:"\u5728\u5fae\u670d\u52a1\u4e2d\u5f00\u53d1\u4e2d\uff0capi\u7f51\u5173\u626e\u6f14\u5bf9\u5916\u63d0\u4f9brestful api\u7684\u89d2\u8272\uff0c\u800capi\u7684\u6570\u636e\u5f80\u5f80\u4f1a\u4f9d\u8d56\u5176\u4ed6\u670d\u52a1\uff0c\u590d\u6742\u7684api\u66f4\u662f\u4f1a\u4f9d\u8d56\u591a\u4e2a\u751a\u81f3\u6570\u5341\u4e2a\u670d\u52a1\u3002\u867d\u7136\u5355\u4e2a\u88ab\u4f9d\u8d56\u670d\u52a1\u7684\u8017\u65f6\u4e00\u822c\u90fd\u6bd4\u8f83\u4f4e\uff0c\u4f46\u5982\u679c\u591a\u4e2a\u670d\u52a1\u4e32\u884c\u4f9d\u8d56\u7684\u8bdd\u90a3\u4e48\u6574\u4e2aapi\u7684\u8017\u65f6\u5c06\u4f1a\u5927\u5927\u589e\u52a0\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/mapreduce.md",sourceDirName:"blog/concurrency",slug:"/blog/concurrency/mapreduce",permalink:"/cn/docs/blog/concurrency/mapreduce",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/concurrency/mapreduce.md",version:"current",lastUpdatedAt:1655049913,formattedLastUpdatedAt:"6/12/2022",frontMatter:{title:"\u901a\u8fc7MapReduce\u964d\u4f4e\u670d\u52a1\u54cd\u5e94\u65f6\u95f4",authors:"kevwan"},sidebar:"blog",previous:{title:"fx",permalink:"/cn/docs/blog/concurrency/fx"},next:{title:"\u6d41\u6570\u636e\u5904\u7406\u5229\u5668",permalink:"/cn/docs/blog/concurrency/stream"}},i=[{value:"\u5e76\u53d1\u5904\u7406\u5de5\u5177MapReduce",id:"\u5e76\u53d1\u5904\u7406\u5de5\u5177mapreduce",children:[]}],l={toc:i};function d(e){var r=e.components,n=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u4e2d\u5f00\u53d1\u4e2d\uff0capi\u7f51\u5173\u626e\u6f14\u5bf9\u5916\u63d0\u4f9brestful api\u7684\u89d2\u8272\uff0c\u800capi\u7684\u6570\u636e\u5f80\u5f80\u4f1a\u4f9d\u8d56\u5176\u4ed6\u670d\u52a1\uff0c\u590d\u6742\u7684api\u66f4\u662f\u4f1a\u4f9d\u8d56\u591a\u4e2a\u751a\u81f3\u6570\u5341\u4e2a\u670d\u52a1\u3002\u867d\u7136\u5355\u4e2a\u88ab\u4f9d\u8d56\u670d\u52a1\u7684\u8017\u65f6\u4e00\u822c\u90fd\u6bd4\u8f83\u4f4e\uff0c\u4f46\u5982\u679c\u591a\u4e2a\u670d\u52a1\u4e32\u884c\u4f9d\u8d56\u7684\u8bdd\u90a3\u4e48\u6574\u4e2aapi\u7684\u8017\u65f6\u5c06\u4f1a\u5927\u5927\u589e\u52a0\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u901a\u8fc7\u4ec0\u4e48\u624b\u6bb5\u6765\u4f18\u5316\u5462\uff1f\u6211\u4eec\u9996\u5148\u60f3\u5230\u7684\u662f\u901a\u8fc7\u5e76\u53d1\u6765\u7684\u65b9\u5f0f\u6765\u5904\u7406\u4f9d\u8d56\uff0c\u8fd9\u6837\u5c31\u80fd\u964d\u4f4e\u6574\u4e2a\u4f9d\u8d56\u7684\u8017\u65f6\uff0cGo\u57fa\u7840\u5e93\u4e2d\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/sync/#WaitGroup"},"WaitGroup")," \u5de5\u5177\u7528\u6765\u8fdb\u884c\u5e76\u53d1\u63a7\u5236\uff0c\u4f46\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\u591a\u4e2a\u4f9d\u8d56\u5982\u679c\u6709\u4e00\u4e2a\u51fa\u9519\u6211\u4eec\u671f\u671b\u80fd\u7acb\u5373\u8fd4\u56de\u800c\u4e0d\u662f\u7b49\u6240\u6709\u4f9d\u8d56\u90fd\u6267\u884c\u5b8c\u518d\u8fd4\u56de\u7ed3\u679c\uff0c\u800c\u4e14WaitGroup\u4e2d\u5bf9\u53d8\u91cf\u7684\u8d4b\u503c\u5f80\u5f80\u9700\u8981\u52a0\u9501\uff0c\u6bcf\u4e2a\u4f9d\u8d56\u51fd\u6570\u90fd\u9700\u8981\u6dfb\u52a0Add\u548cDone\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u6bd4\u8f83\u5bb9\u6613\u51fa\u9519"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u7684\u80cc\u666f\uff0cgo-zero\u6846\u67b6\u4e2d\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5e76\u53d1\u5904\u7406\u5de5\u5177",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/blob/master/core/mr/mapreduce.go"},"MapReduce"),"\uff0c\u8be5\u5de5\u5177\u5f00\u7bb1\u5373\u7528\uff0c\u4e0d\u9700\u8981\u505a\u4ec0\u4e48\u521d\u59cb\u5316\uff0c\u6211\u4eec\u901a\u8fc7\u4e0b\u56fe\u770b\u4e0b\u4f7f\u7528MapReduce\u548c\u6ca1\u4f7f\u7528\u7684\u8017\u65f6\u5bf9\u6bd4:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/mr_time.png",alt:"\u4f9d\u8d56\u8017\u65f6\u5bf9\u6bd4"})),(0,a.kt)("p",null,"\u76f8\u540c\u7684\u4f9d\u8d56\uff0c\u4e32\u884c\u5904\u7406\u7684\u8bdd\u9700\u8981200ms\uff0c\u4f7f\u7528MapReduce\u540e\u7684\u8017\u65f6\u7b49\u4e8e\u6240\u6709\u4f9d\u8d56\u4e2d\u6700\u5927\u7684\u8017\u65f6\u4e3a100ms\uff0c\u53ef\u89c1MapReduce\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u670d\u52a1\u8017\u65f6\uff0c\u800c\u4e14\u968f\u7740\u4f9d\u8d56\u7684\u589e\u52a0\u6548\u679c\u5c31\u4f1a\u8d8a\u660e\u663e\uff0c\u51cf\u5c11\u5904\u7406\u8017\u65f6\u7684\u540c\u65f6\u5e76\u4e0d\u4f1a\u589e\u52a0\u670d\u52a1\u5668\u538b\u529b"),(0,a.kt)("h2",{id:"\u5e76\u53d1\u5904\u7406\u5de5\u5177mapreduce"},"\u5e76\u53d1\u5904\u7406\u5de5\u5177",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/zeromicro/go-zero/tree/master/core/mr"},"MapReduce")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/MapReduce"},"MapReduce"),"\u662fGoogle\u63d0\u51fa\u7684\u4e00\u4e2a\u8f6f\u4ef6\u67b6\u6784\uff0c\u7528\u4e8e\u5927\u89c4\u6a21\u6570\u636e\u96c6\u7684\u5e76\u884c\u8fd0\u7b97\uff0cgo-zero\u4e2d\u7684MapReduce\u5de5\u5177\u6b63\u662f\u501f\u9274\u4e86\u8fd9\u79cd\u67b6\u6784\u601d\u60f3  "),(0,a.kt)("p",null,"go-zero\u6846\u67b6\u4e2d\u7684MapReduce\u5de5\u5177\u4e3b\u8981\u7528\u6765\u5bf9\u6279\u91cf\u6570\u636e\u8fdb\u884c\u5e76\u53d1\u7684\u5904\u7406\uff0c\u4ee5\u6b64\u6765\u63d0\u5347\u670d\u52a1\u7684\u6027\u80fd  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/mr.png",alt:"mapreduce\u539f\u7406\u56fe"})),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u51e0\u4e2a\u793a\u4f8b\u6765\u6f14\u793aMapReduce\u7684\u7528\u6cd5  "),(0,a.kt)("p",null,"MapReduce\u4e3b\u8981\u6709\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3agenerate\u7528\u4ee5\u751f\u4ea7\u6570\u636e\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3amapper\u7528\u4ee5\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3areducer\u7528\u4ee5\u5bf9mapper\u540e\u7684\u6570\u636e\u505a\u805a\u5408\u8fd4\u56de\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7opts\u9009\u9879\u8bbe\u7f6e\u5e76\u53d1\u5904\u7406\u7684\u7ebf\u7a0b\u6570\u91cf  "),(0,a.kt)("p",null,"\u573a\u666f\u4e00: \u67d0\u4e9b\u529f\u80fd\u7684\u7ed3\u679c\u5f80\u5f80\u9700\u8981\u4f9d\u8d56\u591a\u4e2a\u670d\u52a1\uff0c\u6bd4\u5982\u5546\u54c1\u8be6\u60c5\u7684\u7ed3\u679c\u5f80\u5f80\u4f1a\u4f9d\u8d56\u7528\u6237\u670d\u52a1\u3001\u5e93\u5b58\u670d\u52a1\u3001\u8ba2\u5355\u670d\u52a1\u7b49\u7b49\uff0c\u4e00\u822c\u88ab\u4f9d\u8d56\u7684\u670d\u52a1\u90fd\u662f\u4ee5rpc\u7684\u5f62\u5f0f\u5bf9\u5916\u63d0\u4f9b\uff0c\u4e3a\u4e86\u964d\u4f4e\u4f9d\u8d56\u7684\u8017\u65f6\u6211\u4eec\u5f80\u5f80\u9700\u8981\u5bf9\u4f9d\u8d56\u505a\u5e76\u884c\u5904\u7406  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func productDetail(uid, pid int64) (*ProductDetail, error) {\n    var pd ProductDetail\n    err := mr.Finish(func() (err error) {\n        pd.User, err = userRpc.User(uid)\n        return\n    }, func() (err error) {\n        pd.Store, err = storeRpc.Store(pid)\n        return\n    }, func() (err error) {\n        pd.Order, err = orderRpc.Order(pid)\n        return\n    })\n\n    if err != nil {\n        log.Printf("product detail error: %v", err)\n        return nil, err\n    }\n\n    return &pd, nil\n}\n')),(0,a.kt)("p",null,"\u8be5\u793a\u4f8b\u4e2d\u8fd4\u56de\u5546\u54c1\u8be6\u60c5\u4f9d\u8d56\u4e86\u591a\u4e2a\u670d\u52a1\u83b7\u53d6\u6570\u636e\uff0c\u56e0\u6b64\u505a\u5e76\u53d1\u7684\u4f9d\u8d56\u5904\u7406\uff0c\u5bf9\u63a5\u53e3\u7684\u6027\u80fd\u6709\u5f88\u5927\u7684\u63d0\u5347  "),(0,a.kt)("p",null,"\u573a\u666f\u4e8c: \u5f88\u591a\u65f6\u5019\u6211\u4eec\u9700\u8981\u5bf9\u4e00\u6279\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u6bd4\u5982\u5bf9\u4e00\u6279\u7528\u6237id\uff0c\u6548\u9a8c\u6bcf\u4e2a\u7528\u6237\u7684\u5408\u6cd5\u6027\u5e76\u4e14\u6548\u9a8c\u8fc7\u7a0b\u4e2d\u6709\u4e00\u4e2a\u51fa\u9519\u5c31\u8ba4\u4e3a\u6548\u9a8c\u5931\u8d25\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a\u6548\u9a8c\u5408\u6cd5\u7684\u7528\u6237id  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func checkLegal(uids []int64) ([]int64, error) {\n    r, err := mr.MapReduce(func(source chan<- interface{}) {\n        for _, uid := range uids {\n            source <- uid\n        }\n    }, func(item interface{}, writer mr.Writer, cancel func(error)) {\n        uid := item.(int64)\n        ok, err := check(uid)\n        if err != nil {\n            cancel(err)\n        }\n        if ok {\n            writer.Write(uid)\n        }\n    }, func(pipe <-chan interface{}, writer mr.Writer, cancel func(error)) {\n        var uids []int64\n        for p := range pipe {\n            uids = append(uids, p.(int64))\n        }\n        writer.Write(uids)\n    })\n    if err != nil {\n        log.Printf("check error: %v", err)\n        return nil, err\n    }\n\n    return r.([]int64), nil\n}\n\nfunc check(uid int64) (bool, error) {\n    // do something check user legal\n    return true, nil\n}\n')),(0,a.kt)("p",null,"\u8be5\u793a\u4f8b\u4e2d\uff0c\u5982\u679ccheck\u8fc7\u7a0b\u51fa\u73b0\u9519\u8bef\u5219\u901a\u8fc7cancel\u65b9\u6cd5\u7ed3\u675f\u6548\u9a8c\u8fc7\u7a0b\uff0c\u5e76\u8fd4\u56deerror\u6574\u4e2a\u6548\u9a8c\u8fc7\u7a0b\u7ed3\u675f\uff0c\u5982\u679c\u67d0\u4e2auid\u6548\u9a8c\u7ed3\u679c\u4e3afalse\u5219\u6700\u7ec8\u7ed3\u679c\u4e0d\u8fd4\u56de\u8be5uid"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"MapReduce\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mapper\u548creducer\u4e2d\u90fd\u53ef\u4ee5\u8c03\u7528cancel\uff0c\u53c2\u6570\u4e3aerror\uff0c\u8c03\u7528\u540e\u7acb\u5373\u8fd4\u56de\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3anil, error"),(0,a.kt)("li",{parentName:"ul"},"mapper\u4e2d\u5982\u679c\u4e0d\u8c03\u7528writer.Write\u5219item\u6700\u7ec8\u4e0d\u4f1a\u88abreducer\u805a\u5408"),(0,a.kt)("li",{parentName:"ul"},"reducer\u4e2d\u5982\u679c\u4e0d\u8c03\u7528writer.Wirte\u5219\u8fd4\u56de\u7ed3\u679c\u4e3anil, ErrReduceNoOutput"),(0,a.kt)("li",{parentName:"ul"},"reducer\u4e3a\u5355\u7ebf\u7a0b\uff0c\u6240\u6709mapper\u51fa\u6765\u7684\u7ed3\u679c\u5728\u8fd9\u91cc\u4e32\u884c\u805a\u5408")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u5b9e\u73b0\u539f\u7406\u5206\u6790:"))),(0,a.kt)("p",null,"MapReduce\u4e2d\u9996\u5148\u901a\u8fc7buildSource\u65b9\u6cd5\u901a\u8fc7\u6267\u884cgenerate(\u53c2\u6570\u4e3a\u65e0\u7f13\u51b2channel)\u4ea7\u751f\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u65e0\u7f13\u51b2\u7684channel\uff0cmapper\u4f1a\u4ece\u8be5channel\u4e2d\u8bfb\u53d6\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func buildSource(generate GenerateFunc) chan interface{} {\n    source := make(chan interface{})\n    go func() {\n        defer close(source)\n        generate(source)\n    }()\n\n    return source\n}\n")),(0,a.kt)("p",null,"\u5728MapReduceWithSource\u65b9\u6cd5\u4e2d\u5b9a\u4e49\u4e86cancel\u65b9\u6cd5\uff0cmapper\u548creducer\u4e2d\u90fd\u53ef\u4ee5\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u8c03\u7528\u540e\u4e3b\u7ebf\u7a0b\u6536\u5230close\u4fe1\u53f7\u4f1a\u7acb\u9a6c\u8fd4\u56de  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"cancel := once(func(err error) {\n    if err != nil {\n        retErr.Set(err)\n    } else {\n        // \u9ed8\u8ba4\u7684error\n        retErr.Set(ErrCancelWithNil)\n    }\n\n    drain(source)\n    // \u8c03\u7528close(ouput)\u4e3b\u7ebf\u7a0b\u6536\u5230Done\u4fe1\u53f7\uff0c\u7acb\u9a6c\u8fd4\u56de\n    finish()\n})\n")),(0,a.kt)("p",null,"\u5728mapperDispatcher\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e86executeMappers\uff0cexecuteMappers\u6d88\u8d39buildSource\u4ea7\u751f\u7684\u6570\u636e\uff0c\u6bcf\u4e00\u4e2aitem\u90fd\u4f1a\u8d77\u4e00\u4e2agoroutine\u5355\u72ec\u5904\u7406\uff0c\u9ed8\u8ba4\u6700\u5927\u5e76\u53d1\u6570\u4e3a16\uff0c\u53ef\u4ee5\u901a\u8fc7WithWorkers\u8fdb\u884c\u8bbe\u7f6e  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var wg sync.WaitGroup\ndefer func() {\n    wg.Wait() // \u4fdd\u8bc1\u6240\u6709\u7684item\u90fd\u5904\u7406\u5b8c\u6210\n    close(collector)\n}()\n\npool := make(chan lang.PlaceholderType, workers)\nwriter := newGuardedWriter(collector, done) // \u5c06mapper\u5904\u7406\u5b8c\u7684\u6570\u636e\u5199\u5165collector\nfor {\n    select {\n    case <-done: // \u5f53\u8c03\u7528\u4e86cancel\u4f1a\u89e6\u53d1\u7acb\u5373\u8fd4\u56de\n        return\n    case pool <- lang.Placeholder: // \u63a7\u5236\u6700\u5927\u5e76\u53d1\u6570\n        item, ok := <-input\n        if !ok {\n            <-pool\n            return\n        }\n\n        wg.Add(1)\n        go func() {\n            defer func() {\n                wg.Done()\n                <-pool\n            }()\n\n            mapper(item, writer) // \u5bf9item\u8fdb\u884c\u5904\u7406\uff0c\u5904\u7406\u5b8c\u8c03\u7528writer.Write\u628a\u7ed3\u679c\u5199\u5165collector\u5bf9\u5e94\u7684channel\u4e2d\n        }()\n    }\n}\n")),(0,a.kt)("p",null,"reducer\u5355goroutine\u5bf9\u6570mapper\u5199\u5165collector\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u5982\u679creducer\u4e2d\u6ca1\u6709\u624b\u52a8\u8c03\u7528writer.Write\u5219\u6700\u7ec8\u4f1a\u6267\u884cfinish\u65b9\u6cd5\u5bf9output\u8fdb\u884cclose\u907f\u514d\u6b7b\u9501"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'go func() {\n    defer func() {\n        if r := recover(); r != nil {\n            cancel(fmt.Errorf("%v", r))\n        } else {\n            finish()\n        }\n    }()\n    reducer(collector, writer, cancel)\n}()\n')),(0,a.kt)("p",null,"\u5728\u8be5\u5de5\u5177\u5305\u4e2d\u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u9488\u5bf9\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u7684\u65b9\u6cd5\uff0c\u5b9e\u73b0\u539f\u7406\u4e0eMapReduce\u5927\u540c\u5c0f\u5f02\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u67e5\u770b\u6e90\u7801\u5b66\u4e60"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MapReduceVoid \u529f\u80fd\u548cMapReduce\u7c7b\u4f3c\u4f46\u6ca1\u6709\u7ed3\u679c\u8fd4\u56de\u53ea\u8fd4\u56deerror"),(0,a.kt)("li",{parentName:"ul"},"Finish \u5904\u7406\u56fa\u5b9a\u6570\u91cf\u7684\u4f9d\u8d56\uff0c\u8fd4\u56deerror\uff0c\u6709\u4e00\u4e2aerror\u7acb\u5373\u8fd4\u56de"),(0,a.kt)("li",{parentName:"ul"},"FinishVoid \u548cFinish\u65b9\u6cd5\u529f\u80fd\u7c7b\u4f3c\uff0c\u6ca1\u6709\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},"Map \u53ea\u505agenerate\u548cmapper\u5904\u7406\uff0c\u8fd4\u56dechannel"),(0,a.kt)("li",{parentName:"ul"},"MapVoid \u548cMap\u529f\u80fd\u7c7b\u4f3c\uff0c\u65e0\u8fd4\u56de")),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86go-zero\u6846\u67b6\u4e2d\u7684MapReduce\u5de5\u5177\uff0c\u5728\u5b9e\u9645\u7684\u9879\u76ee\u4e2d\u975e\u5e38\u5b9e\u7528\u3002\u7528\u597d\u5de5\u5177\u5bf9\u4e8e\u63d0\u5347\u670d\u52a1\u6027\u80fd\u548c\u5f00\u53d1\u6548\u7387\u90fd\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u4e9b\u6536\u83b7\u3002"))}d.isMDXComponent=!0}}]);