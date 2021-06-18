#!/usr/bin/env node
const program  = require ('commander');
const api = require('./index.js')
const pkg = require('./package.json')

program
  .version(pkg.version)
  .option('-x, --xxx', 'this is x')
program
  .command('add  ')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0,-1).join(' ')
    console.log(words);
    api.add(words).then(()=>{console.log('添加成功')},()=>{console.log('添加失败')})
  });
program
  .command('clear')
  .description('clear all task')
  .action(( ) => {
    api.clear().then(()=>{console.log('清除成功')},()=>{console.log('清除失败')})
  });

program.parse(process.argv);

if (process.argv.length===2){
  void api.showAll()

}

