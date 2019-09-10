// document.getElementById('content').innerHTML =
    //   marked('# Marked in browser\n\nRendered by **marked**.');

;(async () => {
    let res = await $.get('/docs/docs/test1.md')
    console.log('res is:', res)

    let json = await $.get('/docs/scripts/docs.json')
    console.log('json is:', json)
})()
 