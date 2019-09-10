// document.getElementById('content').innerHTML =
    //   marked('# Marked in browser\n\nRendered by **marked**.');

;(async () => {
    let res = await $.get('/blogs/docs/test1.md')
    console.log('res is:', res)

    let json = await $.get('/blogs/scripts/docs.json')
    console.log('json is:', json)
})()
 