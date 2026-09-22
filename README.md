# 出塘销售金额一致性修复

这是水产养殖管理服务的后端基线，已有塘口、批次、费用、出塘销售和周期分析接口，业务数据默认保存在 SQLite 文件中。

## 本地验证

执行测试：

```bash
python3 -m unittest discover -s tests -v
```

执行编译或构建检查：

```bash
python3 -m compileall -q app tests
```

所有验证均在单个 Linux 应用环境中完成，不需要浏览器或独立运行的数据库、缓存与消息队列。
