addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const searchParams = new URL(request.url).searchParams
  const url = searchParams.get('url')
  if (!url) {
    return new Response('URL Query Parameter Required!')
  }
  const rsp = await fetch(url)
  const html = await rsp.text()
  return new Response(html, {
    headers: { 'content-type': rsp.headers.get('Content-Type')}
  })
}
